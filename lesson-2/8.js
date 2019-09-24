const array = [1, 2, 3, 4, 5, 6];
var sum = 0;
    for(var i = 3; i < array.length; i++){
        if (array [i] % 2 === 0) {
        sum += array[i];
        }
    }
console.log(sum);