async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}
getData();



async function fetchData(url) {
    try {
        const response = await fetch(url);
        const todos = await response.json();
        console.log(todos);
    }
    catch (error) {
        console.error(error.message);
    }
}
fetchData('https://jsonplaceholder.typicode.com/posts');
fetchData('https://jsonplaceholder.typicode.com/todos');


// Crea una promessa semplice 
function fakeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = Math.random() > 0.99; // if i want a postive boolean, set -> > 0.5
            if (ok) {
                resolve('Successo');
            } else {
                reject('Fallimento');
            }
        }, 2000);
    });
}
fakeRequest()
    .then((data) => console.log('Questo e positivo'))

    // Gestione di una promessa con catch
    .catch((err) => console.error('Errore', err))

    // Gestione di una promessa con finally

    .finally(() => console.log('Richiesta conclusa'));



// Catena di promesse semplici
function randomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

randomNumber()
.then((num) => {
    return num * 2;
})
.then((num) => { 
    console.log(num);
    return num;
})
.then((numMultiplayer) => {
    return numMultiplayer + 3;
}) 
.then((numMultiplayer) => { 
    console.log(numMultiplayer);
    return numMultiplayer;
});


// Catena di promesse con condizioni
function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 10) + 1; //number between 1 and 10
            console.log("Numero iniziale:", num);
            resolve(num);
        }, 1000);
    });
}

getNumber()
.then((num) => {
    if (num % 2 === 0) {
        console.log('È pari → lo moltiplico per 2');
        return num * 2 ; 
    } else { 
        console.log('È dispari → ci sommo 3');
        return num + 3;
    }
})

.then((newNum) => {
    console.log('Risultato finale:', newNum);
})
.catch((err) => console.log('Errore', err));


// Catena di promesse con gestione di errori
function getColor() {
    const colors = ['red', 'Yellow', ' Blue', 'Green', 'White'];

    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const color = colors[Math.floor(Math.random() * colors.length)];
            console.log(color);

            if(color === "rosso") {
                reject(new Error ('Il colore rosso non e un colore valido'));
            } else {
                resolve(color);
            }
        }, 1000)
    })
}
getColor()
.then((color) => {
    console.log('Colore accettato: ', color);
    return color.toUpperCase();
})
.then((upperColor) => {
    console.log('Trasformato in maiuscolo: ', upperColor);
    return `${upperColor}!!!`;
})
.then((finalResult) => {
    console.log('Risultato finale; ', finalResult);
})
.catch((err) => {
    console.error("Errore:", err.message);
})
.finally(() => {
    console.log("->Fine esecuzione<- :)");
});



// Gestione degli errori con catch
async function failAfterTwoSeconds() {
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    throw new Error("Somthing went wrong after 2 seconds");
}

async function run() {
    try { 
        await failAfterTwoSeconds();
        console.log("Does not exist as a msg");
    } catch(err) {
        console.error("Error:" , err.message);
    }
}

run();


//Gestione degli errori con then e catch
async function isEvenAsync(number) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return number % 2 === 0;
}

isEvenAsync(7)
.then(result => {
    console.log("The result is: ", result);
})
.catch(err => {
    console.log("Errore: ", err);
});



// Gestione di errori in una catena di Promise
function thePub() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if(success) {
                resolve("Problem solved: yuo are in the right Pub:)");
            } else {
                reject(new Error("Access denied: Pub closed ;("));
            }
        }, 2000);
    });
}

thePub()
.then(message => { 
    console.log("First step: ", message);
    return thePub();
})
.then(message => { 
    console.log("Second step: ", message);
    return thePub();
})
.then(message => { 
    console.log("Third step: ", message);
    return thePub();
})
.catch(err => {
    console.error("Error was find: ",err.message);
});



// Utilizza Promise.all
Promise.all([isEvenAsync(), thePub()])
.then(result => {
    console.log("Both Promise are solved");
    console.log("Reult: ", result);
})
.catch(err => {
    console.error("Error in  one of the Promise: ", err);
});
Promise.race([getColor(), failAfterTwoSeconds()])
.then(result => {
    console.log("The first Promisse is complete: ", result);
})
.catch(err => {
    console.error("Errore: ",err);
});



// Utilizzare Promise.allSettled
Promise.allSettled([isEvenAsync(), thePub()])
.then(result => {
    console.log("All Promise are completed");
    result.forEach((result, index) => {
        if(result.status === "fulfilled") {
            console.log(`Promise ${index + 1} solved with:`, result.value);
        } else {
            console.log(`Promise ${index + 1} rifiutata con:`, result.reason.message);
        }
    });
});



// Funzione asincrona semplice
async function greet() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Hello, This async function it works:)"
}

greet()
.then(message => console.log(message))
.catch(err => console.error(err));


// Gestione degli errori con try e catch
async function isOddAsync(number) {
    try {
        // simula un ritardo di 1 secondo
        await new Promise(resolve => setTimeout(resolve, 1000));

        // verifica se il numero è dispari
        const isOdd = number % 2 !== 0;

        if (isOdd) {
            return `Il numero ${number} è dispari`;
        } else {
            return `Il numero ${number} non è dispari`;
        }
    } catch (err) {
        console.error("Errore catturato:", err);
    }
}

// chiamata della funzione
isOddAsync(7).then(message => console.log(message));
