function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}



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

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, y soy desarrollador/a.`);
}


var joaquin = new Desarrollador('Joaquin', 'Fontela');
joaquin.saludar();
console.log(joaquin.soyAlto());
