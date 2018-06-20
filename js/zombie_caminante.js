

var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  /* ZombieCaminante llama al constructor de Enemigo utilizando los parametros
  necesarios */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}
/* asigno su prototipo y la funcion constructor para poder usarla con 'new'
al crear nuevos Zombies Caminantes */
ZombieCaminante.prototype = Object.create(Enemigo.prototype);
ZombieCaminante.prototype.constructor = ZombieCaminante;

ZombieCaminante.prototype.mover = function() {
  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
  if (Math.random() < 0.5) {
    this.x -= this.velocidad;
    this.y -= this.velocidad;
  } else {
    //Sino, hace otro movimiento
    this.y += this.velocidad;
    this.x -= this.velocidad;
  }

  /*Al llegar a un lado del mapa reaparecerá al otro lado para volver a
  comenzar su recorrido.*/
  if (this.x < this.rangoMov.desdeX) {
    this.x = this.rangoMov.hastaX;
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  }

}

/* El ataque lo toma de su prototipo Enemigo */

ZombieCaminante.prototype.atacar = function(jugador) {
  jugador.perderVidas(2);
}
