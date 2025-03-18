# Structure du Thème ng1 2025

Ce document explique de façon synthétique la structure et l'organisation du thème WordPress ng1 2025.

## Architecture Générale

Le thème est conçu selon une architecture modulaire basée sur les blocs Gutenberg et les modèles de Full Site Editing (FSE). Voici les principaux dossiers et leur rôle :

### Dossiers Principaux

- **`templates/`** : Contient les modèles de page HTML pour différents types de contenu (page, archive, single, etc.)
- **`parts/`** : Contient les parties réutilisables des templates (header, footer, etc.)
- **`patterns/`** : Contient les modèles de blocs personnalisés pour Gutenberg
- **`functions/`** : Contient les fonctions PHP organisées par fonctionnalité
- **`assets/`** : Contient les ressources statiques (JS, CSS, images, polices)
- **`styles/`** : Contient les fichiers de style pour le thème
- **`cpt/`** : Contient les définitions des types de contenu personnalisés

## Fonctionnalités Clés

### Système de Templates

Le thème utilise le système de templates FSE (Full Site Editing) de WordPress :
- Les fichiers dans `templates/` définissent la structure des différentes pages
- Les fichiers dans `parts/` sont des composants réutilisables intégrés dans les templates

### Patterns (Modèles de Blocs)

Le dossier `patterns/` contient des modèles de blocs prédéfinis pour :
- Sections de page (bannières, cartes, grilles, etc.)
- Composants d'interface (en-têtes, pieds de page, etc.)
- Mises en page spécifiques (timeline, équipe, programmes, etc.)

Ces patterns peuvent être insérés facilement dans l'éditeur Gutenberg.

### Styles et Assets

- **`assets/scss/`** : Fichiers SCSS pour les styles
- **`assets/js/`** : Scripts JavaScript, notamment les animations GSAP
- **`assets/fonts/`** : Polices personnalisées
- **`assets/images/`** : Images utilisées dans le thème

### Fonctions PHP

Le fichier `functions.php` charge les différentes fonctionnalités du thème :
- Chargement des styles et scripts
- Intégration GSAP pour les animations
- Autres fonctionnalités personnalisées

Les fonctions sont organisées dans le dossier `functions/` par catégorie.

## Personnalisation et Extension

### Styles Personnalisés

Le thème utilise :
- `style.css` pour les styles principaux
- `editor.css` pour personnaliser l'interface de l'éditeur Gutenberg
- `theme.json` pour configurer les paramètres globaux du thème

## Configuration du Thème avec theme.json

Le fichier `theme.json` est au cœur de la personnalisation du thème et définit les paramètres globaux suivants :

### Paramètres Principaux (settings)

1. **Couleurs** : Définition de la palette de couleurs du thème
   - Base (fond clair) : `#FAF8F2`, `#F7F7F8`, `#FFFFFF`
   - Contraste (texte foncé) : `#313135`, `#312319`, `#27272A`
   - Accent (couleurs d'accentuation) : `#C6AA76`, `#B89257`

2. **Typographie** : Configuration des polices et tailles de texte
   - Polices personnalisées (TT Hoves Pro Trial)
   - Échelle de tailles de texte (xxs à 6xl)
   - Paramètres de fluidité pour l'adaptation aux différents écrans

3. **Espacement** : Définition des espacements standards
   - Marges et paddings prédéfinis
   - Système de grille responsive

4. **Mise en page** : Configuration des largeurs de contenu
   - Taille standard : `960px`
   - Taille large : `1200px`

5. **Ombres** : Styles d'ombres prédéfinis
   - Crisp : `6px 6px 0px 0px var(--wp--preset--color--accent)`
   - Outlined : `0px 4px 40px 0px rgba(0, 0, 0, 0.20)`


### Structure des Fichiers de Style

Les fichiers de style sont organisés dans des dossiers spécifiques selon leur fonction :

```
styles/
├── blocks/         # Styles pour les blocs Gutenberg
├── sections/       # Styles pour les sections de page
├── typography/     # Styles pour la typographie
└── variations/     # Variations de blocs
```

### Comment Nommer les Fichiers

Les fichiers suivent une convention de nommage cohérente :

- **Blocs** : `core-[nom-du-bloc]-[variante].json`
- **Sections** : `section-[nom-ou-numéro].json`
- **Typographie** : `typography-[taille-ou-style].json`

### Exemples de Code

#### 1. Exemple de Style pour un Bloc JSON

Voici un exemple réel de style personnalisé pour un bloc bouton avec une flèche :

**Fichier** : `styles/blocks/core-button-with-arrow.json`

```json
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 3,
	"title": "avec flèche",
	"slug": "with-arrow",
	"blockTypes": ["core/button"],
    "styles": {
        "color":{
            "text": "var(--wp--preset--color--accent)"
        },
        "border": {
            "color": "transparent!important"
        },
        "spacing": {
            "padding": {
                "left": "0",
                "right": "0"
            }
        },
        "elements": {
            "button": {
                ":hover": {
                   "color":{
                     "background": "transparent !important",
                     "text": "var(--wp--preset--color--contrast)!important"
                   }
                }
            }
        }
    }
}
```

#### 2. Exemple de Style pour une Section JSON

Voici un exemple réel de style pour une section de page :

**Fichier** : `styles/sections/style1.json`

```json
{
    "$schema": "https://schemas.wp.org/trunk/theme.json",
    "version": 3,
    "slug": "section-style1",
    "title": "style1",
    "blockTypes": [
        "core/group",
        "core/columns",
        "core/column",
        "core/cover"
    ],
    "styles": {
        "color": {
            "background": "var(--wp--preset--color--base-2)",
            "text": "var(--wp--preset--color--contrast)"
        },
        "blocks": {
            "core/button":{
                "color": {
                    "background": "transparent",
                    "text": "var(--wp--preset--color--accent)"
                }
            }
        },
        "elements": {
            "button": {
                ":hover":{
                    "color": {
                        "background": "var(--wp--preset--color--contrast) !important",
                        "text": "var(--wp--preset--color--base) !important"
                    },
                    "border": {
                        "color": "var(--wp--preset--color--contrast) !important"
                    }
                }
            },
            "heading": {
                "color": {
                    "text": "var(--wp--preset--color--contrast)"
                }
            },
            "link":{
                "color": {
                    "text": "var(--wp--preset--color--accent)"
                },
                ":hover":{
                    "color": {
                        "text": "var(--wp--preset--color--contrast-3)"
                    }
                },
                "typography": {
                    "textDecoration": "none"
                  }
            }
        }
    }
}
```

#### 3. Exemple de Style pour Typography JSON

Voici un exemple réel de configuration typographique :

**Fichier** : `styles/typography/tt-hoves-pro.json`

```json
{
    "version": 3,
    "$schema": "https://schemas.wp.org/trunk/theme.json",
    "title": "tt hoves pro",
    "slug": "typography-tt-hoves-pro",
    "settings": {
        "typography": {
            "fontFamilies": [
                {
                    "fontFamily": "tt-hoves-pro-trial, sans-serif",
                    "name": "Tt-hoves-pro-trial",
                    "slug": "first",
                    "fontFace": [
                        {
                            "fontFamily": "tt-hoves-pro-trial",
                            "fontStyle": "normal",
                            "fontWeight": "400",
                            "src": [
                                "file:./assets/fonts/tt-hoves-pro-trial/tt-hoves-pro-trial-variable.woff2"
                            ]
                        }
                    ]
                },
                {
                    "fontFamily": "tt-hoves-pro-trial, sans-serif",
                    "name": "Tt-hoves-pro-trial",
                    "slug": "second",
                    "fontFace": [
                        {
                            "fontFamily": "tt-hoves-pro-trial",
                            "fontStyle": "normal",
                            "fontWeight": "400",
                            "src": [
                                "file:./assets/fonts/tt-hoves-pro-trial/tt-hoves-pro-trial-variable.woff2"
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
```

### Comment Intégrer les Styles dans le Thème

1. **Ajouter les styles CSS correspondants** dans votre fichier syles/blocks/nom-de-la-variation.css

```css
/* Style pour le bouton avec flèche */
.is-style-with-arrow .wp-block-button__link {
    display: inline-flex;
    align-items: center;
}

.is-style-with-arrow .wp-block-button__link::after {
    content: "→";
    margin-left: 0.5em;
    transition: transform 0.3s ease;
}

.is-style-with-arrow .wp-block-button__link:hover::after {
    transform: translateX(5px);
}

/* Style pour la section hero */
.is-style-hero-section {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

/* Styles pour les titres */
.is-style-accent {
    color: var(--wp--preset--color--accent);
}

.is-style-underlined {
    border-bottom: 2px solid var(--wp--preset--color--accent);
    padding-bottom: 0.25em;
}
```

## Dossier Styles

Le dossier `styles/` contient des fichiers JSON qui étendent la configuration du thème pour des éléments spécifiques :

### 1. Styles de Blocs (`styles/blocks/`)

Contient des variantes de style pour les blocs Gutenberg standard :

- **`core-button-with-arrow.json`** : Style de bouton avec flèche
  ```json
  {
    "slug": "with-arrow",
    "blockTypes": ["core/button"],
    "styles": {
      "color": {
        "text": "var(--wp--preset--color--accent)"
      },
      "border": {
        "color": "transparent!important"
      }
    }
  }
  ```

- **`core-column-dashed.json`** : Style de colonne avec bordure en pointillés
- **`core-group-grid-2-1.json`** : Configuration de grille spécifique pour les groupes
- **`core-post-terms.json`** : Style pour l'affichage des termes de taxonomie

### 2. Styles de Sections (`styles/sections/`)

Définit des styles prédéfinis pour les sections de page :

- **`style1.json` à `style5.json`** : Variantes de mise en page pour les sections
  - Couleurs de fond et de texte
  - Espacements et marges
  - Comportements au survol
  - Styles d'éléments imbriqués


### 3. Configuration Typographique (`styles/typography/`)

Contient les définitions des polices utilisées dans le thème :

- **`tt-hoves.json`** et **`tt-hoves-pro.json`** : Configuration des polices TT Hoves
  ```json
  {
    "settings": {
      "typography": {
        "fontFamilies": [
          {
            "fontFamily": "tt-hoves-pro-trial, sans-serif",
            "name": "Tt-hoves-pro-trial",
            "slug": "first"
          }
        ]
      }
    }
  }
  ```

- **`all.json`** : Compilation de toutes les configurations typographiques

## Relations entre Parts, Patterns et Templates

Le thème utilise une architecture modulaire où les différents composants interagissent entre eux de manière hiérarchique. Voici comment ces éléments sont liés :

### Hiérarchie et Inclusion

1. **Templates → Parts → Patterns**
   - Les `templates/` définissent la structure globale de la page
   - Les `parts/` sont inclus dans les templates pour des sections réutilisables
   - Les `patterns/` peuvent être utilisés dans les parts ou directement dans les templates

### Pourquoi des liens vers les Patterns dans les Parts

L'utilisation de liens vers les patterns dans les parts (plutôt que d'inclure directement le code HTML/CSS) présente plusieurs avantages majeurs :

1. **Réutilisabilité maximale** : Un pattern peut être référencé dans plusieurs parts différentes sans duplication de code

2. **Maintenance simplifiée** : Modifier un pattern met automatiquement à jour toutes les parts qui l'utilisent

3. **Séparation des responsabilités** :
   - Les parts définissent l'emplacement et la structure
   - Les patterns définissent l'apparence et le contenu

4. **Flexibilité de l'éditeur** : Les patterns liés peuvent être modifiés directement dans l'éditeur Gutenberg

5. **Performance** : Le système de cache de WordPress optimise le chargement des patterns réutilisés

6. **Cohérence visuelle** : Garantit une apparence uniforme des éléments répétés sur tout le site

#### Exemple technique

Un fichier part comme `parts/card-search.html` contient simplement une référence au pattern :

```html
<!-- wp:pattern {"slug":"ng1-2025/card-search"} /-->
```

Alors que le pattern correspondant (`patterns/card-search.php`) contient la définition complète du composant :

```php
<?php
/**
 * Title: Card Search
 * Slug: ng1-2025/card-search
 * Categories: group, container, card
 * Description: Card Search
 */
?>
<!-- wp:group {"className":"is-style-default","style":{...}} -->
<div class="wp-block-group is-style-default" style="...">
  <!-- wp:post-title {"isLink":true,"fontSize":"h-four"} /-->
  <!-- wp:post-excerpt /-->
</div>
<!-- /wp:group -->
```

Cette approche permet de centraliser la définition du composant tout en maintenant la flexibilité de son utilisation.

### Exemples Concrets

#### Exemple 1 : Structure d'une page standard

```
templates/page.html
  ↓ inclut
  parts/header.html
    ↓ inclut
    parts/header-top.html
    parts/header-menu.html
  ↓ inclut
  patterns/content-page.php
  ↓ inclut
  parts/footer.html
```

#### Exemple 2 : Les fichiers "template-*" dans patterns

Les fichiers préfixés par `template-` dans le dossier `patterns/` (comme `template-single-program.php`) sont des modèles complets pour des types de contenu spécifiques. Ils sont utilisés pour :

- Définir la structure de pages spécifiques (programmes, terrains, etc.)
- Être référencés dans les templates correspondants
- Fournir une mise en page cohérente pour des types de contenu particuliers

Par exemple, `template-single-program.php` définit la structure complète d'une page de programme individuel, incluant :
- L'en-tête avec le titre et les métadonnées
- La disposition des colonnes
- Les sections de contenu spécifiques aux programmes

#### Exemple 3 : Les composants "card-*"

Les fichiers `card-*.php` dans le dossier `patterns/` sont des composants réutilisables pour afficher des informations spécifiques :

- `card-equipe.php` : Affiche un membre de l'équipe avec photo, nom et poste
- `card-focus.php` : Met en avant une information importante
- `card-search.php` : Format d'affichage des résultats de recherche

Ces composants peuvent être utilisés dans différentes sections du site, ce qui assure une cohérence visuelle.

### Flux de Données

1. **WordPress → Templates → Parts → Patterns**
   - WordPress charge le template approprié selon le contexte (page, archive, single, etc.)
   - Le template inclut les parts nécessaires
   - Les parts ou le template peuvent inclure des patterns
   - Les patterns peuvent être personnalisés via l'éditeur Gutenberg

## Développement

Pour étendre ou modifier le thème :
1. Respectez l'architecture existante
2. Utilisez les patterns pour créer de nouveaux composants
3. Ajoutez les fonctions dans le dossier approprié
4. Suivez les conventions de nommage existantes

---

*Documentation créée le 17 mars 2025*
