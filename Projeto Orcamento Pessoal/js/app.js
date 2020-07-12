
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
                    } 
               
            }
           return true;
           
        }
    }//end class Despesa

   
    class Bd {
        constructor(){
           let id = localStorage.getItem('id');

           if (id === null){
               localStorage.setItem('id', 0)
           }
        }    
        
        getProximoId(){
            let proximoId = localStorage.getItem('id');//no primeiro registro retorna null
            return parseInt(proximoId) + 1;
        }

        gravar(d){
            let id = this.getProximoId()
            localStorage.setItem('id', id)
            localStorage.setItem(id, JSON.stringify(d))
        }

        recuperarTodosRegistros(){
           let despesas = Array()
        
            //recupera todas as despesas em localstorage
            let todosRegistros = localStorage.getItem('id')
            
            for(let id = 1; id <= todosRegistros; id++){
               let registro = JSON.parse(localStorage.getItem(id))
                
                if(registro === null){
                //continue, pula pra próxima iteração sem realizar o push
                //do registro de testou verdadeir para null
                    continue
                }
                
            despesas.push(registro);

            return despesas
            }
        
        }

    }//ends class BD
    let bd = new Bd()
 

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


    if(despesa.validarDados() === true){
        
        bd.gravar(despesa)//assim já se tem logo de ínicio um registro com id 0
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

function carregaListaDespesas(){
    despesas = Array();
    
    despesas = bd.recuperarTodosRegistros();
    console.log(despesas);
}