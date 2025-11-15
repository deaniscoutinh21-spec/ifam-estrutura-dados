const n = parseInt(prompt("digite um numero"))
let resultado = ""
for (let i = 0; i <= 10; i++) {
    resultado += `${n} x ${i} = ${n * i} \n`
}
alert(resultado)