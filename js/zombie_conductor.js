
var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;



ZombieConductor.prototype.mover = function(){
  if (this.direccion == 'v') {

    this.y += this.velocidad;
    if (this.y > this.rangoMov.hastaY ) {
      this.y = this.rangoMov.desdeY-90;
    }
  }
  if (this.direccion == 'h') {

    this.x += this.velocidad;
    if (this.x > this.rangoMov.hastaX ) {
      this.x = this.rangoMov.desdeX-90;
    }
  }
}


ZombieConductor.prototype.atacar = function(jugador){
  jugador.perderVidas(5);
}
