const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain:true}

function obtenerPersonaje(id) {

  var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  return new Promise(function(resolve, reject) {

    $.get(url, OPTS, function (data){
      resolve(data)
    })
    .fail(() => reject())
  })
}


var ids = [1,2,3,4,5,6,7] //Array de IDs de los personajes.

/*
var promesas = ids.map(function(id) {
  return obtenerPersonaje(id)
})
*/

var promesas = ids.map(id => obtenerPersonaje(id))
// Esta ultima funcion tiene la misma funcionalidad que la comentada arriba.
//Mediante el metodo .map(), creamos un array de promesas en el que cada elemento, es una promesa con el id correspondiente.
// Esto es porque cada elemento es afectado por la funcion obtenerPersonaje().

Promise
  .all(promesas) //Esto convierte todo el array de promesas en los personajes (es decir, pasamos a conocer los valores).
  .then(personajes => console.log(personajes)) //Si todo salio bien, personajes es el array de personajes, de manera automatica.
