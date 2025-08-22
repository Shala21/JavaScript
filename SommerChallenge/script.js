// ex. 1
// Exercise: Given an array of products, filter only the products that are in stock
// and return an array with their names in uppercase

const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true },
  { id: 4, name: 'Monitor', price: 350, inStock: false },
  { id: 5, name: 'Headphones', price: 85, inStock: true },
];

const present = products
.filter(s => s.inStock)
.map(s => s.name.toUpperCase());

console.log(present);


// ex. 2
// Exercise: Calculate the total value of all items in the shopping cart
// considering quantity and applying a 10% discount if total is over 100

const shoppingCart = [
  { item: 'Book', price: 15, quantity: 2 },
  { item: 'Pen', price: 2, quantity: 10 },
  { item: 'Notebook', price: 8, quantity: 3 },
  { item: 'Backpack', price: 45, quantity: 1 },
];

const total = shoppingCart.reduce((acc, n) => acc + n.price * n.quantity, 0);
console.log(total);

const discount = total > 100 ? total * 0.9 : total;
console.log(discount);


// ex. 3

// Exercise: Find the first user who is both active and has admin role
// Then check if there's at least one user from Italy

const users = [
  { id: 1, name: 'John', active: true, role: 'user', country: 'USA' },
  { id: 2, name: 'Maria', active: false, role: 'admin', country: 'Spain' },
  { id: 3, name: 'Luigi', active: true, role: 'admin', country: 'Italy' },
  { id: 4, name: 'Anna', active: true, role: 'user', country: 'Germany' },
];

const userAdmin = users.find(u => u.active && u.role === "admin" ) ;
console.log(userAdmin);

const italiano = users.some(u => u.country === "Italy");
console.log(italiano);


// ex. 4





// ex. 6
// Exercise: Check if all temperatures are below freezing point (0°C)
// Then filter only the days with negative temperatures

const temperatures = [
  { day: 'Monday', temp: -2 },
  { day: 'Tuesday', temp: -5 },
  { day: 'Wednesday', temp: 1 },
  { day: 'Thursday', temp: -3 },
  { day: 'Friday', temp: 0 },
];

const underZero = temperatures.every(under => under.temp < 0);
console.log(underZero)

const negativeDays = temperatures.filter(day => day.temp < 0);
console.log(negativeDays);

// ex. 7
// Exercise: Create a formatted string of email addresses separated by semicolons
// Format: "firstName.lastName@company.com"

const employees = [
  { firstName: 'John', lastName: 'Doe', department: 'IT' },
  { firstName: 'Jane', lastName: 'Smith', department: 'HR' },
  { firstName: 'Bob', lastName: 'Johnson', department: 'Sales' },
  { firstName: 'Alice', lastName: 'Brown', department: 'IT' },
];

const company = 'techcorp';

// 1. Creiamo un array di email
const reformatted = employees.map(emp => {
  return `${emp.firstName.toLowerCase()}.${emp.lastName.toLowerCase()}@${company}.com`;
});

// 2. Uniamo tutto in una sola stringa separata da ;
const formattedMail = reformatted.join(";");

console.log(formattedMail);


// ex. 8 
// Exercise: Group transactions by category and calculate total spent per category

const transactions = [
  { id: 1, category: 'Food', amount: 25 },
  { id: 2, category: 'Transport', amount: 15 },
  { id: 3, category: 'Food', amount: 30 },
  { id: 4, category: 'Entertainment', amount: 50 },
  { id: 5, category: 'Transport', amount: 20 },
  { id: 6, category: 'Food', amount: 15 },
];

const grouped = Object.groupBy(transactions, trans => trans.category);
console.log(grouped);

const totalsByCategory = transactions.reduce((acc, t) => {
  acc[t.category] = (acc[t.category] || 0) + t.amount;
  return acc;
}, {});

 console.log(totalsByCategory);


 // ex. 9
 // Exercise: Calculate the average age of users who have verified email

const userData = [
  { name: 'Tom', age: 25, emailVerified: true },
  { name: 'Lisa', age: 30, emailVerified: false },
  { name: 'Mike', age: 22, emailVerified: true },
  { name: 'Sarah', age: 28, emailVerified: true },
  { name: 'James', age: 35, emailVerified: false },
];

const verified = userData.filter(user => user.emailVerified);
console.log(verified);
const totalAge = verified.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / verified.length;
console.log(averageAge)


// ex. 10 
// Exercise: Find the index of the task with id 3 and remove it from the array
// Then add a new task at that position

const tasks = [
  { id: 1, task: 'Study JavaScript', completed: true },
  { id: 2, task: 'Practice coding', completed: false },
  { id: 3, task: 'Read documentation', completed: false },
  { id: 4, task: 'Build project', completed: false },
];

const newTask = { id: 5, task: 'Review code', completed: false };

const index = tasks.findIndex(task => task.id === 3);
console.log(index);
if (index !== -1) {
    tasks.splice(index, 1, {newTask});
}
//another variant with splice ->
//tasks.splice(2, 1, newTask); 
console.log(tasks);


// ex. 11 
// Exercise: Double the scores of all students who passed (score >= 60)
// and return only those with final score above 100

const examScores = [
  { student: 'Alex', score: 45 },
  { student: 'Beth', score: 65 },
  { student: 'Carl', score: 55 },
  { student: 'Dana', score: 70 },
  { student: 'Eric', score: 80 },
];

const double = examScores
  .map(n => n.score * 2)
  .filter(n => n >= 60);

console.log(double);

 const betterOne = double.filter(n => n >= 100);
 console.log(betterOne)


// ex. 12
// Exercise: Flatten the nested array structure and filter out all numbers less than 5

const nestedNumbers = [
  [1, 2, [3, 4]],
  [5, [6, [7, 8]]],
  [9, 10],
  [[11, 12], 13],
];

const flatNumbers = nestedNumbers
.flat(Infinity)
.filter(n => n >= 5); 

console.log(flatNumbers);


// ex. 13
// Exercise: Sort books first by year (ascending), then by title (alphabetically)

const library = [
  { title: 'The Great Gatsby', author: 'Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Lee', year: 1960 },
  { title: '1984', author: 'Orwell', year: 1949 },
  { title: 'Animal Farm', author: 'Orwell', year: 1945 },
  { title: 'Brave New World', author: 'Huxley', year: 1932 },
  { title: 'Fahrenheit 451', author: 'Bradbury', year: 1953 },
];

const ascending = library.sort((a, b) => b.year - a.year);
console.log(ascending)
const alphabetically = library.sort((a, b) => a.title - b.title);
console.log(alphabetically);


// ex. 14
// Exercise: Filter products that belong to any of the selected categories

const inventory = [
  { name: 'Shirt', category: 'Clothing', price: 30 },
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Shoes', category: 'Footwear', price: 80 },
  { name: 'Phone', category: 'Electronics', price: 600 },
  { name: 'Jeans', category: 'Clothing', price: 50 },
  { name: 'Watch', category: 'Accessories', price: 200 },
];

const selectedCategories = ['Electronics', 'Clothing'];
const productCateg = inventory.filter(item => selectedCategories.includes(item.category)
);
console.log(productCateg);


// ex. 15
// Exercise: Convert the array of key-value pairs into an object

const keyValuePairs = [
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York'],
  ['profession', 'Developer'],
  ['hobby', 'Photography'],
];

const obj = Object.fromEntries(keyValuePairs);
console.log(obj);


// ex. 16 
// Exercise: Add a 'hasDiscount' property to each product
// Set it to true if any of its tags includes 'sale' or 'promo'

const catalog = [
  { id: 1, name: 'Tablet', tags: ['electronics', 'sale'] },
  { id: 2, name: 'Chair', tags: ['furniture', 'office'] },
  { id: 3, name: 'Desk', tags: ['furniture', 'promo', 'office'] },
  { id: 4, name: 'Lamp', tags: ['lighting', 'home'] },
];

catalog.forEach(item => {
  item.hasDiscount = item.tags.includes('sale') || item.tags.includes('promo');
});

console.log(catalog);


// ex. 17 
// Exercise: Extract emails of active users older than 25 who joined after 2020
// Return them in lowercase

const accounts = [
  { email: 'John@EXAMPLE.com', age: 28, active: true, joinYear: 2021 },
  { email: 'MARY@example.COM', age: 24, active: true, joinYear: 2022 },
  { email: 'Bob@EXAMPLE.com', age: 30, active: false, joinYear: 2021 },
  { email: 'alice@Example.COM', age: 26, active: true, joinYear: 2019 },
  { email: 'TOM@example.com', age: 27, active: true, joinYear: 2023 },
];
