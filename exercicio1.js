let numeros = parseInt(prompt("quantos numeros"))
const vetor = []
for (let i = 0; i < numeros; i++) {
    vetor[i] = prompt("")
}
document.writeln(`<b>numeros informados pelo usuario</b><br>`)
for (let i = 0; i < numeros; i++) {
    document.writeln(`${vetor[i]}`)
}