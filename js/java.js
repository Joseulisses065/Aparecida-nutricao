var paciente = document.querySelector("#paciente-01")
var pesos = paciente.querySelector(".info-peso")
var altura = paciente.querySelector(".info-altura")
var imc= paciente.querySelector(".info-imc")

imc.innerHTML = (pesos.textContent/(altura.textContent*2));
    