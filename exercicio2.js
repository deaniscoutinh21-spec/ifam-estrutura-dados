var n = parseInt(prompt("quantos numeros"))
const sequencia = []
for (let i = 0; i < n; i++) {
    sequencia[i] = prompt("")
}
document.writeln("<b>ordem reversa</b><br>")
for (let i = 0; i < n; i++) {
    document.writeln(sequencia[n - 1 - i])
}

