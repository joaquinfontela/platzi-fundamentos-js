var joaquin1 = {
  nombre: 'Joaquin'
}

var joaquin2 = {
  nombre: 'Joaquin'
}

console.log(joaquin1 == joaquin2);
//Da False porque son dos objetos almacenados en distintas partes de la memoria.

var joaquin3 = joaquin1;

console.log(joaquin1 == joaquin3);
//Da True porque apuntan a la misma direccion de memoria.

joaquin3.nombre = 'Pepe';

console.log(joaquin3.nombre);
console.log(joaquin1.nombre);
//Cambian ambos nombres porque apuntan a la misma direc. de memoria.
