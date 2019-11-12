$(document).ready(function () {
    $('#boton').on('click', function() {
        // $(this).addClass('naranja');
        // $(this).removeClass('boton');
       
        $(this).toggleClass('naranja');

        // $(this).css({
        //     'heigth': '100px',
        //     'width': '100px',
        //     'background': '#f2f2f2',
        //     'color': '#000'
        // });
    });
});