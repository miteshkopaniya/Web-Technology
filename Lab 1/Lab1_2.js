let a = parseInt(prompt("Enter a number to check for prime number"));

let i;

let flag = true;

for(i = 2; i <= a -1; i++){
    if(a % i == 0){
        flag = false;
        break;
    }
}
if(flag == true){
    alert("Number is Prime");
}
else{
    alert("Number is Not Prime");
}