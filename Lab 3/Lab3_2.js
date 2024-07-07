const prompt = require("prompt-sync")();

//let a = parseInt(prompt("Enter the size of array"));

let arr = [10,20,40,80,12,1];

let i, j;

var temp;

// for (i = 0; i < a; i++) {
//     arr[i] = parseInt(prompt("Enter the element " + (i + 1) + ": "));
// }

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Array in ascending order is :" + arr);