
var Jugador = {

  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,

  moverse : function(x, y){
    this.x += x;
    this.y += y;
  },
  perderVidas : function(cantVidas){
    this.vidas -= cantVidas;
  }
}
