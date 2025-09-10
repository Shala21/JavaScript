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
