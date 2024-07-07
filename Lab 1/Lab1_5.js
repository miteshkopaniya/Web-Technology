let a = parseInt(prompt("Enter a Number to check for Palindrome"));
let ans = 0, b, z = a;
while(a > 0)
{
  b = a % 10;
  ans = ans * 10+b;
  a = parseInt(a / 10);
}

if(z == ans){
    document.write("The Number is a Palindrome Number");
}
else{
    document.write("The Number is Not a Palindrome Number");
}
