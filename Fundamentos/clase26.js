const API_URL = 'https://swapi.co/api/' //URL de la API
const PEOPLE_URL = 'people/:id' //Segunda parte de la URL, la que varia segun la persona.

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` //URL de Luke Skywalker, cambiando el numero 1 cambio el personaje
const OPTS = {crossDomain:true} //Este parametro vale true cuando es una URL externa.

const printPersonData = function(personData) {
  console.log(`Hi, my name is ${personData.name}.`)
} //La funcion recibe la data de una persona e imprime lo que vemos arriba.

$.get(LUKE_URL, OPTS, printPersonData) //Recibe la API, OPTS, y la funcion a ejecutar, a la cual le pasa la data recibida automaticamente.
