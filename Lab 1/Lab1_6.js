let a = parseInt(prompt("Enter a three-digit positive Number to check for Armstrong"));


let sum = 0;
let n = 0;
let temp = a;
while(a>0){
    n++;
    a= parseInt(a/10);
}
a = temp;
let remainder = 0;
while (a > 0) {
   
    remainder = a % 10;
    ans = ans + Math.pow(remainder,n);

    
    a = parseInt(a / 10);
}

if (ans == temp) {
    document.write("The Number is Armstrong");
}
else {
    document.write("The Number is not Armstrong");
}
