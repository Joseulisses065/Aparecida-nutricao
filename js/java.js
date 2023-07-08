var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("#tabela-pacientes")



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

                    var linha=`<tr class="paciente" >
                    <td class="info-nome">${innome.value}</td>
                    <td class="info-peso">${inpeso.value}</td>
                    <td class="info-altura">${inaltura.value}</td>
                    <td class="info-gordura">${ingordura.value}</td>
                    <td class="info-imc">${(inpeso.value/(inaltura.value*inaltura.value)).toFixed(2)}</td>
                    </tr>`;
                    tabela.innerHTML+=linha;
                
                }
            }
        }
    }       
}
    

    