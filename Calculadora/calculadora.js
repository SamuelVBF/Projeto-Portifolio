'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=botao]');
const operadores = document.querySelectorAll('[id*=Operador]');

let novoNumero = true;

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);  
numeros.forEach (numero => numero.addEventListener('click',inserirNumero));


operadores.forEach (operador => operador.addEventListener('click',selecionarOperador));