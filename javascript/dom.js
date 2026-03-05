/* 
console.log ('Hola Mundo en JavaScript');

document.write('<p>Este elemento añade texto desde un document.write</p>');
//Variables
let nombre = 'Cosme Fulanito';
const edad = 30;
var esEstudiante = true;

//Operaciones 
let Nacimiento = 2026 - edad;
let esMayorEdad = edad >= 18;

//Mostrar en Consola 
console.log(nombre);
console.log(Nacimiento);
console.log(esMayorEdad);

//Declarar variable que almacene un color favorito y el año de nacimiento
let colorFavorito = 'Azul';
let añoNacimiento = 1946;
console.log(colorFavorito, añoNacimiento);

//Calcular el área de un circulo con radio dado y mostrar en consola
let radio = 5;
let area = Math.PI * radio * radio;
console.log(area);

{
    var varVariable = 'var';
    let letVariable = 'let';
}
console.log(varVariable); //Se muestra y Funciona
console.log(letVariable); //Error no declarada

//Estructuras de control
let edad = 18;
if(edad >= 18){
    console.log('Eres Mayor de edad');
} 
else {
    console.log('Eres Menor de edad');
}

//Ciclo For
for (let i=1; i<=10; i++){
    console.log(i);
}
//Verique si un número es positivo, negativo o cero
let numero = 5;
if(numero > 0){
    console.log('El número es positivo');
} else if (numero < 0){
    console.log('El número es Negativo');
} else {
    console.log('El número es cero');
}

//Imprimir los números pares del 2 al 10 --> while
let i=2;
while (i <= 10) {
    console.log(i);
    i += 2;
}

//Verifique si un número es mayor que 100 entre 50 y 100 o menor a 50
let num = 75;
if (num > 100){
    console.log('Número mayor que 100');
} else if (num >= 50 && num <= 100){
    console.log('El número esta entre 50 y 100');
} else {
    console.log('El número es menor que 50');
}

//Funciones en JS
function saludar(){
    console.log('Hola Mundo desde JS');
}
saludar();

function sumar(x, y){
    return x + y;
}
let resultado = sumar(17, 23);
console.log(resultado);

//Determine si un número es par 
function esPar(num) {
    return num % 2 === 0;
}
*/
//Document Object Model 
let formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit',function(event) {
    event.preventDefault(); //Evita que se envíe el formulario

    let nombre = document.getElementById('nombre').value; 

    if (nombre.trim()=== ''){
        alert('El campo de Nombre no puede quedar vacio');
    } else {
        alert('Formulario enviado: ' + nombre);
    }
});

let email = document.getElementById('email').value;
if (!email.includes('@')){
    alert('Formato de Correo Inválido');
}

