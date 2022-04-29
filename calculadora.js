//var 1 = entrada valor do peso
var valorPeso = document.querySelector("#valor-peso");

//var 2 = entrada valor da altura
var valorAltura = document.querySelector("#valor-altura");

//resultado
var resultado = document.querySelector("#resposta");

//função de cálculo
function calcularIMC(){
    var valorIMC = valorPeso.valueAsNumber / (valorAltura.valueAsNumber * valorAltura.valueAsNumber);
    resultado.textContent = valorIMC;
    
}