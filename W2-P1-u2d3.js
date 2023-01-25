/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/



function trovaIlPiuGrande(num1, num2) { //(dichiariamo la funzione)
  if (num1 > num2) {   //La condizione if (num1 > num2) verifica se il primo numero è maggiore del secondo//
    return num1;       // Se la condizione è vera, la funzione restituisce il valore del primo numero.
  } else {
    return num2;  ////Altrimenti, la funzione restituisce il valore del secondo numero.//
  }
}


console.log(trovaIlPiuGrande(10, 5)); // stampa 10
console.log(trovaIlPiuGrande(20, 25)); // stampa 25



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/



function controllaSeUguale(num) {  //(dichiariamo la funzione) La funzione controllaSeUguale() accetta un argomento num che rappresenta il numero da verificare.
  if (num !== 5) {    //Utilizza l'operatore di confronto "non uguale a" (!==) per verificare se il numero è diverso da 5
    console.log("not equal"); //Se la condizione è vera, viene stampato "not equal" in console. Altrimenti, non viene eseguita alcuna azione.
  }
}



controllaSeUguale(3); // stampa "not equal"
controllaSeUguale(5); // non viene stampato nulla
controllaSeUguale(10); // stampa "not equal"


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



function controllaSeDivisibilePerCinque(num) { //(dichiariamo la funzione) La funzione controllaSeDivisibilePerCinque() accetta un argomento num che rappresenta il numero da verificare.
  if (num % 5 === 0) {  //Utilizza l'operatore di modulo (%) per verificare se il numero è perfettamente divisibile per 5.
    console.log("divisible by 5");  //Se il resto della divisione è uguale a 0, viene stampato "divisible by 5" in console. Altrimenti, non viene eseguita alcuna azione. L'operatore di modulo restituisce il resto della divisione di un numero per un altro. Ad esempio, 10 % 3 restituisce 1, poiché 3 può essere diviso una volta perfettamente in 10, con un resto di 1.
  }
}



controllaSeDivisibilePerCinque(10); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(15); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(20); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(25); // stampa "divisible by 5"



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


function controllaSeUgualeAOtto(num1, num2) {  //(dichiariamo la funzione) La funzione controllaSeUgualeAOtto() accetta due argomenti num1 e num2 che rappresentano i due numeri da verificare. (dichiariamo le funzione)
  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) { // Utilizza una struttura di controllo if-else con una condizione composta (if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8)) per verificare se uno dei numeri è uguale a 8 o se la loro somma o differenza è uguale a 8
    return true; //L'operatore di OR (||) verifica se almeno una delle condizioni è vera. Se la condizione è vera, la funzione restituisce true. 
  } else {
    return false;  //Altrimenti, la funzione restituisce false
  }
}

//PLUS
L'operatore di OR (||)  è un operatore di confronto che restituisce true se almeno una delle due condizioni è vera, altrimenti restituisce false.

Ecco un esempio di come puoi utilizzare l'operatore di OR:

if (num1 > num2 || num1 === num2) { //(dichiariamo le funzione)
  // questo codice viene eseguito se la prima condizione (num1 > num2) o la seconda condizione (num1 === num2) sono vere
}

L'operatore di OR viene spesso utilizzato in combinazione con l'operatore di AND (&&), che restituisce true solo se entrambe le condizioni sono vere.

if (num1 > 0 && num1 < 10) {
  // questo codice viene eseguito solo se num1 è maggiore di 0 e minore di 10
}
