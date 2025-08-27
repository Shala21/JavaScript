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

const userAdmin = users.find(u => u.active && u.role === "admin");
console.log(userAdmin);

const italiano = users.some(u => u.country === "Italy");
console.log(italiano);


// ex. 4
// Exercise: Sort students by grade (descending) and return the top 3 students

const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'Diana', grade: 95 },
  { name: 'Eve', grade: 88 },
  { name: 'Frank', grade: 90 },
];

let descending = students
  .sort((a, b) => b.grade - a.grade)
  .slice(0, 3);

console.log(descending);


// ex. 5 
// Exercise: Extract all tags from all posts into a single array,
// removing duplicates and sorting alphabetically

const blogPosts = [
  { title: 'Post 1', tags: ['javascript', 'web', 'frontend'] },
  { title: 'Post 2', tags: ['nodejs', 'backend', 'javascript'] },
  { title: 'Post 3', tags: ['react', 'frontend', 'web'] },
  { title: 'Post 4', tags: ['mongodb', 'database', 'backend'] },
];

const nomi1 = blogPosts.flatMap(t => t.tags);

const myset = Array.from(new Set(nomi1)).sort();

console.log(myset);



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

const reformatted = employees.map(emp => {
  return `${emp.firstName}.${emp.lastName}@${company}.com`.toLowerCase();
});

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

const categories = transactions.reduce((acc, t) => {
  if (acc.hasOwnProperty(t.category)) {
    return acc[t.category] += t.amount;
  }
  return acc[t.category] = t.amount;
  // 0 -> {} -> {Food: 25}
  // 1 -> {Food: 25, Transport: 15}
  // 2 -> {Food: 55, Transport: 15}
  // 3 -> {Food: 55, Transport: 15, Entertainment: 50}
  // 3 -> {Food: 55, Transport: 35, Entertainment: 50}
  // 3 -> {Food: 70, Transport: 35, Entertainment: 50}

}, {});

const amountMap = {
  Food: 0,
  Transport: 0,
  Entertainment: 0
}

console.log("valore iniziale del nostro amountMap", amountMap);

for (let i = 0; i < transactions.length; i++) {
  const category = transactions[i].category;
  const amount = transactions[i].amount;


  console.log("category e amount", category, amount);


  if (amountMap.hasOwnProperty(category)) {
    amountMap[category] += amount;
    console.log("se amount map ha la categoria ", category, " allora somma l amount ", amount, " al valore precedente");
  }
  else {
    amountMap[category] = amount;
    console.log("se la categoria ", category, " non e presente impostala con il valore = a ", amount);
  }
  console.log("valore corrente di amountMap: ", amountMap);
}

console.log(amountMap);

/*
const grouped = Object.groupBy(transactions, trans => trans.category);
console.log(grouped);

const totalsByCategory = transactions.reduce((acc, t) => {
  acc[t.category] = (acc[t.category] || 0) + t.amount;
  return acc;
}, {});

 console.log(totalsByCategory);
*/

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
  tasks.splice(index, 1, { newTask });
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

const user = accounts
  .filter(n => n.age > 25 && n.joinYear >= 2020 && n.active === true)
  .map(u => u.email.toLocaleLowerCase());

console.log(user);



// ex. 18
// Exercise: Find the first month where all weeks had sales above 1000
// Return the month index and verify if all subsequent months also meet this criteria

const monthlySales = [
  { month: 'Jan', weeks: [800, 1200, 900, 1100] },
  { month: 'Feb', weeks: [1100, 1200, 1500, 1300] },
  { month: 'Mar', weeks: [1200, 1100, 1400, 1300] },
  { month: 'Apr', weeks: [900, 1000, 1100, 800] },
  { month: 'May', weeks: [1100, 1200, 1300, 1400] },
];

const firstOne = monthlySales.find(item => item.weeks.every(week => week > 1000));
console.log(firstOne);

const bestWeek = monthlySales.filter(month => month.weeks.every(week => week > 1000));
console.log(bestWeek);


// ex .19
// Exercise: Calculate the total price for each order
// Apply discounts based on quantity: 5-9 items: 5%, 10+ items: 10%
// Return array of objects with orderId and finalPrice

const orders = [
  {
    orderId: 'A001',
    items: [
      { product: 'Widget', price: 10, quantity: 3 },
      { product: 'Gadget', price: 20, quantity: 2 },
    ],
  },
  {
    orderId: 'A002',
    items: [
      { product: 'Widget', price: 10, quantity: 5 },
      { product: 'Tool', price: 15, quantity: 6 },
    ],
  },
  {
    orderId: 'A003',
    items: [
      { product: 'Gadget', price: 20, quantity: 8 },
      { product: 'Tool', price: 15, quantity: 4 },
    ],
  },
];

const totalOrdersWithDiscount = orders.map(order => {
  const totalItems = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let discount = 0;
  if (totalItems >= 5) discount = 0.05;
  else if (totalItems >= 10) discount = 0.10;

  const totalPrice = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const totalAfterDiscount = totalPrice * (1 - discount);

  return {
    orderId: order.orderId,
    totalItems,
    discount: discount * 100 + '%',
    total: totalAfterDiscount
  };
});

console.log(totalOrdersWithDiscount);


// ex. 20
// Exercise: Process the log entries to find:
// 1. All unique user IDs who had errors
// 2. The most common action type
// 3. Average response time for successful requests (status 200)
// 4. List of actions sorted by timestamp (newest first)

const logs = [
  {
    userId: 101,
    action: 'login',
    status: 200,
    responseTime: 120,
    timestamp: '2024-01-10T10:00:00',
  },
  {
    userId: 102,
    action: 'upload',
    status: 500,
    responseTime: 450,
    timestamp: '2024-01-10T10:05:00',
  },
  {
    userId: 101,
    action: 'download',
    status: 200,
    responseTime: 200,
    timestamp: '2024-01-10T10:10:00',
  },
  {
    userId: 103,
    action: 'login',
    status: 200,
    responseTime: 100,
    timestamp: '2024-01-10T10:15:00',
  },
  {
    userId: 102,
    action: 'login',
    status: 401,
    responseTime: 80,
    timestamp: '2024-01-10T10:20:00',
  },
  {
    userId: 104,
    action: 'upload',
    status: 200,
    responseTime: 300,
    timestamp: '2024-01-10T10:55:00',
  },
  {
    userId: 101,
    action: 'logout',
    status: 200,
    responseTime: 50,
    timestamp: '2024-01-10T10:40:00',
  },
  {
    userId: 103,
    action: 'download',
    status: 404,
    responseTime: 150,
    timestamp: '2024-01-10T10:35:00',
  },
];

const problems = logs.filter(s => s.status !== 200);
console.log(problems);


const count = logs.reduce((acc, curr) => {
  acc[curr.action] = (acc[curr.action] || 0) + 1;
  return acc;
}, {});

const mostCommon = Object.keys(count).reduce((a, b) =>
  count[a] > count[b] ? a : b
);
console.log(count);
console.log(mostCommon);


const successfulRequest = logs.filter(s => s.status === 200);
console.log(successfulRequest);


const timestampAction = logs.sort((a, b) =>
  new Date(a.timestamp) - new Date(b.timestamp)
);
console.log(timestampAction);


// sfida live class :)

const data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    "userId": 2,
    "id": 13,
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    "userId": 2,
    "id": 14,
    "title": "voluptatem eligendi optio",
    "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    "userId": 2,
    "id": 15,
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    "userId": 2,
    "id": 16,
    "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    "userId": 2,
    "id": 17,
    "title": "fugit voluptas sed molestias voluptatem provident",
    "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
    "userId": 2,
    "id": 18,
    "title": "voluptate et itaque vero tempora molestiae",
    "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
    "userId": 2,
    "id": 19,
    "title": "adipisci placeat illum aut reiciendis qui",
    "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
    "userId": 2,
    "id": 20,
    "title": "doloribus ad provident suscipit at",
    "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    "userId": 3,
    "id": 21,
    "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
    "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
  },
  {
    "userId": 3,
    "id": 22,
    "title": "dolor sint quo a velit explicabo quia nam",
    "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    "userId": 3,
    "id": 23,
    "title": "maxime id vitae nihil numquam",
    "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
  },
  {
    "userId": 3,
    "id": 24,
    "title": "autem hic labore sunt dolores incidunt",
    "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
  },
  {
    "userId": 3,
    "id": 25,
    "title": "rem alias distinctio quo quis",
    "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
  },
  {
    "userId": 3,
    "id": 26,
    "title": "est et quae odit qui non",
    "body": "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
  },
  {
    "userId": 3,
    "id": 27,
    "title": "quasi id et eos tenetur aut quo autem",
    "body": "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
  },
  {
    "userId": 3,
    "id": 28,
    "title": "delectus ullam et corporis nulla voluptas sequi",
    "body": "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
  },
  {
    "userId": 3,
    "id": 29,
    "title": "iusto eius quod necessitatibus culpa ea",
    "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
  },
  {
    "userId": 3,
    "id": 30,
    "title": "a quo magni similique perferendis",
    "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
  },
  {
    "userId": 4,
    "id": 31,
    "title": "ullam ut quidem id aut vel consequuntur",
    "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
  },
  {
    "userId": 4,
    "id": 32,
    "title": "doloremque illum aliquid sunt",
    "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
  },
  {
    "userId": 4,
    "id": 33,
    "title": "qui explicabo molestiae dolorem",
    "body": "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
  },
  {
    "userId": 4,
    "id": 34,
    "title": "magnam ut rerum iure",
    "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
  },
  {
    "userId": 4,
    "id": 35,
    "title": "id nihil consequatur molestias animi provident",
    "body": "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
  },
  {
    "userId": 4,
    "id": 36,
    "title": "fuga nam accusamus voluptas reiciendis itaque",
    "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
  },
  {
    "userId": 4,
    "id": 37,
    "title": "provident vel ut sit ratione est",
    "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
  },
  {
    "userId": 4,
    "id": 38,
    "title": "explicabo et eos deleniti nostrum ab id repellendus",
    "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
  },
  {
    "userId": 4,
    "id": 39,
    "title": "eos dolorem iste accusantium est eaque quam",
    "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
  },
  {
    "userId": 4,
    "id": 40,
    "title": "enim quo cumque",
    "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
  },
  {
    "userId": 5,
    "id": 41,
    "title": "non est facere",
    "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
  },
  {
    "userId": 5,
    "id": 42,
    "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
    "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
  },
  {
    "userId": 5,
    "id": 43,
    "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
  },
  {
    "userId": 5,
    "id": 44,
    "title": "optio dolor molestias sit",
    "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
  },
  {
    "userId": 5,
    "id": 45,
    "title": "ut numquam possimus omnis eius suscipit laudantium iure",
    "body": "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
  },
  {
    "userId": 5,
    "id": 46,
    "title": "aut quo modi neque nostrum ducimus",
    "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
  },
  {
    "userId": 5,
    "id": 47,
    "title": "quibusdam cumque rem aut deserunt",
    "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
  },
  {
    "userId": 5,
    "id": 48,
    "title": "ut voluptatem illum ea doloribus itaque eos",
    "body": "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
  },
  {
    "userId": 5,
    "id": 49,
    "title": "laborum non sunt aut ut assumenda perspiciatis voluptas",
    "body": "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
  },
  {
    "userId": 5,
    "id": 50,
    "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
    "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
  },
  {
    "userId": 6,
    "id": 51,
    "title": "soluta aliquam aperiam consequatur illo quis voluptas",
    "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
  },
  {
    "userId": 6,
    "id": 52,
    "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
    "body": "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
  },
  {
    "userId": 6,
    "id": 53,
    "title": "ut quo aut ducimus alias",
    "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
  },
  {
    "userId": 6,
    "id": 54,
    "title": "sit asperiores ipsam eveniet odio non quia",
    "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
  },
  {
    "userId": 6,
    "id": 55,
    "title": "sit vel voluptatem et non libero",
    "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
  },
  {
    "userId": 6,
    "id": 56,
    "title": "qui et at rerum necessitatibus",
    "body": "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
  },
  {
    "userId": 6,
    "id": 57,
    "title": "sed ab est est",
    "body": "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
  },
  {
    "userId": 6,
    "id": 58,
    "title": "voluptatum itaque dolores nisi et quasi",
    "body": "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
  },
  {
    "userId": 6,
    "id": 59,
    "title": "qui commodi dolor at maiores et quis id accusantium",
    "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
  },
  {
    "userId": 6,
    "id": 60,
    "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
    "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
  },
  {
    "userId": 7,
    "id": 61,
    "title": "voluptatem doloribus consectetur est ut ducimus",
    "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
  },
  {
    "userId": 7,
    "id": 62,
    "title": "beatae enim quia vel",
    "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
  },
  {
    "userId": 7,
    "id": 63,
    "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
    "body": "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta"
  },
  {
    "userId": 7,
    "id": 64,
    "title": "et fugit quas eum in in aperiam quod",
    "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
  },
  {
    "userId": 7,
    "id": 65,
    "title": "consequatur id enim sunt et et",
    "body": "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur"
  },
  {
    "userId": 7,
    "id": 66,
    "title": "repudiandae ea animi iusto",
    "body": "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe"
  },
  {
    "userId": 7,
    "id": 67,
    "title": "aliquid eos sed fuga est maxime repellendus",
    "body": "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae"
  },
  {
    "userId": 7,
    "id": 68,
    "title": "odio quis facere architecto reiciendis optio",
    "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
  },
  {
    "userId": 7,
    "id": 69,
    "title": "fugiat quod pariatur odit minima",
    "body": "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a"
  },
  {
    "userId": 7,
    "id": 70,
    "title": "voluptatem laborum magni",
    "body": "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
  },
  {
    "userId": 8,
    "id": 71,
    "title": "et iusto veniam et illum aut fuga",
    "body": "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
  },
  {
    "userId": 8,
    "id": 72,
    "title": "sint hic doloribus consequatur eos non id",
    "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
  },
  {
    "userId": 8,
    "id": 73,
    "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
    "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
  },
  {
    "userId": 8,
    "id": 74,
    "title": "enim unde ratione doloribus quas enim ut sit sapiente",
    "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
  },
  {
    "userId": 8,
    "id": 75,
    "title": "dignissimos eum dolor ut enim et delectus in",
    "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
  },
  {
    "userId": 8,
    "id": 76,
    "title": "doloremque officiis ad et non perferendis",
    "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
  },
  {
    "userId": 8,
    "id": 77,
    "title": "necessitatibus quasi exercitationem odio",
    "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
  },
  {
    "userId": 8,
    "id": 78,
    "title": "quam voluptatibus rerum veritatis",
    "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
  },
  {
    "userId": 8,
    "id": 79,
    "title": "pariatur consequatur quia magnam autem omnis non amet",
    "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
  },
  {
    "userId": 8,
    "id": 80,
    "title": "labore in ex et explicabo corporis aut quas",
    "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
  },
  {
    "userId": 9,
    "id": 81,
    "title": "tempora rem veritatis voluptas quo dolores vero",
    "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
  },
  {
    "userId": 9,
    "id": 82,
    "title": "laudantium voluptate suscipit sunt enim enim",
    "body": "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
  },
  {
    "userId": 9,
    "id": 83,
    "title": "odit et voluptates doloribus alias odio et",
    "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
  },
  {
    "userId": 9,
    "id": 84,
    "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
    "body": "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
  },
  {
    "userId": 9,
    "id": 85,
    "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
    "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
  },
  {
    "userId": 9,
    "id": 86,
    "title": "placeat quia et porro iste",
    "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
  },
  {
    "userId": 9,
    "id": 87,
    "title": "nostrum quis quasi placeat",
    "body": "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
  },
  {
    "userId": 9,
    "id": 88,
    "title": "sapiente omnis fugit eos",
    "body": "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
  },
  {
    "userId": 9,
    "id": 89,
    "title": "sint soluta et vel magnam aut ut sed qui",
    "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
  },
  {
    "userId": 9,
    "id": 90,
    "title": "ad iusto omnis odit dolor voluptatibus",
    "body": "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
  },
  {
    "userId": 10,
    "id": 91,
    "title": "aut amet sed",
    "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
  },
  {
    "userId": 10,
    "id": 92,
    "title": "ratione ex tenetur perferendis",
    "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
  },
  {
    "userId": 10,
    "id": 93,
    "title": "beatae soluta recusandae",
    "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
  },
  {
    "userId": 10,
    "id": 94,
    "title": "qui qui voluptates illo iste minima",
    "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
  },
  {
    "userId": 10,
    "id": 95,
    "title": "id minus libero illum nam ad officiis",
    "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
  },
  {
    "userId": 10,
    "id": 96,
    "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
  },
  {
    "userId": 10,
    "id": 97,
    "title": "quas fugiat ut perspiciatis vero provident",
    "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
  },
  {
    "userId": 10,
    "id": 98,
    "title": "laboriosam dolor voluptates",
    "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
  },
  {
    "userId": 10,
    "id": 99,
    "title": "temporibus sit alias delectus eligendi possimus magni",
    "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
  },
  {
    "userId": 10,
    "id": 100,
    "title": "at nam consequatur ea labore ea harum",
    "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
  }
];

const limit = 10;
const page = 3;

const paginateData = (data, limit, page) => {
  const startIndex = limit * (page - 1);
  const endIndex = startIndex + (limit - 1);
  return [...data].slice(startIndex, endIndex + 1);
};


const result = paginateData(data, limit, page);
console.log(result);