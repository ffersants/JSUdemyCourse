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