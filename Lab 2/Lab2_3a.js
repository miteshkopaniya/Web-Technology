let a = parseInt(prompt("Enter number of line"));

let n = 1;

for(i = 1; i <= a; i++){
    for(j = 1; j <= i; j++){
        document.write(n);
        
        n++;
    }
    
    document.write("<br/>");
}