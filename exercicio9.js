let n = parseInt(prompt("quantos numeros"))
const vetor = []
let soma = 0
for (let i = 0; i < n; i++) {
    vetor[i] = parseInt(prompt(`numero ${i + 1}`))
    {
        if (vetor[i] % 2 !== 0)
            soma += vetor[i]
    }
}
document.writeln(`numeros informados; ${vetor}<br>`)
document.writeln(`soma das posicoes impares: ${soma}`)