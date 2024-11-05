
let nome = document.getElementById("nome")
let tempoAnos = document.getElementById("Tempo")
let salario = document.getElementById("salario")


let textoNome = document.querySelector("#nomeFunc")
let textoTempo = document.querySelector("#tempoTrabalho")
let textoSalarioAntigo = document.querySelector("#salarioAntigo")
let textAumento = document.querySelector("#textoAumento")
let textoNovoSalario = document.querySelector("#textoNovoSalario")

let aumento = 0
let novoSalario = 0

function calcularAumento() {
    if(tempoAnos.value >= 5) {
        aumento = 20
        
    }else {
        
        aumento = 15
    }
    novoSalario = aumento/100 * salario.value + Number(salario.value) 

    textoNome.textContent = 'Nome do Funcionário: ' +  nome.value
    textoTempo.textContent = 'Anos de Serviço: ' +  tempoAnos.value + ' anos'
    textoSalarioAntigo.textContent = 'Salario Antigo: R$' +  salario.value
    textAumento.textContent = 'Aumento Salarial: ' + aumento + '%'
    textoNovoSalario.textContent = 'Novo Salario: R$' + novoSalario
}


