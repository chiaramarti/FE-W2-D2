/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 7;
let num2 = 5;
if (num1 < num2) {
  console.log ("il valore massimo è:" + num2 + ", il valore minimo è invece: " + num1)
} else {
  console.log (`il valore massimo è ${num1}, il valore minimo è invece ${num2}`)
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let five = 5;  // inizializzo la variabile FIVE, che è il valore fisso a cui miriferisco (può essere anche un const)
let notFive = 6; // qui inizializzo la miavariabile da controllare ( a cui posso cambiare valore )

if (five !== notFive){  // trad: 
// SE  ( cinque  E DIVERSO  6 ) allora
  console.log("not equal")  // mostra "not equal"
} else {
// SE NO 
  console.log("wow, they are two fives!") // mostra "..."
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let x = 20;
let y = 5;

if (x % y === 0){
  console.log("ohoh, abbiamo un numero divisibile per 5!")
} else { 
  console.log("peccato, non è divisibile per 5!")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let z = 5;
let w = 4;

if (z === 8) {
  console.log("il primo numero è uguale al numero dato: 8")
} else {
  if (w === 8) {
    console.log("il secondo numero è uguale al numero dato: 8")
  } else {
    if ( z + w === 8 ) {
      console.log("la somma del primo e del secondo numero è uguale al numero dato: 8")
    } else {
      console.log("nè il primo, nè il secondo numero, nè la loro somma sono uguali a 8")
    }
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 50; // assegno un valore al'oggetto 
if ( totalShoppingCart > 50 ){  //trad:
//SE   valore di total.. > 50   allora
  console.log( `Totale: ${totalShoppingCart}` )  // "totale: " + totalShoppingCar  // cioè mostra in console Totale: 50
} else {  
// SE NO    allora
  console.log( `Totale: ${totalShoppingCart + 10}` ) 
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
if ( totalShoppingCart > 50 ){
  console.log( `Totale: ${totalShoppingCart - (20 * totalShoppingCart / 100)}  (sconto del 20% già applicato)` )
} else {
  console.log( `Totale: ${totalShoppingCart + 10 - (20 * totalShoppingCart / 100)}  (sconto del 20% sul prodotto già applicato)` )
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numb1 = 8;
let numb2 = 4;
let numb3 = 20;

const numbers = []

//Verifico che n1 è maggiore di n2
if (numb1 > numb2) { 
  // Se n1 è maggioe di n2 verifico che n1 sia maggiore di n3. Da qui conosco già il massimo
  if (numb1 > numb3) { 
    // Verifico chi tra n1 e n2 sia il minore
    if (numb2 > numb3) { 
    // Se tutte le concatenazioni sono verificate l'ordine è n3 +n2 +n1 altrimenti...  
      numbers.push(numb3);
      numbers.push(numb2);
      numbers.push(numb1);
      console.log(numbers)
  } else {
    // Se l'ultima non è verificata l'ordine è n2  n3 n1
    numbers.push(numb2);
    numbers.push(numb3);
    numbers.push(numb1);
    console.log(numbers)
  }
} else {
  // Se n1 non è maggiore di n2 so già chi è il minore e il maggiore
  numbers.push(numb2);
  numbers.push(numb1);
  numbers.push(numb3);
  console.log(numbers)
}
} else {
// Verifico che anche n2 sia maggiore di n3. Uso il minore per risparmiare un calcolo nel flusso
  if (numb2 < numb3) {
    // Se n2 < n3 l'ordine è n1 n2 n3
    numbers.push(numb1);
    numbers.push(numb2);
    numbers.push(numb3);
    console.log(numbers)
  } else {
    // Altrimenti verifico chi è il maggiore tra n1 e n3
    if (numb1 > numb3) {
      // Se n1 è maggiore di n3 l'ordine è n3 + n1 + n2
      numbers.push(numb3);
      numbers.push(numb1);
      numbers.push(numb2);
      console.log(numbers)
    } else {
      // Altrimenti l'ordine è n1 n3 n2
      numbers.push(numb1);
      numbers.push(numb3);
      numbers.push(numb2);
      console.log(numbers)
    } 
  }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let val = 4
// let val = "4";
// let val = "chiara"  // il valore non è un numero nè....

if ( typeof val === Number) {
  console.log("il valore è un numero: " + val)
} else {
  if ( isNaN(val) === false) {
    console.log("il valore è un numero: " + val)  
  } else {
    console.log("il valore non è un numero nè una stringa convertibile a numero")
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

x = 4;

if ( x % 2 === 0 ) {
  console.log("Pari! Io odio i numeri pari!")
} else {
  console.log("Dispari! You're sexy and you know it!")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  //PROVA 1
  val = 25
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Compreso strettamente tra 5 e 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

    // PROVA 2
    val = 8
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Compreso strettamente tra 5 e 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

    // PROVA 2
    val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Compreso strettamente tra 5 e 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
// metodo 1
let randomNum = []

//metodo 1a
randomNum.push(1)
randomNum.push(2)
randomNum.push(3)
randomNum.push(4)
randomNum.push(5)
randomNum.push(6)
randomNum.push(7)
randomNum.push(8)
randomNum.push(9)
randomNum.push(10)

//metodo 1b
/*randomNum.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)*/
console.log(randomNum)

// metodo 2
let rNum = []

for (let a = 1; a <= 10; a++){
  rNum.push(a);
}
console.log(rNum)  


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
randomNum.splice(randomNum.length - 1 , 1, 100); 
console.log(randomNum)

// funziona anchearray[array.leght -1] = 100;