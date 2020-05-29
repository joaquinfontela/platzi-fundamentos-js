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

obtenerPersonaje(1) //Ejecutamos obtenerPersonaje 1.
.then((data) => { //Si sale todo bien
  console.log(`Hi, my name is ${data.name}`) //Se imprime
  return obtenerPersonaje(2) // Se ejecuta obtenerPersonaje 2.
})
.then((data) => { //Si sale todo bien... etc.
  console.log(`Hi, my name is ${data.name}`)
  return obtenerPersonaje(3)
})
.then((data) => {
  console.log(`Hi, my name is ${data.name}`)
  return obtenerPersonaje(4)
})
.then((data) => {
  console.log(`Hi, my name is ${data.name}`)
  return obtenerPersonaje(5)
})
.then((data) => {
  console.log(`Hi, my name is ${data.name}`)
  return obtenerPersonaje(6)
})
.then((data) => { //Si sale todo bien...
  console.log(`Hi, my name is ${data.name}`)
  //Finaliza la ejecucion
})
.catch(() => { //El catch sirve para todos los then.
  console.log(`Error desconocido.`)
})
