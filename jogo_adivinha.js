 function pulaLinha() {
     document.write("<br>");
 }
 function mostra(frase) {
     document.write(frase);
     pulaLinha();
 }

 let numeroPensado = Math.round(Math.random() *10);
 
 
 let chute = parseInt(prompt("Digite seu chute"));

 if (chute == numeroPensado) {
     mostra("Voçê acertou misserável!!")
 } else {
     mostra(`Você errou o numero pensado foi ${numeroPensado}`)
 }

