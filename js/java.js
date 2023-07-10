var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("#tabela-pacientes")
var adicionar = document.querySelector('.adicionar')


pacientes.forEach(paciente => {
    var peso = paciente.querySelector(".info-peso")
    var altura = paciente.querySelector(".info-altura")
    var imc= paciente.querySelector(".info-imc")

    if(peso.textContent <=0 || peso.textContent>=1000){
        imc.innerHTML = (`Peso invalida`);
        paciente.classList.add("paciente-invalido")

    }else {if(altura.textContent <=0 || altura.textContent>=1000){
        imc.innerHTML = (`Altura invalida`);
        paciente.classList.add("paciente-invalido")

    }else{
        imc.innerHTML = (peso.textContent/(altura.textContent*altura.textContent)).toFixed(2);
    }}
}
);
function limparlinhas(){
    document.querySelector("#fm-nome").value="";
   document.querySelector("#fm-peso").value="";
    document.querySelector("#fm-altura").value="";
   document.querySelector("#fm-gordura").value="";
}
function inseririLinha(){


    
    var innome = document.querySelector("#fm-nome");
    var inpeso = document.querySelector("#fm-peso");
    var inaltura = document.querySelector("#fm-altura");
    var ingordura = document.querySelector("#fm-gordura");
    if(innome.value==""){
        alert("Preencha todos os campos");
        innome.classList.add("campo-invalido")
    }else{
        innome.classList.remove("campo-invalido")
        if(inpeso.value<=0 || inpeso.value>=300){
            alert("peso invalido")
            inpeso.classList.add("campo-invalido")

        }else{
            inpeso.classList.remove("campo-invalido")

            if(inaltura.value<=0 || inaltura.value>=5.0){
                alert("altura invalida"); 
                inaltura.classList.add("campo-invalido")
 
            }else{
                inaltura.classList.remove("campo-invalido")

                if(ingordura.value<=0 || ingordura.value>=100){
                    alert("gordura invalida")
                    ingordura.classList.add("campo-invalido")


                }else{
                    ingordura.classList.remove("campo-invalido");

                    var pacienteTr = document.createElement("tr");
                    
                    var nomeTd = document.createElement("td");
                    var pesoTd = document.createElement("td");
                    var alturaTd = document.createElement("td");
                    var gorduraTd = document.createElement("td");
                    var imcTd = document.createElement("td");


                     
                    nomeTd.textContent = innome.value;
                    pesoTd.textContent = inpeso.value;
                    alturaTd.textContent = inaltura.value;
                    gorduraTd.textContent = ingordura.value;
                    imcTd.textContent = (inpeso.value/(inaltura.value*inaltura.value)).toFixed(2);


                    pacienteTr.classList.add("paciente");
                    nomeTd.classList.add("info-nome");
                    pesoTd.classList.add("info-peso");
                    alturaTd.classList.add("info-altura");
                    gorduraTd.classList.add("info-gordura");
                    imcTd.classList.add("info-imc");


                    pacienteTr.appendChild(nomeTd);
                    pacienteTr.appendChild(pesoTd);
                    pacienteTr.appendChild(alturaTd);
                    pacienteTr.appendChild(gorduraTd);
                    pacienteTr.appendChild(imcTd);


                    tabela.appendChild(pacienteTr);
                    limparlinhas();
                }
            }
        }
    }       
}
    
adicionar.addEventListener("click",function(event){
    event.preventDefault();
    inseririLinha();

});
    