let a = parseInt(prompt("Enter number a"));

let b = parseInt(prompt("Enter number b"));

let smaller = Math.min(a,b);

let GCD = 1;
for(i = 1; i <= smaller; i++){
    if(a % i == 0 && b % i == 0){
        GCD = i;
    }
}

document.write(GCD);    