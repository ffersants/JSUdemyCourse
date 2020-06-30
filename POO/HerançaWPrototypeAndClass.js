
////////////////////////////////////USING PROTOTYPE/////////////////////

function Son (sonsName, sonsAge){
    this.sonsName = sonsName;
    this.sonsAge = sonsAge; 
}

function Dad (dadsName, dadsAge){
    this.dadsName = dadsName;
    this.dadsAge = dadsAge;
}

function Mom (momsName, momsAge){
    this.momsName = momsName;
    this.momsAge = momsAge;
}

sandra = new Mom("Sandra", 40);

Dad.prototype = sandra;

almir = new Dad("Almir", 42)

Son.prototype = almir

fernando = new Son("Fernando", 19);

console.log(fernando.momsAge)


////////////////////////////////////USING PROTOTYPE IN LITERAL OBJECTS/////////////////////

function animal(patas, cor) {
    return{
        patas: 4,
        cor: 'preto'
    }
}

function cachorro(late){
    return{
        __proto__: a,
       message: 'late sim'
    }
}

doggie = new cachorro()
console.log(doggie.cor)

////////////////////////////////////USING CLASS CONSTRUCTOR/////////////////////

class Dad1{
    constructor(dadsName1, dadsAge1){
        this.dadsName1 = dadsName1;
        this.dadsAge1 = dadsAge1;
    }
}

class Mom1 extends Dad1{
    constructor(momsName1, momsAge1, dadsName1, dadsAge1){
        super(dadsName1, dadsAge1)
        this.momsName1 = momsName1;
        this.momsAge1 = momsAge1;
    }
}1

class Son1 extends Mom1{
    constructor(sonsName1, sonsAge1, momsName1, momsAge1, dadsName1, dadsAge1){
        super(momsName1, momsAge1, dadsName1, dadsAge1)
        this.sonsName1 = sonsName1;
        this.sonsAge1 = sonsAge1; 
    }
}

fernando = new Son1("Fernando", 19, "Sandra", 40, "Almir", 48)

console.log(fernando)







