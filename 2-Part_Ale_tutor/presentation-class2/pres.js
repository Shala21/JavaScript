const spingi = [1, 2, 3, 4,]
const spin = spingi.unshift(0);
console.log(spingi);


const spingi1 = [1, 2, 3, 4,]
const spin1 = spingi1.push(5);
console.log(spingi1);


const dog = [ 1,2,3];
const cane = dog.shift();
console.log(cane);
console.log(dog);


const dog1 = [ 1,2,3];
const cane1 = dog1.pop();
console.log(cane1);
console.log(dog1);


const casa = [1, 2, 3];
const home = casa.map(x => x %2 === 1 ? x * 2 : x);
console.log(home);

const casa1 = [1, 2, 3, 4];
const home1 = casa1.filter(x => x % 2 === 1);
console.log(home1);


const casa2 = [1, 2, 3, 4];
const home3 = casa2.forEach(x => console.log(x));