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


// Usare reduce para reducir un array al numero total de edades.


// La funcion recibe la suma parcial (el acumulador parcial del valor a devolver) y un elemento del array.
function sumarEdades(sumaParcial, persona) {
  return sumaParcial += persona.edad
}
// Devuelve una operacion realizada sobre el acumulador.

var personas = [joaquin, clara, lucho, ana, carlos];

// Reduce recibe la funcion a iterar y el valorInicial del valor a devolver.
var sumaEdades = personas.reduce(sumarEdades, 0);

console.log(sumaEdades);
