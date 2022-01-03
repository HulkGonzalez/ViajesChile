$(function(){ //jquery general
//
    //$('.receta-texto').dblclick(function(){
      //  $(this).hide();
    //});
//Tooltip
    $('[data-ds-toggler ="tooltip"]').tooltip();
//Alerta
    $('#boton01').click(function(){
        alert("Estas siendo redireccionado...");
    })
    $('#boton02').click(function(){
        alert("Estas siendo redireccionado...");
    })
    $('#boton03').click(function(){
        alert("Estas siendo redireccionado...");
    })
    $('#boton04').click(function(){
        alert("Estas siendo redireccionado...");
    })
//Toggle Texto Destacado
    $('.card-title01').click(function(){
        $('.card-text01').toggle();
    })
    $('.card-title02').click(function(){
        $('.card-text02').toggle();
    })
    $('.card-title03').click(function(){
        $('.card-text03').toggle();
    })
    $('.card-title04').click(function(){
        $('.card-text04').toggle();
    })
});   