$(document).ready(function () {
    const titulo = $('#titulo');
    const info = $('#info');

    // console.log(titulo.width());

    info.append('Ancho: ' + titulo.width() + '<br>');

    // .innerWidth()
    // Calcula el ancho del elemento + el padding
    info.append('Ancho interno: ' + titulo.innerWidth() + '<br>');
    
    // Calcula el ancho del elemento + el padding + el border 
    info.append('Ancho externo: ' + titulo.outerWidth() + '<br>');
    
    // Calcula el ancho del elemento + el padding + el border + margin 
    info.append('Ancho externo: ' + titulo.outerWidth(true) + '<br>');

    
    //----------------

    // Calcula el alto del elemento
    info.append('Alto: ' + titulo.height() + '<br>');

    
    // Calcula el alto del elemento + el padding
    info.append('Alto interno: ' + titulo.innerHeight() + '<br>');


    // Calcula el altio del elemento + el padding + el borde
    info.append('Alto externo: ' + titulo.outerHeight() + '<br>');


    // Calcula el altio del elemento + el padding + el borde + margin
    info.append('Alto externo: ' + titulo.outerHeight(true) + '<br>');
});