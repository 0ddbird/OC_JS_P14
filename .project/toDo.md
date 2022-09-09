# HRNet

## Tâches principales

- [ ] Convertir l'ensemble du projet HRNet en React. 
- [ ] Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React. 
- [ ] Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application. 

## Issues

[Issue #1](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/1)
[Issue #2](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/2)
[Issue #3](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3)
[Issue #4](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/4)

## Livrables

- [ ] Un fichier au format TXT ou PDF contenant le lien vers votre code sur GitHub contenant le code source du plugin jQuery sélectionné converti en ReactJS (un seul plugin doit être converti).
- [ ] Un fichier au format TXT ou PDF contenant le lien vers votre projet sur GitHub ainsi que le lien vers la bibliothèque React convertie publiée sur npm (ou GitHub Packages).
- [ ] Un rapport de performance LightHouse au format PDF de HRnet fonctionnant avant et après la conversion de la bibliothèque.

## Composants

Contexte React pour récup tableau des utilisateurs créés en page 2


### Modal

Props : `{ visible, title, description, onClose }`
`visible`: boolean
`title`: string
`description`: string

**Features**
State managed by props
Content managed by props

### Select

Props: `{ expanded, payload}`
`expanded`: boolean
`payload`: `['option1', 'option2', 'option3', ...]`

expanded: state local initialisé par prop
function onChange => passée au composant Select et récupérée par le form

**Features**

Responsivity: scroll in list

### DatePicker

const [date, setDate] = useState()
initialiser la valeur depuis le parent
fonction > remonter la valeur au composant parent

**Features**

- 35 days displayed
- Sunday to Monday
- Go to Month
- Go to Year
- Go to current date
- Go to next month
- Go to previous month
- Hightlight current day
- Highlight hovered day

### Table

Props: `{ payload }`
payload: `[employee1, employee2, employee3, ...]`
*employee* schema:

```js
{
  firstName: 'string',
  lastName: 'string',
  startDate: 'string',
  Department: 'string',
  birthDate: 'string',
  street: 'string',
  city: 'string',
  state: 'string',
  zipCode: 'string'
}
```

**Features**

Sort items by category
Search items
Display a limited number of items
Change the number of displayed items
Show how many items are displayed out of the total number of items
Navigate to next item
Navigate to previous item
