const ESTATURA = 1.80;

class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}.`);
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

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, y soy desarrollador/a.`);
  }
}



var joaquin = new Desarrollador('Joaquin', 'Fontela', 1.785);
joaquin.saludar();
console.log(joaquin.soyAlto());
