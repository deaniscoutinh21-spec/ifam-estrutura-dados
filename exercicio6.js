let quantidade = parseInt(prompt("quantos itens;"))
const vetor = []
let total = 0
for (let i = 0; i < quantidade; i++) {
    vetor[i] = parseFloat(prompt(`${i + 1}`))
    total += vetor[i]
}
document.writeln(`<b> valores dos itens iformados pelo usuario </b><br>${vetor}`)
document.writeln(`<br> valor total <br> ${total}`)