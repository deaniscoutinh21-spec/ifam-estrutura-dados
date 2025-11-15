var vetor = new Array();
vetor[0] = "ola";
vetor[98] = "estudo";
vetor[99] = "ifam";

/*alert(vetor[vetor.length-1])*/

vetor.shift()
vetor.forEach(function (item, indice, array) {
    alert(item, indice);
});