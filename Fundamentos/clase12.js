var joaquin = {
  nombre: 'Joaquin',
  edad: 20
}

var clara = {
  nombre: 'Clara',
  edad: 17
}

var lucho = {
  nombre: 'Luis',
  edad: 88
}

const MAYORIA_DE_EDAD = 18;

//Creando una arrow function.

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

const esMayorDeEdad = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

const esMayorDeEdad = (persona) => {
  return persona.edad >= MAYORIA_DE_EDAD;
}

const esMayorDeEdad = persona => {
  return persona.edad >= MAYORIA_DE_EDAD;
}

const esMayorDeEdad = persona => persona.edad >= 18;

const esMenorDeEdad = persona => !(esMayorDeEdad(persona));

console.log(esMenorDeEdad(lucho));
