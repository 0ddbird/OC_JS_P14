# HRNet

## Objectifs du projet

- Convertir une application intialement développée avec jQuery, en React.
- L'application est composée de 2 pages et dépend de 4 modules : une modale, un select, un tableau et un datepicker.

Il était demandé de :

- Recréer l'application en React
- Remplacer 3 des modules jQuery par des librairies externes React
- Créer le 4e module en tant que *stateless functional component* React.
- Exporter ce composant sous forme de librairie NPM
- Réimporter ce composant dans le projet en tant que dépendance externe.
- Comparer les performances des versions jQuery et React de l'application en utilisant Lighthouse.

## Réalisé

- Les 4 composants ont été recréés en React
- Le composant Select a été choisi pour être partagé sous forme de librairie NPM puis réimporté dans le projet.

## Composants convertis

### Select

Il s'agit d'un composant `<select>` controllé.
Il prend en props :

- `options` : Une liste d'options au format suivant :

```js
const options = [
  {
    name: 'option1', 
    value: 'value1'
  },
  {
    name: 'option2', 
    value: 123
  },
  {
    name: 'option1', 
    value: ['value3', 123, 'z']
  },
  ]
```

- `selected` : Une des options de la liste. exemple : `options[0]`
- `setSelected` : Une fonction pour changer la valeur sélectionnée.

### Modale

Il s'agit d'une modale dont on peut contrôler l'affichage.
Elle prend en props :

- `title` : Une chaîne de caractères qui sera le titre de la modale
- `content` : Une chaîne de caractères qui sera le contenu de la modale
- `modalDisplayed` : un booléen qui définit si la modale est affichée
- `setModalDisplayed` : une fonction qui permet de changer la valeur de modalDisplayed



### Table

Ce composant est un tableau qui affiche des entrées et leurs attributs en colonne.
Il dispose de 4 modules facultatifs qui permettent de :

- N'afficher qu'une partie des entrées (10, 25, 50, 100)
- De paginer les entrées pour accéder aux x suivantes
- De rechercher des entrées par mot-clefs
- D'afficher quelles entrées sont visibles sur le nombre total d'entrée

Il prend en props:

- `items` : un liste contenant les catégories (colonnes) et les entrées sous la forme suivante

```js
const headers = [
  {
    name: 'First Name',
    value: 'firstName'
  },
  {
    name: 'Last Name',
    value: 'lastName'
  }
]
const entries= [
  {
    firstName: 'Chris',
    lastName: 'Prolls',
  },
  {
    firstName: 'Antonio',
    lastName: 'Pkins',
  }
]

const items = {
  headers,
  entries
}
```

- `options` : les options du tableau sous la forme suivante.

```js
const tableOptions = {
    searchModule: true,
    paginationModule: true,
    countModule: true,
    navigationModule: true
  }
```

Passer la valeur d'une clé à `true` active le module correspondant, `false` la désactive.

### Datepicker

Il s'agit d'un input permettant de choisir une date dans un calendrier.

Ce composant prends les props suivantes :

- `startYear` : un entier qui représente la première année de la plage.
- `stopYear` : un entier qui représente la dernière année de la plage.
- `defaultYear` : un objet qui représente l'année par défaut visible à l'ouverture du datepicker.
- `defaultMonth` : un objet qui représente le mois par défaut visible à l'ouverture du 
- `selectedDate` : un objet Date qui représente la date sélectionnée par l'utilisateur.
- `setSelectedDate` : une fonction qui permet de définir la date sélectionnée par l'utilisateur.

Exemple :

```js
const startYear = 1960
const stopYear = 2050
const defaultYear = {
  name: '1980',
  value: 1980
}
const defaultMonth = {
  name: 'January',
  value: 0
}

```

## Lighthouse - Comparaisons des performances

[Benchmark jQuery](./../lighthouse_reports/jQuery_app_report.html)
[Benchmark React](./../lighthouse_reports/React_app_report.html)