let rotaA =0, rotaB = 0, contNulos =0, contBranco =0
do{
 var op = prompt("qual onibus te transporta?\n1 rota A\n2 rota B")
 switch(op){
    case '0': contBranco++;break
    case '1':rotaA++;break;
    case '2':rotaB++;break;
 default:contNulos++;break;
 }
 }while(op!= '-1');
    alert(`Eleicao encerrada\nRota A = ${rotaA}\n Rota B = ${rotaB}\n Branco = ${contBranco}\nNulo: ${contNulos-1}\n quantidade de participantes:${contBranco+contNulos+rotaA+rotaB-1}`)

