let n = parseInt(prompt("Enter a number"));

let x = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

let y = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

let z = ['', '', "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

let result = '';

if (n == null || n == 0) {
    alert("No. is invalid");
}

if (n >= 100) {
    result = result + x[parseInt(n / 100)] + 'Hundred';
    n = n % 100;
}

if (n >= 20) {
    result = result + z[parseInt(n / 10)] + '';
    n = n % 10;
}

if (n >= 10) {
    result = result + y[parseInt(n / 10)] + '';
    n = 0;
}

if (n >= 0) {
    result = result + x[n] + '';
}

document.write(result)
