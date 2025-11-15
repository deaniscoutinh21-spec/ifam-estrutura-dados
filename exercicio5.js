let quantidade = parseInt(prompt("quantas pessoas serao entrevistada"))
const idades = []
let soma = 0;
for (let i = 0; i < quantidade; i++) {
    idades[i] = parseInt(prompt(`digite a idade da ${i + 1} pessoa:`))
    soma += idades[i]
}
let media = soma / quantidade;
document.writeln("<b>Idades informadas:</b><br>")
for (let i = 0; i < quantidade; i++) {
    document.writeln(idades[i] + "<br>");
}
document.writeln(`<br><b>media das idades:</b> ${media.toFixed()}`)
