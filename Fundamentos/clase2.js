var nombre = 'Joaquin';
var apellido = 'Fontela';
var edad = 20;

var nombreMayus = nombre.toUpperCase();
var nombreMinus = nombre.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var largo = nombre.length;

console.log(nombreMayus);
console.log(nombreMinus);
console.log(primeraLetraDelNombre);
console.log(largo);
console.log(`Hola, soy ${nombre}, y mi apellido es ${apellido.toUpperCase()}`);

console.log("Desafio: mostrarle al usuario la ultima letra del nombre.");
console.log("Solucion:")
console.log(nombreMayus.charAt(largo-1));
