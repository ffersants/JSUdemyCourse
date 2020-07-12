
document.addEventListener("keydown", () => {
    event.key === "Enter" ? cadastrarDespesa() : false;
})


    class Despesa{
        constructor(ano, mes, dia, tipo, descricao, valor){
            this.ano = ano;
            this.mes = mes; 
            this.dia = dia;
            this.tipo = tipo;
            this.descricao = descricao
            this.valor = valor;
        }
        
        validarDados() {
            //loop in all instances of the object
            for (let atributo in this){
                //this[atributo] === object.instance
                if (this[atributo] === undefined ||
                    this[atributo] === '' ||
                    this[atributo] === null) {
                        return false;
                    } else{
                        return true
                    }
                
            }
        }
    }//end class

   
function gravar(d){
    //Quando passado um nome de chave e valor, irá adicionar essa chave para o armazenamento,
    //ou atualizar o valor dessa chave, se já existir.
    //neste caso um valor está sobrepondo o outro por conta da chave ser a mesma
    //localStorage.setItem('despesa', JSON.stringify(d))//.setItem('chave', valor)
    let id = '';
    for ( i=0; i<9; i++ ){
        letters ='abcdefghijklmnopqrstuvwxyz'; 
        num = Math.floor(Math.random() * 9) + 1;
        id += num;
        id += letters[num];
    } 
    
                        //from Object to JSON
    localStorage.setItem(id, JSON.stringify(d))
                        //JSON.parse() 
                        //from JSON to Object

}


function cadastrarDespesa() {
    var titulo = document.getElementById("erroGravacaoModalLabel");
    var texto = document.getElementById("modal_conteudo");
    var butaum = document.getElementById("modal_btn");
    var seila1 = document.getElementById("modal_titulo_div");

    ano = document.getElementById("ano");
    mes = document.getElementById("mes");
    dia = document.getElementById("dia");
    tipo = document.getElementById("tipo");
    descricao = document.getElementById("descricao");
    valor = document.getElementById("valor");

    let despesa = new Despesa(
        ano.value,
        dia.value,
        mes.value,
        tipo.value,
        descricao.value,
        valor.value
    )


    if(despesa.validarDados()){
        
        gravar(despesa)
        titulo.textContent = "Registro inserido com sucesso";
        texto.textContent = "Despesa cadastrada!";
    
        butaum.textContent = "Ok";
        butaum.className = "btn btn-success";
    
        seila1.className = "modal-header text-success";
        $("#sucessoGravacao").modal("show");
    } 
    
    else{
        console.log("opa, tá errado")
        titulo.textContent = "Falha na gravação";        

        texto.textContent = "Algum dos campos não foi preenchido devidamente."
    
        butaum.textContent = "Voltar e corrigir";
        butaum.className = "btn btn-danger"
       
        seila1.className = "modal-header text-danger";

        $("#sucessoGravacao").modal("show");    
    }
}




