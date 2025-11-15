let itens = parseInt(prompt("itens"))
var valor = 0, produto = 0
document.writeln(`<b>mercadinho da deanis</b><br>`)
for(let i = 0; i < itens ; i++ ){ 
    produto = parseFloat(prompt(`preço do itens ${i}`))
    valor+=produto
    document.writeln(`item ${i} = R$ ${produto}<br>`)
}
    document.writeln(`valor da compra R$ ${valor}`)

