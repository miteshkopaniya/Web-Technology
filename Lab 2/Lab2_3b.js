let n = parseInt(prompt("Enter number of line"));

for (let i = 1; i <= n; i++) {
  
  for (let j = 1; j <= n - i; j++) {
    document.write("&nbsp");
  }
  
  for (let k = 0; k < i - 1; k++) {
    document.write("*");
  }
  document.write("<br/>");
}
