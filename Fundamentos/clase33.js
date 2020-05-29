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

async function obtenerPersonajes() { // El async es necesario para ejecutar un await adentro.

  var ids = [1,2,3,4,5,6,7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise // El await indica que es una tarea asincrona, y que la ejecucion del codigo no continuara hasta no completarla,
                                   // es decir, hasta que no se hayan 'resuelto' todas las promesas.
                    .all(promesas) // Como vimos en la clase anterior, esto convierte todas las promesas en, este caso, personajes.
    console.log(personajes)
  } catch {
    console.log('Error 404') //En caso de error:
  }
}

obtenerPersonajes()
