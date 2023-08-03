
function pulaLinha() {
    document.write("<br>");
}
function mostra(frase) {
    document.write(frase);
    pulaLinha();
}


function sorteia() {
    return Math.round(Math.random() * 100);
}

function sorteiaNumeros(quantidade) {
    let segredo = [];
    let numero = 1

    while (numero <= quantidade) {
        segredo.push(sorteia());

        numero++;

    }
    return segredo;

}

mostra(sorteiaNumeros(5));

for (var posicao = 0; posicao < segredo.length; posicao++) {
    mostra(segredo[posicao])
}

