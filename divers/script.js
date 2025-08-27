// metodo .filter(), un metodo JS che va a filtrare tutti gli elementi dell  array originale, e se la condizione e true crea una nuova array con i valori cercati, se fale l elemento viene escluso
const numeri = [1, 2, 3, 4, 5, 6];

const num = numeri.filter(n => n %2 === 0);
console.log(num);

const parole = ["pera", "banana", "merla", "fragola"];

const parola = parole.filter(p => p.length <= 4);
console.log(parola);


// metodo .map(), e un metodo JS che crea una un array popolato con i risultati della chiamata di una funzione fornita e che viene applica su ogni elemento dell array chiamante 
const frutta = ["pera", "banana", "merla", "fragola"];

const frutti = frutta.map(f => f.toUpperCase());
console.log(frutti);

const number = [1, 2, 3, 4, 5, 6];

const numb = number.map(n => n * 2);
console.log(numb);



// metodo .reduce(), e un metodo JS e serve a ridurre un array in un unico valore, applicando una funzione su ogni elemento e accumulando il risultato. Puo restituire un numero, una stringa, un array, un oggetto..dpende da come lo usi. cons reduce puoi rucreare quasi tutti gli altru metodi(.map, .filter, .some ecc).
const numeri1 = [1, 2, 3, 4, 5, 6];

const numb1 = numeri1.reduce((acc, n) => acc * n, 1);
console.log(numb1);

//trovare il numero massimo
const maggiore =  [14, 62, 37, 477, 785, 86];

const numMaggiore = maggiore.reduce((acc, n) => n > acc ? n : acc, maggiore[0]);
console.log(numMaggiore);

//contare quante volte appare un elemento
const lettere = ["a", "b", "a", "c", "b", "a"];

const conteggio = lettere.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
}, {});

console.log(conteggio); //{a: 3, b: 2, c: 1}


// metodo .find() serve a cercare il primo elemento in un array che soddisfa una condizione -> se lo trova restituisce l elemento -> se non trova non lo restituisce 
const cerca = ["pera", "banana", "merla", "fragola"];

 const trovato = cerca.find(n => n.cerca = "pera");
 console.log(trovato)


const persone = [
  { nome: "Marco", età: 17 },
  { nome: "Giulia", età: 22 },
  { nome: "Luca", età: 19 }
];

const maggiorenne = persone.find(p => p.età >=18);
console.log( maggiorenne); 

//{ nome: "Giulia", età: 22 } 
// ->perche find restituisce solo il primo elemento che soddisfa la condizione!!!


// metodo .findIndex .findIndex()Restituisce l’indice (la posizione) del primo elemento che soddisfa la condizione.Se non trova nulla → restituisce -1.
const numeri2 = [10, 20, 30, 40];

const indice = numeri2.findIndex(n => n > 25);

console.log(indice); // 2 (perché 30 si trova all’indice 2)


// metodo .some() serve a verificare se almeno un elementi della array soddisfa una determinata condizione. Restituisce true se almeno un elemento soddisfa la condizione, restituisce false se l elemento non soddisfa la condizione
const controlla =  [1, 2, 3, 4, 5];

const trovato1 = controlla.some(n => n % 2 === 0 );
console.log(trovato1) // true-> ci sn numeri pari

const numeri3 = [1, 3, 5];

const haPari = numeri3.some(n => n % 2 === 0);

console.log(haPari); // false-> non ci sn numeri pari


const persone0 = [
  { nome: "Marco", età: 17 },
  { nome: "Giulia", età: 22 },
  { nome: "Luca", età: 19 }
];

const maggiorennePresente = persone0.some(p => p.età >= 18);
console.log(maggiorennePresente); //true


// metodo .sort() serve a ordinare gli elementi in un array, modifica l array originale, non crea una copia. Per default orduna gli elementi di un array in ordine alfabetico..sort() modifica l’array originale.

//Per ordinare numeri, serve sempre la funzione di confronto, altrimenti ordina come stringhe.

//Può essere usato anche con stringhe, date o oggetti, basta definire la funzione di confronto.
const nomi = ["Marco", "Giulia", "Luca"];

nomi.sort();
console.log(nomi);

const numeri4 = [10, 5, 40, 25];

numeri4.sort((a, b) => a - b);
console.log(numeri4);


const persone1 = [
  { nome: "Marco", età: 25 },
  { nome: "Giulia", età: 22 },
  { nome: "Luca", età: 30 }
];

const xson = persone1.sort((a, b) => a.età - b.età);
console.log(xson);


//metodo .slice() serve a estrarre una posizione di un array senza modificare l array riginale, restituisce un array con elementi selezionati e non cambia l array originale.
const numer = [10, 20, 30, 40, 50];

const numEri = numer.slice(1,3 ); // .slice(2); -> estrrae dall indice 2 fino alla fine della array
console.log(numEri);


//copiare un array
const numerI = [10, 20, 30];

const copia = numerI.slice();

console.log(copia); // [10, 20, 30]


//
