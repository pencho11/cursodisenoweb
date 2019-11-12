$(document).ready(function() {

    // $('#titulo').text('Encabezado modificado');
    $('#titulo').html('<u>Encabezado modificado</u>');

    var nombre = $('#nombre');
    nombre.on('change', function() {
        $('#titulo').text(nombre.val());
    });

    // $('#enlace').text('FalconMaster.com');
    // $('#enlace').attr('href', 'http://www.falconmasters.com');

    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank'
    });
});