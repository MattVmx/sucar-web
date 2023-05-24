$(document).ready(function () {

  var slider = $('#slider');
  var btnAnterior = $('#btnAnterior');
  var btnSiguiente = $('#btnSiguiente');

  $('#slider .slide:last').insertBefore('#slider .slide:first');

  slider.css('margin-left', '-28%');

  function moverDerecha() {
    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-80.7%'
      }, 700, function () {
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('margin-left', '-28%');
        resetInterval();
      });
    }
  }

  btnSiguiente.on('click', moverDerecha);



  function moverIzquierda() {
    if (!slider.is(':animated')) {
      $('#slider .slide:last').insertBefore('#slider .slide:first');
      slider.css('margin-left', '-80.7%');
      slider.animate({
        marginLeft: '-28%'
      }, 700, function () {
        resetInterval();
      });
    }
  }

  btnAnterior.on('click', moverIzquierda);


  var intervalo = setInterval(moverDerecha, 5000);

  function resetInterval() {
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 5000);
  }
});
