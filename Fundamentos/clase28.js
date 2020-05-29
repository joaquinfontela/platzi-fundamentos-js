const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain:true}

function obtenerPersonaje(id, callback) {
  var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, OPTS, function (personData) { //La reemplazo por una funcion anonima para que se respete el orden.
    console.log(`Hi, my name is ${personData.name}.`)

    if (callback) {
      callback()
    }
    
  })
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4)
    })
  })
})

//Esta es la solucion al problema del orden de la obtencion de la informacion.
//Sin embargo, nos genera otro problema, un anidamiento de callbacks: un CallBackHell.
