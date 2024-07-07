let a = parseInt(prompt("Enter a number to factorise"));

let i;

for(i = 1;i <= a;i++){
    if(a % i == 0){
        console.log(i);
    }
}