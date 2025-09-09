// Funzioni dimostrative
const demoPush = () => {
  let arr = [1,2];
  arr.push(3);
  document.getElementById('outPush').textContent = `[1,2] -> push(3) -> ${JSON.stringify(arr)}`;
}

const demoPop = () => {
  let arr = [1,2,3];
  arr.pop();
  document.getElementById('outPop').textContent = `[1,2,3] -> pop() -> ${JSON.stringify(arr)}`;
}

const demoShift = () => {
  let arr = [1,2,3];
  arr.shift();
  document.getElementById('outShift').textContent = `[1,2,3] -> shift() -> ${JSON.stringify(arr)}`;
}

const demoUnshift = () => {
  let arr = [2,3];
  arr.unshift(1);
  document.getElementById('outUnshift').textContent = `[2,3] -> unshift(1) -> ${JSON.stringify(arr)}`;
}

const demoMap = () => {
  let arr = [1,2,3];
  let result = arr.map(x => x*2);
  document.getElementById('outMap').textContent = `[1,2,3] -> map(x*2) -> ${JSON.stringify(result)}`;
}

const demoFilter = () => {
  let arr = [1,2,3,4];
  let result = arr.filter(x => x % 2 === 0);
  document.getElementById('outFilter').textContent = `[1,2,3,4] -> filter(x%2===0) -> ${JSON.stringify(result)}`;
}

const demoReduce = () => {
  let arr = [1,2,3];
  let result = arr.reduce((acc,x) => acc + x, 0);
  document.getElementById('outReduce').textContent = `[1,2,3] -> reduce(somma) -> ${result}`;
}

const demoForEach = () => {
  let arr = [1,2,3];
  let result = [];
  arr.forEach(x => result.push(x*2));
  document.getElementById('outForEach').textContent = `[1,2,3] -> forEach(x*2) stampa -> ${JSON.stringify(result)}`;
}

const demoSlice = () => {
  let arr = [1,2,3,4];
  let result = arr.slice(1,3);
  document.getElementById('outSlice').textContent = `[1,2,3,4] -> slice(1,3) -> ${JSON.stringify(result)}`;
}

const demoSplice = () => {
  let arr = [1,2,3];
  arr.splice(1,1,9);
  document.getElementById('outSplice').textContent = `[1,2,3] -> splice(1,1,9) -> ${JSON.stringify(arr)}`;
}

const demoFind = () => {
  let arr = [1,2,3,4];
  let result = arr.find(x => x > 2);
  document.getElementById('outFind').textContent = `[1,2,3,4] -> find(x>2) -> ${result}`;
}

const demoFindIndex = () => {
  let arr = [1,2,3,4];
  let result = arr.findIndex(x => x > 2);
  document.getElementById('outFindIndex').textContent = `[1,2,3,4] -> findIndex(x>2) -> ${result}`;
}

const demoIncludes = () => {
  let arr = [1,2,3];
  let result = arr.includes(2);
  document.getElementById('outIncludes').textContent = `[1,2,3] -> includes(2) -> ${result}`;
}

const demoIndexOf = () => {
  let arr = [1,2,3,2];
  let result = arr.indexOf(2);
  document.getElementById('outIndexOf').textContent = `[1,2,3,2] -> indexOf(2) -> ${result}`;
}

const demoSort = () => {
  let arr = [3,1,2];
  arr.sort();
  document.getElementById('outSort').textContent = `[3,1,2] -> sort() -> ${JSON.stringify(arr)}`;
}
