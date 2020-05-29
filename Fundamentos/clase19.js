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

var ana = {
  nombre: 'Ana',
  edad: 55
}

var carlos = {
  nombre: 'Carlos',
  edad: 56
}


const MAYORIA_DE_EDAD = 18;

function multiplicarEdadPorDos(persona) {
  return {
    ...persona,
    edad: persona.edad * 2
  }
}

var personas = [joaquin, clara, lucho, ana, carlos];

var edadesPorDos = personas.map(multiplicarEdadPorDos);

console.log(edadesPorDos);
