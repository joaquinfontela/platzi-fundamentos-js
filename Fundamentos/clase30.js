const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain:true}

function obtenerPersonaje(id) {

  var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  return new Promise(function(resolve, reject) { //A la promesa le pasamos dos parametros, resolve y reject, siempre.

    $.get(url, OPTS, function (data){ //Si no ocurre ningun error, get llama a la funcion del tercer parametro.
      resolve(data) // Que lo que hace es llamar a esta otra funcion.
    })
    .fail(() => reject()) // Si ocurre algun error, se ejecuta fail, que hace lo que se le indique adentro de los parentesis.
                            // En este caso, llamar a reject().
  })
}

obtenerPersonaje(1)
.then((data) => { // El .then() se ejecuta cuando se ejecuta el resolve.
  console.log(`Hi, my name is ${data.name}`)
})
.catch(() => { // El catch() se ejecuta cuando se ejecuta el reject.
  console.log(`Error desconocido.`)
})

// Tanto then como catch, ejecutan lo que va adentro del parentensis (funciones). A su vez, a esas funciones
// les podemos pasar como parametro cualquiera de los parametros que le hayamos pasado a resolve o reject, respectivamente.
