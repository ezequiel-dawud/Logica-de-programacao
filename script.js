
function pulaLinha() {
    document.write("<br>");
}
function mostra(frase) {
    document.write(frase)
}

const anoAtual = new Date();
let ano = anoAtual.getFullYear();
let media = (34 + 66 + 33) / 3;
mostra("Eu tenho " + (ano - 1987) + " anos");
pulaLinha();
mostra("Hello");
pulaLinha();
mostra(`A media das idades é ${Math.round(media)}`);