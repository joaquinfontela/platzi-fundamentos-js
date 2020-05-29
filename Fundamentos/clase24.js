const ESTATURA = 1.80;

class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}.`);
    if (fn){
      fn(this.nombre, this.apellido, false)
    }
  }

  soyAlto() {
    return (this.altura >= ESTATURA);
  }
}


class Desarrollador extends Persona{
  constructor(nombre, apellido, altura) {
    console.log('Creacion de un desarrollador.');
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, y soy desarrollador/a.`);
    if (fn){
      fn(this.nombre, this.apellido, true)
    }
  }
}


function devolverSaludo(nombre, apellido, esDesarrollador) {
  console.log(`Hola ${nombre} ${apellido}.`)
  if (esDesarrollador) {
    console.log(`No sabia que eras desarrollador!`)
  }
}



var joaquin = new Desarrollador('Joaquin', 'Fontela', 1.785);
joaquin.saludar(devolverSaludo);
console.log(joaquin.soyAlto());
