# 2021-04-btc-agile-sw-online-proyecto

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/githubagilesoftware.jpg" >	
</p>

## Información
```
Nombre del proyecto : My Personal Book Collection
Descripción: Proyecto Backend y Frontend de una aplicación para organziar una colección privada de libros 
Alumno: Javier Pardo
```

## Versiones
| Alias | Version |
| :-------: | :------: |
| Visual Studio Code| 1.65.2  | 
| cors | 2.8.5 |
| cypress.io | 9.5.1 | 
| dotenv | 16.0.0 |
| express  | 4.17.3 |
| jest | 27.5.1 |
| mongoose | 6.2.2 |
| node | 16.14.2 |
| nodemon | 2.0.15 |
| supertest | 6.2.2 |
| react | 17.0.2 
| react-dom | 17.0.2 |
| morgan | 1.10.0 |


## Línea de comandos
```
Instalación de Backend:
npm i node express cors dotenv
npm i -D morgan nodemon

Instalación de Frontend:
npx create-react-app books

Instalación Bases de datos:
npm i mongoose

Instalación test:
npm i -D jest supertest cypress


Running server:
| Iniciar servidor en modo desarrollo | npm run dev / npm run dev-test |

Running React app:
| Iniciar la aplicación | npm start

Running tests:
| Backend | Jest | npm run jest ("NODE_ENV=test jest --verbose --silent --detectOpenHandles") |
| Frontend | Cypress | npm run cypress ("NODE_ENV=test cypress open") /Cypress/integration/books.spec.js

```
## Principios SOLID
| Principio | Fichero | Expliacación |
| :-------: | :------: | :------: |
| Single Responsibility Principle | '/src/app/Components/Main.js'  |  Se crean componentes con funciones únicas, ya sea agregar un libro, editarlo o mostar en una lista todos ellos. |
| Open Closed Principle | '/src/app/Componets/List.js'  | Este componente esta abierto a la extensión, dado que recibe los datos de los libros como props lo que hace fácil extender su comportamiento y esta cerrado a su modificación porque los cambios necesarios no se realizan dentro del propio componente |
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
Este proyecto es una aplicación para recopilar y almacenar una colección privada de libros. 

Esta dividiso en una parte de backend, alojado en la carpeta api, donde aparece un CRUD con Express, conectado a una base de datos de MongoDB. La otra parte, la del frontend, en la carpeta app, es una aplicación creada con React + Materialize.

La parte de testing del frontend se realiza con Cypress, mientras que el backend se testea con jest y supertest.

Se han utilizado refactors y principios SOLID a lo largo de todo el código.
```
