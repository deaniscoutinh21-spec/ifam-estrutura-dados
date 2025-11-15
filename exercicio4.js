const a = [], b = [], c = []
alert("preencha o vetor a")
for (let i = 0; i < 4; i++) {
    a[i] = parseInt(prompt())
}
alert("preencha o vetor b")
for (let i = 0; i < 4; i++) {
    b[i] = parseInt(prompt())
}
alert("preencha o vetor c")
for (let i = 0; i < 4; i++) {
    c[i] = a[i] * b[i]
}
for (let i = 0; i < 4; i++) {
    document.writeln(c[i])
}