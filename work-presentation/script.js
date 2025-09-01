// metodo .filter(), e un metodo JS che va a filtrare tutti gli elementi dell  array originale 
// e se la condizione e true crea una nuova array con i valori cercati, se false l' elemento viene escluso

// 1 Esempio: Trova i numeri pari della array ->
const numeri = [1, 2, 3, 4, 5, 6];

const num = numeri.filter(n => n % 2 === 0);
console.log(num);


// 2 Esempio: Trova i numeri dispari della array ->
const numeri1 = [1, 2, 3, 4, 5, 6];

const num2 = numeri1.filter(n => n % 2 !== 0);
console.log(num2);


// 3 Esempio: Trova la parola con 4 lettere o meno ->
const parole = ["pera", "banana", "mela", "fragola"];

const parola = parole.filter(p => p.length <= 4);
console.log(parola);


// metodo .map(), e un metodo JS che crea una un array popolato con i risultati della chiamata di una funzione fornita
// e che viene applica su ogni elemento dell array chiamante 

// 1 Esempio: Trasforma ogni parola della array in parole maiuscole
const frutta = ["pera", "banana", "mela", "fragola"];

const frutti = frutta.map(f => f.toUpperCase());
console.log(frutti);


// 2 Esempio: Manipola i dati della array e moltiplica * 2 ->
const number = [1, 2, 3, 4, 5, 6];

const numb = number.map(n => n * 2);
console.log(numb);
 
