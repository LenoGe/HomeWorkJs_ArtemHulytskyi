const arr = [1, 2, 3, 4, 5, 6];
const reversedArr= [];

let i = arr.length - 1;
let k = 0;

while (arr[i]) {
    reversedArr [k] = arr[i];
    i--;
    k++;
    console.log (reversedArr);
}
console.log (reversedArr);