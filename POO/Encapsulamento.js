class Tv{
    constructor(){
        this._relacaoCanais = Array(2, 4, 5, 7, 10);
        this.volume = 3;
        this._canalAtivo = 34;    
/*
    não ES6 não há operador para determinar as propriedades de um obj
    como privado ou público, sendo assim, há uma convenção em que o 
    atributo/método que começa com "_", indica que ele é privado, e então
    não deve ser acessado diretamente, mas sim com o uso de getters e setters.
*/
    }

    //iso é uma pseudo função que, quando chamada, retorna um atributo do objeto 
    get canalAtivo(){
        return this._canalAtivo;
    }
    //
    set novoCanalAtivo(canal){
        //lógica para setar ou não o novo canal
        this._relacaoCanais.indexOf(canal) !== -1 ? this._canalAtivo = canal : this._canalAtivo = `o canal ${canal} não consta na lista`;
    }
}

tv = new Tv();
//usando método set, se o parâmetro "= 10" fosse omitido, seria chamado o método get. 10 é o parâmetro para para a pseudo variavel novoCanalAtivo()
tv.novoCanalAtivo =  2
//o log no consoloe é a chamada da pseudo variável (na vdd eh tipo uma função) q retorna o atributo canal ativo
console.log(tv.canalAtivo);
