let n = parseInt(prompt("quantos numeros"))
const numeros = []
var pares = 0
for (let i = 0; i < n; i++) {
    numeros[i] = parseInt(prompt())
    if (numeros[i] % 2 == 0)
        pares++
}
document.writeln(`<b>Numeros informados</b><b>`)
for (let i = 0; i < n; i++) {
    document.writeln(`<br>${numeros[i]}`)
}
document.writeln(`<br>Quantidade de pares informados:<br> ${pares}`)