// zadanie 1
const x = 'Hello';
const y = 'World';

const hello = `${x} ${y}`;
console.log(hello);

// zadanie 2
const multiply = (a = 1, b = 1) => console.log(`${a * b}`);

multiply(2, 5);
multiply(6, 6);
multiply(4, 8);
multiply(5);

// zadanie 3
const average = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log(average(1,2));
console.log(average(1,2,5,3,7));

// zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// zadanie 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstname,,lastname] = array;
console.log(`${firstname} ${lastname}`);