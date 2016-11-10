var n = Number(prompt('Input your number'));
var result = fib(n);
document.write(result);

function fib(n) {
  var num;

  if (n >= 2) {
    num = fib(n - 1) + fib(n - 2);
  } else {
    num = n
  }

  return num;
}



