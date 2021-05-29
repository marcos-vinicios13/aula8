
 
 let SaldoInicial=("SaldoInicial")
let ValorDaCompra=("ValorDaCompra")

SaldoInicial= parseFloat(prompt("digite seu saldo"));
        ValorDaCompra = parseFloat(prompt("digite o vaor da sua compra"));

        if(ValorDaCompra <= SaldoInicial){
            SaldoFinal = SaldoInicial - ValorDaCompra;
            alert ("A compra foi efetuada com sucesso! \nO saldo final é: "+SaldoFinal);
        }

        else {
            alert ("Saldo Insuficiente!");

        }