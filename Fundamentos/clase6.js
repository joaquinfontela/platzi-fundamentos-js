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

function imprimirInformacionPersona (persona) {
  console.log(`${persona.apellido}, ${persona.nombre} tiene ${persona.edad} años y mide ${persona.altura}cm.`);
}

imprimirInformacionPersona(persona1);
imprimirInformacionPersona(persona2);

//Es lo mismo: var nombre = persona.nombre;
//        Que: var {nombre} = persona;
