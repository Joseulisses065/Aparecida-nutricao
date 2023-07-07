var pacientes = document.querySelectorAll(".paciente")




pacientes.forEach(paciente => {
    var peso = paciente.querySelector(".info-peso")
    var altura = paciente.querySelector(".info-altura")

    if(peso.textContent <=0 || peso.textContent>=1000){
        alert(`O peso de ${ paciente.querySelector(".info-nome").textContent} é invalido`)

    }else {if(altura.textContent <=0 || altura.textContent>=1000){
        alert(`A altura de ${ paciente.querySelector(".info-nome").textContent} é invalida`)

    }else{
        var imc= paciente.querySelector(".info-imc")
        imc.innerHTML = (peso.textContent/(altura.textContent*altura.textContent)).toFixed(2);
    }}
}
);


    