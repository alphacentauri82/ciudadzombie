/* Enemigo sera un objeto que tiene las funcionalidades basicas de todo Enemigo
Es usado de protitipo por otros objetos. Por ejemplo, zombies.

Los parametros que recibe para su construccion son los siguientes:
sprite: contiene la ruta a la imagen que lo representa.
x: posicion x actual del enemigo en el mapsa
y: posicion y actual del enemigo en el mapa
ancho: el ancho del enemigo
alto: el alto del enemigo
velocidad: es la velocidad de movimiento, pixeles que podra moverse en cada mov
rangoMov: los limites en el mapa donde se puede mover, sera un diccionario con la
siguiente forma: {desdeX: valor, hastaX: valor, desdeY: valor, hastaY: valor} */

var Enemigo = function (sprite, x, y, ancho, alto, velocidad, rangoMov) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.velocidad = velocidad;
  this.rangoMov = rangoMov;
  this.atacando = false;
}

/* atacar sacando una vida al jugador.*/
Enemigo.prototype.atacar = function (jugador) {
  jugador.perderVidas(1);
}

/* Solo va a atacar si no estaba atacando previamente */
Enemigo.prototype.comenzarAtaque = function (jugador) {
  if (!this.atacando) {
    this.atacar(jugador);
  }
  this.atacando = true;
}
/* Cuando el enemigo no este contacto con el jugador */
Enemigo.prototype.dejarDeAtacar = function () {
  this.atacando = false;
}
