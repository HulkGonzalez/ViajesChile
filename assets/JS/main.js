$(function(){ //jquery general
//
    //$('.receta-texto').dblclick(function(){
      //  $(this).hide();
    //});
//Tooltip
    $('[data-ds-toggler ="tooltip"]').tooltip();
//Alerta
    $('#boton').click(function(){
        alert("Codigo Ganador WRT83SU");
    })
//Toggle Texto Destacado
    $('.card-title').click(function(){
        $('.card-text').toggle();
    })


});   