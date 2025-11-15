function minhaFuncao(objeto) {
    objeto.fabricante = "Toyota";
}

var meucarro = { make: "Honda", model: "civic", year: 1998 };
var x, y;

x = meucarro.make; // x recebe o valor "Honda"

minhaFuncao(meucarro);
y = meucarro.make; // y recebe o valor "Toyota"
// (a propriedade make foi alterada pela função)