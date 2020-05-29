function Persona(nombre, apellido, altura) {
  console.log('Creacion de una persona.');
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
}

const ESTATURA = 1.80;

Persona.prototype.soyAlto = function() {
  return (this.altura >= ESTATURA);
}

var joaquin = new Persona('Joaquin', 'Fontela', 1.785);
joaquin.saludar();
console.log(joaquin.soyAlto());
