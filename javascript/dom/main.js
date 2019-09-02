// var cajas = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');

var primeraCaja = document.getElementById('primeraCaja');



// primeraCaja.textContent = "Hola mundo !";
// primeraCaja.innerHTML = '<u>Hola mundo !</u>';


// CREANDO NODO

// 1.- crear el elemento
var caja = document.createElement('div');
// 2.- Crear un nodo de texto
var contenido = document.createTextNode('Hola mundo !');
// 3.- Añadir el nodo de texto al elemento
caja.appendChild(contenido);
// 4.- Agregar attributes a los caja
caja.setAttribute('class', 'caja naranja');

// 5.- Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);