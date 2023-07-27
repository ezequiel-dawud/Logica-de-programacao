function pulaLinha() {
    document.write("<br>");
}
function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
    return peso / (altura * altura);
}

let nome = prompt("Informe seu nome de usuario")
let alturaInformada = prompt(nome + " Informe sua altura");
let pesoInformado = prompt(nome + " Informe seu peso");

let imc = calculaImc(pesoInformado, alturaInformada);

document.write(`${nome} seu IMC é  ${imc}`)
