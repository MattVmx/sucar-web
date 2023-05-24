$(document).ready(function(){

  var banner = $('#banner');

  // Altura dinámica banner
  function alturaBanner(){

    var vpaltura = $(window).height();
    banner.css('height', vpaltura);
  }
  alturaBanner();

  $(window).resize(alturaBanner);
});
