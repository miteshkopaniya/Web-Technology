var a = parseInt(prompt("Enter a Number for fibonacci series."));

let i, n1 = 0, n2 = 1 , nexterm;

for(i = 0; i <= a;i++){
    document.write(n1);
    nexterm = n1 + n2;
    n1 = n2;
    n2 = nexterm;
}