/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
 */

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.skills.pop()

console.log(me)

//La prima riga crea un oggetto chiamato "me" con le proprietà "name", "lastName" e "skills". La proprietà "skills" è un array con tre elementi: "javascript", "html" e "css".

//La riga successiva utilizza il metodo "pop()" sull'oggetto "skills" di "me". Il metodo "pop()" rimuove l'ultimo elemento dell'array e restituisce l'elemento rimosso. In questo caso, l'ultimo elemento dell'array "skills" è "css" e verrà rimosso.

//Infine, la riga successiva utilizza il metodo console.log() per stampare l'oggetto "me" sulla console, che mostrerà che l'ultimo elemento dell'array "skills" è stato rimosso.
/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

const arr2 = []

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    arr2.push(i)
  }
}
console.log(arr2)

//La prima riga crea un array vuoto chiamato "arr2".

//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per 100 volte. La variabile "i" viene inizializzata con il valore 1 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge il valore 100.

//La terza riga utilizza l'operatore di modulo " % " per verificare se "i" è dispari. L'operatore di modulo restituisce il resto della divisione tra i e 2. Se il resto è diverso da 0, significa che i è dispari.

//La quarta riga utilizza il metodo "push()" per aggiungere il valore di "i" all'array "arr2" solo se "i" è dispari.

//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "arr2" sulla console, che mostrerà tutti i valori dispari da 1 a 100.

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

const arr3 = []
for (let i = 1; i <= 10; i++) {
  const rand = Math.floor(Math.random() * 101 + 1)
  arr3.push(rand)
}
console.log(arr3)


//La prima riga crea un array vuoto chiamato "arr3".
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per 10 volte. La variabile "i" viene inizializzata con il valore 1 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge il valore 10.
//La terza riga crea una variabile chiamata "rand" che utilizza la funzione Math.random() per generare un numero casuale tra 0 e 1. La funzione Math.random() genera un numero tra 0 (incluso) e 1 (escluso).
//La quarta riga utilizza la funzione Math.floor() per arrotondare il numero generato dalla Math.random() al valore intero inferiore. In questo caso, moltiplichiamo il numero generato per 101 e poi sommiamo 1 per ottenere un numero casuale compreso tra 1 e 101.
//La quinta riga utilizza il metodo "push()" per aggiungere il valore di "rand" all'array "arr3".
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "arr3" sulla console, che mostrerà 10 valori casuali compresi tra 0 e 100.

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

// NOTA: arr3 viene qui usato come esempio, è possibile utilizzare anche qualsiasi altro array

const even = []
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    even.push(arr3[i])
  }
}

console.log(even)

//La prima riga crea un array vuoto chiamato "even".
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "arr3". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "arr3".
//La terza riga utilizza l'operatore di modulo " % " per verificare se "arr3[i]" è pari. L'operatore di modulo restituisce il resto della divisione tra "arr3[i]" e 2. Se il resto è uguale a 0, significa che "arr3[i]" è pari.
//La quarta riga utilizza il metodo "push()" per aggiungere il valore di "arr3[i]" all'array "even" solo se "arr3[i]" è pari.
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "even" sulla console, che mostrerà tutti i valori pari dell'array "arr3".

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

// NOTA: arr3 viene qui usato come esempio, è possibile utilizzare anche qualsiasi altro array

let sum = 0
for (let i = 0; i < arr3.length; i++) {
  sum = sum + arr3[i]
}

console.log(sum)


//La prima riga inizializza una variabile chiamata "sum" con il valore 0. Questa variabile verrà utilizzata per tenere traccia della somma totale dei numeri dell'array.
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "arr3". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "arr3".
//La terza riga utilizza l'operatore di assegnazione "=" per aggiungere il valore "arr3[i]" alla variabile "sum" in ogni iterazione del ciclo.
//Infine, la riga successiva utilizza il metodo console.log() per stampare il valore della variabile "sum" sulla console, che mostrerà la somma totale dei numeri dell'array "arr3".

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

const arr6 = [5, 68, 'john', 34, 85]

for (let i = 0; i < arr6.length; i++) {
  if (typeof arr6[i] === 'number') {
    arr6[i] = arr6[i] + 1
  }
}

console.log(arr6)

//La prima riga crea un array chiamato "arr6" con valori di tipo diverso: numeri, stringhe e altri tipi di dati.
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "arr6". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "arr6".
//La terza riga utilizza la funzione "typeof" per verificare se l'elemento "arr6[i]" è di tipo number. La funzione restituisce il tipo di dato dell'elemento.
//La quarta riga utilizza l'operatore di assegnazione "=" per incrementare il valore dell'elemento "arr6[i]" di 1 solo se è di tipo number.
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "arr6" sulla console, che mostrerà tutti i valori numerici incrementati di 1 e gli altri valori non modificati.


/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

const arr7 = [1, 4, 7, 9, 6, 4, 5]

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) {
    arr7.splice(i--, 1)
  }
}
console.log(arr7)

//La prima riga crea un array chiamato "arr7" con valori numerici.
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "arr7". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "arr7".
//La terza riga utilizza l'operatore di modulo " % " per verificare se "arr7[i]" è pari. L'operatore di modulo restituisce il resto della divisione tra "arr7[i]" e 2. Se il resto è uguale a 0, significa che "arr7[i]" è pari.
//La quarta riga utilizza il metodo "splice()" per rimuovere l'elemento pari "arr7[i]" dall'array. Il metodo splice prende come argomenti l'indice dell'elemento da rimuovere e il numero di elementi da rimuovere. Utilizziamo anche l'operatore -- per decrementare l'indice "i" così l'indice successivo non salta quando un elemento viene rimosso dall'array.
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "arr7" sulla console, che mostrerà solo gli elementi dispari dell'array originale.


//EXSTRA SPIEGAZIONE METODO SPICE
//Il metodo "splice()" è un metodo JavaScript che modifica il contenuto di un array rimuovendo o aggiungendo elementi.

Esempio: 


let arr = [1, 2, 3, 4, 5];

// Rimuovi l'elemento all'indice 1
let removed = arr.splice(1, 1); // restituisce [2]
console.log(arr); // [1, 3, 4, 5]
console.log(removed); // [2]

// Aggiungi l'elemento 6 all'indice 2
arr.splice(2, 0, 6);
console.log(arr); // [1, 3, 6, 4, 5]


/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

const arr8 = []

while (arr8.length < 10) {
  const rand = Math.floor(Math.random() * 101 + 1)
  if (!arr8.includes(rand)) {
    arr8.push(rand)
  }
}

console.log(arr8)

//La prima riga crea un array vuoto chiamato "arr8".
//La riga successiva crea un ciclo "while" che esegue il codice all'interno delle parentesi graffe finché la lunghezza dell'array "arr8" è minore di 10.
//La terza riga crea una variabile chiamata "rand" che utilizza la funzione Math.random() per generare un numero casuale tra 0 e 1. La funzione Math.random() genera un numero tra 0 (incluso) e 1 (escluso).
//La quarta riga utilizza la funzione Math.floor() per arrotondare il numero generato dalla Math.random() al valore intero inferiore. In questo caso, moltiplichiamo il numero generato per 101 e poi sommiamo 1 per ottenere un numero casuale compreso tra 1 e 11.
//La quinta riga utilizza l'operatore logico NOT "!" e il metodo "includes()" per verificare se il valore random generato non è già presente nell'array "arr8". Il metodo "includes()" restituisce un valore booleano


//EXSTRA Math.flor 
//La funzione "Math.floor()" è una funzione JavaScript che appartiene all'oggetto Math. Essa arrotonda un numero verso il basso (verso il più vicino intero minore) e restituisce il risultato. In generale, Math.floor() è utile per arrotondare un numero verso il basso ad un valore intero e utilizzato comunemente per generare numeri casuali interi.
 


/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const arr9 = ['EPICODE', 'is', 'great']
for (let i = 0; i < arr9.length; i++) {
  arr9[i] = arr9[i].length
}

console.log(arr9)

//La prima riga crea un array chiamato "arr9" contenente stringhe.
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "arr9". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "arr9".
//La terza riga utilizza la proprieta "length" per ottenere la lunghezza di ogni elemento dell'array "arr9" e sostituisce l'elemento originale con la sua lunghezza.
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "arr9" sulla console, che mostrerà la lunghezza di ogni stringa dell'array originale.



/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

const arr10 = [1, 3, 5]
arr10.reverse()

console.log(arr10)


//La prima riga crea un array chiamato "arr10" con i valori [1, 3, 5].
//La riga successiva utilizza il metodo "reverse()" per invertire l'ordine degli elementi dell'array "arr10". Il metodo reverse() modifica l'array originale e non restituisce un nuovo array.
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "arr10" sulla console, che mostrerà l'array originale con gli elementi invertiti.


//NOTAAA VI DO UN CONSIGLIO 
//questa è una soluzione efficace quando si deve invertire un array di piccole dimensioni, per array più grandi con una grande quantità di elementi si può utilizzare un ciclo for e una variabile temporanea per scambiare gli elementi all'inizio e alla fine dell'array finchè non si raggiunge la metà dell'array.

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

const arr11 = [6, 4, 8, 10, -4, 5]
let max = arr11[0]
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] > max) {
    max = arr11[i]
  }
}
console.log(max) 


  
//La prima riga crea un array chiamato "arr11" con valori numerici.
//La riga successiva crea una variabile "max" e assegna ad essa il primo valore dell'array "arr11"

//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "arr11". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "arr11".

//La quarta riga utilizza l'operatore di confronto ">" per verificare se l'elemento "arr11[i]" è maggiore del valore attuale di "max". Se l'elemento è maggiore, l'operatore di assegnazione "=" assegna il valore di "arr11[i]" a "max"



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

let maxYear = parseInt(movies[0].Year)
let oldestMovie
for (let i = 0; i < movies.length; i++) {
  const parsedYear = parseInt(movies[i].Year) // parse string to number
  if (parsedYear > maxYear) {
    oldestMovie = movies[i]
  }
}

console.log(oldestMovie)


//La prima riga crea una variabile "maxYear" e assegna ad essa il valore anno del primo film nell'array "movies". La funzione parseInt() viene utilizzata per convertire il valore anno in formato stringa in un numero intero, in modo che possa essere utilizzato per il confronto.
//La riga successiva crea una variabile "oldestMovie" che verrà utilizzata per salvare il film più vecchio trovato nell'array.
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "movies". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "movies".
//La quarta riga crea una variabile "parsedYear" e assegna ad essa il valore anno del film corrente nell'iterazione convertito in un numero intero usando la funzione parseInt().
//La quinta riga utilizza l'operatore di confronto ">" per verificare se l'anno del film corrente è maggiore dell'anno massimo trovato finora. Se l'anno è maggiore, la riga successiva assegna il film corrente alla variabile "oldestMovie"
//Infine, la riga successiva utilizza il metodo console.log() per stampare il film più vecchio trovato nell'array "movies" sulla console.

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

const total = movies.length

//La riga di codice crea una variabile chiamata "total" e assegna ad essa la lunghezza dell'array "movies". La lunghezza dell'array è il numero di elementi contenuti nell'array. In questo caso, "total" contiene il numero di film presenti nell'array "movies". Questa variabile può essere utilizzata per contare il numero di elementi in un array o per creare un ciclo che esegue un'operazione per ogni elemento dell'array.

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const titles = []
for (let i = 0; i < movies.length; i++) {
  titles.push(movies[i].Title)
}
console.log(titles)

//La prima riga crea un array vuoto chiamato "titles".
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "movies". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "movies".
//La terza riga utilizza il metodo "push()" per aggiungere il valore del titolo del film corrente nell'iterazione all'array "titles". Il metodo push() aggiunge un elemento alla fine dell'array e restituisce la nuova lunghezza dell'array
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "titles" sulla console, che mostrerà l'array con i titoli dei film presenti nell'array "movies".

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const thisMil = []
for (let i = 0; i < movies.length; i++) {
  if (parseInt(movies[i].Year) > 2000) {
    thisMil.push(movies[i])
  }
}
console.log(thisMil)

//La prima riga crea un array vuoto chiamato "thisMil".
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "movies". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "movies".
//La terza riga utilizza la funzione parseInt() per convertire il valore dell'anno in un numero intero e l'operatore di confronto > per verificare se l'anno del film corrente è maggiore di 2000. Se l'anno è maggiore, la riga successiva utilizza il metodo "push()" per aggiungere il film corrente all'array "thisMil".
//Infine, la riga successiva utilizza il metodo console.log() per stampare l'array "thisMil" sulla console, che mostrerà l'array con i film usciti nel millennio corrente, ovvero dopo il 2000.

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'

let movieById
for (let i = 0; i < movies.length; i++) {
  if (movies[i].imdbID === id) {
    movieById = movies[i]
    break
  }
}

console.log(movieById)

//La prima riga crea una costante "id" che contiene l'id del film cercato.La riga successiva crea una variabile "movieById" che verrà utilizzata per salvare il film con l'id specificato.
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "movies". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "movies".
//La quarta riga utilizza l'operatore di confronto "===" per verificare se l'id del film corrente nell'iterazione è uguale all'id specificato. Se l'id è uguale, la riga successiva assegna il film corrente alla variabile "movieById" e utilizza la parola chiave "break" per interrompere il ciclo.


/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
let yearsSum = 0
for (let i = 0; i < movies.length; i++) {
  yearsSum = yearsSum + parseInt(movies[i].Year)
}
console.log(yearsSum)

//La prima riga crea una variabile "yearsSum" e la inizializza a 0. Questa variabile verrà utilizzata per tenere traccia della somma degli anni di produzione dei film.
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "movies". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "movies".
//La terza riga utilizza la funzione parseInt() per convertire l'anno del film corrente nell'iterazione in un numero intero. Successivamente utilizza l'operatore di somma (+) per aggiungere l'anno del film corrente alla somma totale degli anni dei film.

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

const query = 'Ring'
const result = []
for (let i = 0; i < movies.length; i++) {
  if (movies[i].Title.includes(query)) {
    result.push(movies[i])
  }
}

console.log(result)


//La prima riga crea una costante "query" che contiene la parola per cui si sta cercando nei titoli dei film.
//La riga successiva crea un array vuoto chiamato "result".
//La riga successiva crea un ciclo "for" che esegue il codice all'interno delle parentesi graffe per ogni elemento dell'array "movies". La variabile "i" viene inizializzata con il valore 0 e viene incrementata di 1 ad ogni iterazione del ciclo fino a quando non raggiunge la lunghezza dell'array "movies".
//La quarta riga utilizza il metodo "includes()" per verificare se il titolo del film corrente nell'iterazione contiene la parola specificata. Il metodo includes() restituisce true se la stringa cercata è presente nella stringa in cui si cerca, false altrimenti. Se il titolo del film corrente contiene la parola specificata, la riga successiva utilizza il metodo "push()" per aggiungere il film corrente all'array "result".