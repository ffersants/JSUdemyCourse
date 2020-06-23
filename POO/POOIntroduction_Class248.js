//class is the keyword to create a model of an entity

/* /////////////////////////// I  M  P  O  R  T  A  N  T /////////////////////////////////////
            Class declarations are not hoisted (unlike function declarations).



*/
class ContaBancaria{
    constructor(agencia, numeroConta, saldo, limite) {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.limite = limite;
    }

    depositar(valorDeDeposito){
        this.saldo += valorDeDeposito;
    }

    sacar(valorDeSaque){
        this.saldo -= valorDeSaque;
    }

    consultarSaldo(){
        return this.saldo;
    }

}

maAccount = new ContaBancaria(75967, 554553, 200, 30);//values to be attributed to the properties of the object  
//new is the keyword to create a new instance of the model
console.log(maAccount);

maAccount.depositar(40); console.log(maAccount);

maAccount.sacar(20); console.log(maAccount);

console.log(maAccount.consultarSaldo())


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
allSofas = new Array()

class SofaNovo {
    constructor(cor, lugares, reclinavel){
        this.cor = cor;
        this.lugares = lugares;
        this.reclinavel = reclinavel;

        allSofas.push(cor, lugares, reclinavel)
    }
}

sofa1 = new SofaNovo('vermelho', 5, false)
sofa2 = new SofaNovo('preto', 3, true)

console.log(allSofas)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let todasAsCadeira = []

class cadeira {
  constructor(cor, numDePernas, gira, id){
    this.cor = `Cor da cadeira: ${cor}`;
    this.numDePernas =`Número de pernas: ${numDePernas}`;
    this.gira = gira;
    this.id = id = Math.floor((Math.random()*10) + 1)
    todasAsCadeira.push(cor, numDePernas, gira, id)
  }
}

cadeiraPro = new cadeira('red', 3, false)
cadeiraGmer = new cadeira('black & white', 1, true)
console.log(cadeiraPro)
console.log(cadeiraGmer);

console.log(todasAsCadeira)

