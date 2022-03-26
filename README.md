# 2020-04-btc-agile-sw-online-proyecto

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/githubagilesoftware.jpg" >	
</p>

## Workflow
```
Forkea el proyecto y trabaja en tu rama.
Commitea de vez en cuando las 'features' que vayas desarrollando.
Una vez lo creas necesario, haz un 'pull request' a la rama Master.
Avísanos por el slack del curso.
```

## Información
```
Nombre del proyecto :
Descripción: Proyecto Backend y Frontend de una aplicación para organziar una colección privada de libros 
Alumno: Javier Pardo
```

## Instalación
| Alias | URL |
| :-------: | :------: |
| Typescript|   https://www.typescriptlang.org/| 
| Jest Runner |  https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner |
| vscode-icons | https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons | 
| ts-jest | https://github.com/kulshekhar/ts-jest  | 


## Versiones
| Alias | Version |
| :-------: | :------: |
| Visual Studio Code| 1.46   | 
| Jest | 26.0 |
| Cypress.io | | 


## Línea de comandos
```
npm install --save-dev jest
npm i @types/jest

Prerequisites       npm i -D jest typescript	
Installing          npm i -D ts-jest @types/jest	
Creating config     npx ts-jest config:init	

[Añade más comandos necesarios]
Running tests	    npx jest
```
## Principios SOLID
| Principio | Fichero | Expliacación |
| :-------: | :------: | :------: |
| Single Responsibility Principle | '/src/app/Components/Main.js'  |  Se crean componentes con funciones únicas, ya sea agregar un libro, editarlo o mostar en una lista todos ellos. |
| Open Closed Principle | '/src/app/Componets/List.js'  | Este componente esta abierto a la extensión, dado que recibe los datos de los libros como props lo que hace fácil extender su comportamiento y esta cerrado a su modificación porque los cambios necesarios no se realizan dentro del propio componente |
| ... | ...  |

## Patrones
| Patrón | Fichero | Método
| :-------: | :------: |:------: |
| ... | ...  |... |
| ... | ...  |... |
| ... | ...  |... |

## Refactors
- Composing Methods - Extract Method
Fichero: '/src/app/Components/Main'
En la función 'bookDeleter()' se separa el cógigo referente a borrar libros y se intoriduce una nueva función llamada 'deleteBook()'

- Moving Features between Objects - Introduce Foreign Method
Fichero: '/src/app/Components/Details'
La función GetBook es un método importado en el archivo Details.

- Organizing Data - Replace Data Value with Object
Fichero: '/src/app/Components/Form' y '/src/app/Components/FormEdit'
Se crea el objeto emptyBook para volver dejar vacios los campos en el formulario una vez lanzada la petición.

- Simplifying Conditional Expressions

- Making Method Calls Simpler - Rename Method
Fichero: '/src/app/Components/List'
Los métodos se han renombrado en varios archivos, pero por poner un ejemplo concreto, en el fichero List lso metódos abrir, borrar y editar se han renombrado con un nombre que detalle más a que se refieren: 'bookDetailsOpener, bookDeleter, bookEditer'.

- Dealing with Generalization - Pull Up Method
Fichero: '/src/app/Components/Main'
La función deleteBook se ha subido del fichero 'List' al fichero padre 'Main'.


## Notas
```
Ponga aquí cualquier tipo de mensaje necesario.
```
