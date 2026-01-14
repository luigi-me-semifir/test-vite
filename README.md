# React Vite - Projet de Démonstration

Application React éducative démontrant les concepts fondamentaux de React à travers un playground interactif et une mini boutique e-commerce.

## Contexte

Ce projet a été créé pour illustrer les possibilités offertes par React. Il se compose de deux sections principales :

### Playground (Espace d'apprentissage)
Une collection de composants interactifs démontrant :
- Gestion d'état avec `useState` (nombres, booléens, tableaux, objets)
- Gestion des événements React (click, clavier, souris, focus)
- Formulaires et validation
- Compteurs et todo lists

### Boutique E-commerce
Une application CRUD complète avec :
- Liste de produits en grille
- Détails produit avec modification/suppression
- Formulaire de création/édition de produits
- Navigation avec React Router
- API REST simulée avec JSON Server

## Technologies utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| React | 19.2.0 | Bibliothèque UI |
| React Router DOM | 7.12.0 | Navigation SPA |
| Vite | 7.2.4 | Build tool et serveur de développement |
| JSON Server | - | API REST simulée |
| ESLint | 9.39.1 | Linting du code |

## Installation et lancement

### Prérequis
- Node.js (version 18+)
- npm

### Installation des dépendances

```bash
npm install
```

### Lancement du projet

Ouvrir **deux terminaux** :

**Terminal 1 - API JSON Server :**
```bash
npm run data
```
> Démarre le serveur API sur http://localhost:3000

**Terminal 2 - Serveur de développement :**
```bash
npm run dev
```
> Démarre Vite sur http://localhost:5173

### Autres commandes disponibles

```bash
npm run build      # Build de production
npm run preview    # Prévisualisation du build
npm run lint       # Vérification ESLint
```

## Arborescence du projet

```
test-vite/
├── public/                          # Assets statiques
├── src/
│   ├── components/
│   │   ├── evenementState/          # Composants du playground
│   │   │   ├── Counter.jsx          # Compteur avec useState
│   │   │   ├── EventObject.jsx      # Gestion des objets event
│   │   │   ├── EventsDemo.jsx       # Démo des événements React
│   │   │   ├── MultipleCounter.jsx  # Compteurs multiples
│   │   │   ├── PreventDefault.jsx   # Utilisation de preventDefault
│   │   │   ├── SimpleInput.jsx      # Input basique
│   │   │   ├── StateBoolean.jsx     # État booléen
│   │   │   ├── TodoList.jsx         # Liste de tâches
│   │   │   ├── ToggleSwitch.jsx     # Switch toggle
│   │   │   └── UserForm.jsx         # Formulaire utilisateur
│   │   ├── footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── productDetail/
│   │   │   ├── ProductDetail.jsx
│   │   │   └── ProductDetail.module.css
│   │   ├── productForm/
│   │   │   ├── ProductForm.jsx
│   │   │   └── ProductForm.module.css
│   │   ├── productList/
│   │   │   ├── ProductList.jsx
│   │   │   └── ProductList.module.css
│   │   └── firstComponent/
│   │       └── FirstComponent.jsx
│   ├── pages/
│   │   ├── home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── playground/
│   │   │   ├── Playground.jsx
│   │   │   └── Playground.module.css
│   │   └── 404/
│   │       ├── NotFound.jsx
│   │       └── NotFound.module.css
│   ├── config/
│   │   └── api.js                   # Configuration API (localhost:3000)
│   ├── data/
│   │   └── db.json                  # Base de données JSON Server
│   ├── App.jsx                      # Composant principal avec routing
│   ├── App.css
│   ├── main.jsx                     # Point d'entrée React
│   ├── index.css                    # Styles globaux
│   └── reset.css                    # Reset CSS
├── index.html                       # Point d'entrée HTML
├── vite.config.js                   # Configuration Vite
├── eslint.config.js                 # Configuration ESLint
├── package.json
└── README.md
```

## Routes de l'application

| Route | Composant | Description |
|-------|-----------|-------------|
| `/` | Home | Page d'accueil |
| `/shop` | ProductList | Liste des produits |
| `/products/new` | ProductForm | Créer un produit |
| `/products/:id` | ProductDetail | Détails d'un produit |
| `/products/:id/edit` | ProductForm | Modifier un produit |
| `/playground` | Playground | Espace d'apprentissage React |
| `*` | NotFound | Page 404 |

## Structure des données

### Schéma Produit

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "category": "string",
  "stock": "number",
  "image": "URL",
  "isNew": "boolean (optionnel)",
  "discount": "number (optionnel)",
  "rating": "number (optionnel)"
}
```

### Catégories disponibles
- Électronique
- Vêtements
- Informatique
- Gaming
