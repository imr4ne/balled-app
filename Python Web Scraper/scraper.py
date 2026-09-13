import requests
from bs4 import BeautifulSoup

def scrape_page(url):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")

    data = {
        "title": soup.title.string if soup.title else "No title",
        "headings": [],
        "links": [],
        "paragraphs": []
    }

    # Headings
    for tag in soup.find_all(["h1", "h2", "h3"]):
        data["headings"].append(tag.get_text(strip=True))

    # Links
    for link in soup.find_all("a", href=True):
        data["links"].append({
            "text": link.get_text(strip=True),
            "url": link["href"]
        })

    # Paragraphs
    for p in soup.find_all("p"):
        text = p.get_text(strip=True)
        if text:
            data["paragraphs"].append(text)

    return data


if __name__ == "__main__":
    url = input("Website: ")
    result = scrape_page(url)

    print(f"\nPage Title: {result['title']}\n")

    print("Headings:")
    for h in result["headings"]:
        print("-", h)

    print("\nLinks:")
    for l in result["links"][:10]:
        print(f"- {l['text']} -> {l['url']}")

    print("\nParagraphs:")
    for p in result["paragraphs"][:5]:
        print("-", p)

