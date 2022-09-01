// SELECCIONO los elementos del Html con los que quiero trabajar
// Puedo llamarle SELECTORES
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// Se trata de un metodo, se le pasan 2 argumentos 1. evento, 2. código Js (función)
btn.addEventListener('click', btnOnClick);


// Hay que ESCUCHAR los eventos que el usuario realice
function btnOnClick() {
    const edad = input1.value - input2.value;
    pResult.innerText = "Tu edad es: " + edad;
} 

// -----------------------------------------------------------------------------------------------





// // Para este ejem plo hayq ue quitar del HTML type="button"

// // SELECCIONO los elementos del Html con los que quiero trabajar
// // Puedo llamarle SELECTORES
// const form = document.querySelector('#form');
// const input1 = document.querySelector('#calculo1');
// const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#btnCalcular');
// const pResult = document.querySelector('#result');

// // Se trata de un metodo, se le pasan 2 argumentos 1. evento, 2. código Js (función)
// form.addEventListener('submit', sumarInputValues);


// // Hay que ESCUCHAR los eventos que el usuario realice
// function sumarInputValues(event) {
//     event.preventDefault();
//     const edad = input1.value - input2.value;
//     pResult.innerText = "Tu edad es: " + edad;
// } 