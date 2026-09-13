import pygame
import random
import sys

pygame.init()

# -------------------
# Settings
# -------------------
WIDTH, HEIGHT = 400, 600
FPS = 60

WHITE = (255, 255, 255)
BLUE = (135, 206, 250)
GREEN = (0, 180, 0)
YELLOW = (255, 220, 0)
BLACK = (0, 0, 0)

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Flappy Bird Clone")

clock = pygame.time.Clock()

font = pygame.font.SysFont("Arial", 32)

# -------------------
# Bird
# -------------------
bird_x = 80
bird_radius = 20

gravity = 0.5
jump_strength = -9

# -------------------
# Pipe Settings
# -------------------
pipe_width = 70
pipe_gap = 170
pipe_speed = 4


def create_pipe():
    height = random.randint(120, 380)
    return {
        "x": WIDTH,
        "height": height,
        "passed": False
    }


def reset():
    global bird_y, bird_velocity, pipes, score, game_over

    bird_y = HEIGHT // 2
    bird_velocity = 0

    pipes = [create_pipe()]
    score = 0
    game_over = False


reset()

# -------------------
# Main Loop
# -------------------
running = True

while running:

    clock.tick(FPS)

    # Events
    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        if event.type == pygame.KEYDOWN:

            if event.key == pygame.K_SPACE:

                if game_over:
                    reset()
                else:
                    bird_velocity = jump_strength

    if not game_over:

        # Bird Physics
        bird_velocity += gravity
        bird_y += bird_velocity

        # Spawn Pipes
        if pipes[-1]["x"] < WIDTH - 220:
            pipes.append(create_pipe())

        # Move Pipes
        for pipe in pipes:
            pipe["x"] -= pipe_speed

        # Remove old pipes
        if pipes[0]["x"] < -pipe_width:
            pipes.pop(0)

        # Score
        for pipe in pipes:
            if not pipe["passed"] and pipe["x"] + pipe_width < bird_x:
                pipe["passed"] = True
                score += 1

        # Collision
        bird_rect = pygame.Rect(
            bird_x - bird_radius,
            bird_y - bird_radius,
            bird_radius * 2,
            bird_radius * 2
        )

        for pipe in pipes:

            top_rect = pygame.Rect(
                pipe["x"],
                0,
                pipe_width,
                pipe["height"]
            )

            bottom_rect = pygame.Rect(
                pipe["x"],
                pipe["height"] + pipe_gap,
                pipe_width,
                HEIGHT
            )

            if bird_rect.colliderect(top_rect) or bird_rect.colliderect(bottom_rect):
                game_over = True

        if bird_y < 0 or bird_y > HEIGHT:
            game_over = True

    # -------------------
    # Draw
    # -------------------
    screen.fill(BLUE)

    # Pipes
    for pipe in pipes:

        pygame.draw.rect(
            screen,
            GREEN,
            (pipe["x"], 0, pipe_width, pipe["height"])
        )

        pygame.draw.rect(
            screen,
            GREEN,
            (
                pipe["x"],
                pipe["height"] + pipe_gap,
                pipe_width,
                HEIGHT
            )
        )

    # Bird
    pygame.draw.circle(
        screen,
        YELLOW,
        (bird_x, int(bird_y)),
        bird_radius
    )

    # Score
    score_text = font.render(str(score), True, BLACK)
    screen.blit(score_text, (20, 20))

    if game_over:

        txt = font.render("Game Over!", True, BLACK)
        txt2 = pygame.font.SysFont("Arial", 22).render(
            "Press SPACE to Restart",
            True,
            BLACK
        )

        screen.blit(txt, (110, 250))
        screen.blit(txt2, (70, 300))

    pygame.display.flip()