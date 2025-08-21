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

 //-> need more understanding about reduce 
const totalsByCategory = transactions.reduce((acc, t) => {     
  if (!acc[t.category]) acc[t.category] = 0;
  acc[t.category] += t.amount;
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