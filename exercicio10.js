let n = parseInt(prompt("quantas disciplinas?"))
let soma = 0
for (let i = 0; i < n; i++) {
    soma += parseFloat(prompt(`Nota da disciplina ${i + 1}`))
}
let media = soma / n
if (media >= 6) {
    document.writeln(`Media = ${media.toFixed(2)}<br>.Aprovado`)
} else {
    document.writeln(`Media = ${media.toFixed(2)}<br>Reprovado`)
}
