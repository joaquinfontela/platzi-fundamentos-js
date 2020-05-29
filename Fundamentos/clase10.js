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

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function mayorDeEdad(persona) {
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad.`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

mayorDeEdad(joaquin);
mayorDeEdad(clara);
mayorDeEdad(lucho);
