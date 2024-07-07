let a = parseInt(prompt("Enter first number."));

let b = parseInt(prompt("Enter second number."));

let o = prompt("Enter operation to perfom.");

let c=0;

if(o=='+'){
     c = a+b;
}

else if(o=='-'){
     c = a-b;
}

else if(o=='*'){
     c = a*b;
}

else if(o=='/'){
     c = a/b;
}

window.alert(c);