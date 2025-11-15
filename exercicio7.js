let numeros = parseInt(prompt("quantos numeros"))
const vetor = []
var soma = 0
for (let i = 0; i < numeros; i++) {
    vetor[i] = parseInt(prompt(""))
    soma += vetor[i]
}
if (soma > 100)
    alert(soma)