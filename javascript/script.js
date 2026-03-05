//Selección de atributos mediante ID 
//let titulo = document.getElementById('titulo');
//console.log(titulo);

//Selección mediante la clase 
//let parrafos = document.getElementsByClassName("parrafo");
//console.log(parrafos);

//Selección mediante etiquetas
//let divs = document.getElementsByTagName('div');
//console.log(divs);

//QuerySelector
let primerParrafo = document.querySelector('.parrafo')
console.log(primerParrafo);

let todosParrafos = document.querySelectorAll('.parrafo')
console.log(todosParrafos);

//Selección de el elemento con 'id'
document.getElementById('titulo').textContent = 'Nuevo titulo de mi DOM';

//Selección de todos los párrafos y cambiar de color 
let parrafos = document.getElementsByClassName('parrafo');
for(let i = 0; i<parrafos.length; i++){
    parrafos[i].style.color='blue';
}
//Seleccionar el div para cambiar su contenido 
let div1 = document.querySelector('div');
div1.innerHTML = '<span>Nuevo Contenido de mi DIV</span>';

//Agregar los eventos de los botones 
let boton = document.getElementById('boton');
let titulo = document.getElementById('titulo');

boton.addEventListener('click',function(){
    titulo.textContent = 'Titulo cambiado por el Click';
    titulo.style.color = 'blue';
});

//Crear un botón que muestre un Alert al hacer click
document.getElementById('boton').addEventListener('click',function(){
    alert('Precaución Mensaje de Alerta');
});

//Crear un div que cambie de color de fondo al pasar el mouse sobre el
let div = document.getElementById('miDiv');
div.addEventListener('mouseover',function(){
    this.style.background = 'blue';
});
div.addEventListener('mouseout',function(){
    this.style.background = 'red';
});

//Crear una lista y un boton que agregue un nuevo elemento a la lista cada vez que se haga click
let lista = document.getElementById('lista');
let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = 'Nuevo Elemento';
    lista.appendChild(nuevoElemento);
});