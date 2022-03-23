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
La función 'deleter()' se separa el cógigo referente a borrar libros y se intoriduce una función nueva llamada 'deleteBook()'
ANTES:
~~~
function deleter(deleteId) {
    setDeleteId(deleteId)
    if (window.confirm(`Do you want to delete it?`)) {
    fetch(`http://localhost:${PORT}/book/delete/${deleteId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
        console.log(data)
            window.M.toast({ html: 'Book deleted' })   
        })
        .then(window.location.reload())
        .catch(err => console.error(err))
  }
~~~
DESPUÉS:
~~~
function deleter(deleteId) {
    setDeleteId(deleteId)
    deleteBook(deleteId)
  }

function deleteBook(deleteId) {
if (window.confirm(`Do you want to delete it?`)) {
    fetch(`http://localhost:${PORT}/book/delete/${deleteId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
        console.log(data)
            window.M.toast({ html: 'Book deleted' })   
        })
        .then(window.location.reload())
        .catch(err => console.error(err))
}
~~~

- Moving Features between Objects - Move Method

- Organizing Data

- Simplifying Conditional Expressions

- Making Method Calls Simpler

- Dealing with Generalization

## Notas
```
Ponga aquí cualquier tipo de mensaje necesario.
```
