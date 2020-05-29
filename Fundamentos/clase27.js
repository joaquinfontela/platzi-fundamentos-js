const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain:true}

const printPersonData = function(personData) {
  console.log(`Hi, my name is ${personData.name}.`)
}

function obtenerPersonaje(id) {
  var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` //Reemplazo la URL de Luke por una URL general, que varia segun el id recibido.
  $.get(url, OPTS, printPersonData)
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

//Podemos observar que los datos que pedimos no nos llegan en el orden que ejecutamos las funciones.
//Esto ocurre asi porque depende del servidor, por lo cual no tenemos manera de saber el orden en el que llegaran los datos.
//Podremos observar incluso, que si lo ejecutamos varias veces, el orden puede ser distinto.
