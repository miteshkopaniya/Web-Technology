let a = parseInt(prompt("Enter the first number"));

let b = parseInt(prompt("Enter the second number"));

let i;



for(i = a; i <= b; i++){

    let flag = true;

    for(j = 2;j < i;j++){
        if(i % j  == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        document.write(j+"<br/>");
    }
}
