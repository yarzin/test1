var n = Number(prompt('Input your number'));
var result = fib(n);
document.write(result);

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}




