# balled — prototype front-end

Prototype de marketplace mode d'occasion (façon Vinted), adapté au marché marocain
(prix en dirhams, paiement à la livraison avec acompte).

## Structure

```
balled-site/
├── index.html   → structure de la page
├── style.css    → tout le design (couleurs, typographie, layout, responsive)
├── app.js       → logique interactive (catalogue, favoris, fiche article, achat, formulaire de vente)
└── README.md
```

## Lancer le site en local

Aucune installation n'est nécessaire — c'est du HTML/CSS/JS pur, sans framework ni build.

**Option 1 — ouvrir directement**
Double-clique sur `index.html`, ou fais un clic droit → "Ouvrir avec" ton navigateur.

**Option 2 — avec VS Code (recommandé)**
1. Installe l'extension **Live Server** (Ritwick Dey) depuis le marketplace VS Code.
2. Clic droit sur `index.html` → **"Open with Live Server"**.
3. Le site s'ouvre sur `http://127.0.0.1:5500` avec rechargement automatique à chaque modification.

## Ce qui est fonctionnel

- Catalogue avec filtres par catégorie, état, et recherche
- Fiche article (clic sur une carte produit)
- Favoris (persistent uniquement pendant la session, pas de sauvegarde)
- Simulation d'achat avec paiement à la livraison : acompte en ligne + reste dû au livreur
- Formulaire "Vendre un article" qui ajoute un nouvel article au catalogue en direct

## Limites du prototype (à connecter pour une vraie plateforme)

- Toutes les données (`products`) sont stockées en mémoire dans `app.js` — elles sont
  réinitialisées à chaque rechargement de page. Il faudra une vraie base de données
  (ex. PostgreSQL, Supabase, Firebase) et une API backend pour persister les annonces,
  les comptes et les commandes.
- Pas d'authentification / compte utilisateur réel.
- Pas de vraie intégration de paiement (l'acompte est simulé côté client).
- Les photos utilisées sont des images libres de droit (Unsplash) à remplacer par les
  vraies photos des articles une fois l'upload connecté à un stockage (ex. S3, Cloudinary).

## Personnalisation rapide

- **Couleurs** : modifie les variables CSS en haut de `style.css` (`:root { --teal-900: ...; }`).
- **Produits de démo** : modifie le tableau `seedTitles` et les valeurs associées en haut
  de `app.js`.
- **Frais et acompte** : ajuste la fonction `calcCheckout()` dans `app.js`.
