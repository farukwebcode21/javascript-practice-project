/* const myObject = { x: 2, y: 3, z: 50, b: 60 };
const { x, b } = myObject;
console.log(b); */

const numbers = [4, 5, 6, 8, 9, 10];
const doubleIt = (numbers) => numbers * 3;
const output = [];
for (const number of numbers) {
  const result = doubleIt(number);
  output.push(result);
}
console.log(output);
