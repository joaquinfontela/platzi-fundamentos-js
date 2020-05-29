var persona1 = {
  nombre : 'Joaquin',
  apellido: 'Fontela',
  edad: 20,
  altura: 179
}

var persona2 = {
  nombre : 'Roger',
  apellido: 'Federer',
  edad: 38,
  altura: 185
}

function cumpleanos(persona) {
  return {
    ...persona, //desglose del objeto.
    edad: persona.edad + 1
  }
}

persona3 = cumpleanos(persona1);
console.log(persona1);
console.log(persona2);
console.log(persona3);
