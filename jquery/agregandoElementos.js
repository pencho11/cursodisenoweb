$(document).ready(function () {
    var contenedor = $('#contenedor');
    var contador = 1;

    $('#agregar').on('click', function(){
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;

        // En orden
        contenedor.append(caja);

        // al reves
        // contenedor.prepend(caja);

        // contenedor.before(caja);
        // contenedor.after(caja);
    });
});