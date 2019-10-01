$(document).ready(function() {
    var boton = $('#boton');


    //    boton.click(function() {
    //        alert('Hello');
    //    });

    // function saludo() {
    //     alert('Saludos');
    // }

    // boton.click(saludo);

    // EVENTO CON CALLBACK

    // boton.on('click', saludo);

    // boton.on('mouseenter', function(){
    //     document.body.style.background= '#000';
    // });

    // boton.on('mouseleave', function(){
    //     document.body.style.background= '#fff';
    // });


    // ELIMINANDO EVENTOS

    // boton.on('click', function() {
    //     alert('Saludos');
    //     console.log('saludos');
    // });

    // $('#desactivar').on('click', function() {
    //     boton.off('click');
    //     console.log('Boton de ejecutar Desactivado');
    // });

    // Previniendo el comportamiento de los enlaces
    $('a').on('click', function(e) {
        e.preventDefault();
        alert('Link desactivado');
    });
});