/*  SEM ABSTRAÇÃO

class Cachorro{
    constructor(){
        this.cor = 'preto'
        this.tamanho = 5
    }

    correr(){
        console.log("correr")
    }

    latir(){
        console.log("latir")
    }
}

class Passaro{
    constructor(){
        this.cor = 'branco'
        this.tamanho = 5
    }

    voar(){
        console.log("voar")
    }
}

auau = new Cachorro(); console.log(auau)
bentivi = new Passaro(); console.log(bentivi)
    //SEM ABSTRAÇÃO
*/

//COM ABSTRACAO

//classe pai
class Animal{
    constructor(){
        this.cor = 'preto';
        this.tamanho = 15;
    }
}

//classe filha da classe pai Animal
class Cachorro extends Animal{ //extends indica que a class y é filha da class x
    constructor(){
        super()//oferece acesso para o método construtor da classe pai. O super deve ficar sempre antes the qualquer this
        this.corDaOrelha = 'branco e marrom'
    }

    latir(){
        console.log("AUAUAUUU")
    }
}

//classe filha da classe pai Animal
class Passaro extends Animal{
    constructor(tamanhoDoBico){//aqui entra o argumento para o parâmetro tamanhoDoBico
        super()
        this.tamanhoDoBico = tamanhoDoBico;
    }

    voar(){
        console.log("VRRUUUMMMM")
    }
}

class Papagaio extends Passaro{
    
    constructor(){
        super('pequeno')//o parâmetro em super, é passado para o construtor na classe pai
        this.nome = 'Gilberto'
    }
    
    fala(){
        console.log("Dá o pé louro")
    }
    
}

gilberto = new Papagaio(); console.log(gilberto)
//Atributos cor e tamanho herdados da classe Passaro, que por sua ver herda da classe Animal
//Atributo tamanhoDoBico herdado da classe Passaro