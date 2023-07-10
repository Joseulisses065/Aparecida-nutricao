var formulario = document.querySelector(".formulario-de-cadastro");
var paciente = obterDados(formulario);

function obterDados(formulario){
    return paciente = {
        nome:formulario.nome,
        peso:formulario.peso,
        altura:formulario.altura,
        gordura:formulario.gordura,
        imc: calcularImc(peso,altura,2)
    }
}

function validarDadoos(){  
    var paci
    if(paciente.nome.value==""){
        alert("Preencha todos os campos");
        paciente.nome.classList.add("campo-invalido")
    }else{
        paciente.nome.classList.remove("campo-invalido")
        if(paciente.peso.value<=0 || paciente.peso.value>=300){
            alert("peso invalido")
            paciente.peso.classList.add("campo-invalido")

        }else{
            paciente.peso.classList.remove("campo-invalido")

            if(paciente.altura.value<=0 || paciente.altura.value>=5.0){
                alert("altura invalida"); 
                paciente.altura.classList.add("campo-invalido")
 
            }else{
                paciente.altura.classList.remove("campo-invalido")

                if(paciente.gordura.value<=0 || paciente.gordura.value>=100){
                    alert("gordura invalida")
                    paciente.gordura.classList.add("campo-invalido")


                }else{
                    paciente.gordura.classList.remove("campo-invalido");

                    adicionarPaciente();
                    limparlinhas();
                }
            }
        }
    }       
}

function adicionarPaciente(){
    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome.value;
    pesoTd.textContent = paciente.peso.value;
    alturaTd.textContent = paciente.altura.value;
    gorduraTd.textContent = paciente.gordura.value;
    imcTd.textContent = paciente.imc.value;


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
}
  
function limparlinhas(){
    document.querySelector("#fm-nome").value="";
   document.querySelector("#fm-peso").value="";
    document.querySelector("#fm-altura").value="";
   document.querySelector("#fm-gordura").value="";
}
