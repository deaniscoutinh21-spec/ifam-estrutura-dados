var fatorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
let n = parseInt(prompt("numero"))
alert(`${n}! = ${fatorial(n)}`);