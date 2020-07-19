
document.addEventListener("keydown", () => {
    event.key === "Enter" ? cadastrarDespesa() : false;
})

// search = document.getElementById("search");
// search.addEventListener("click", pesquisar())


    class Despesa{
        constructor(ano, mes, dia, tipo, descricao, valor){
            this.ano = ano;
            this.mes = mes; 
            this.dia = dia;
            this.tipo = tipo;
            this.descricao = descricao
            this.valor = valor;
            // this.data = `${this.dia}/${this.mes}/${this.ano}`
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
                
               //se um registro tiver sido apagado e estiver um salto nos ids?
               //tipo 3, 4, 6, 7, onde o registro 5 foi excluído? 
                if(registro === null){
                //continue, pula pra próxima iteração sem realizar o push
                //do registro que testou verdadeiro para null
                    continue
                }
                
            despesas.push(registro);
            }      
            
            return despesas
        }

        pesquisar(despesaPesquisada) {
            let todasDespesas = this.recuperarTodosRegistros();
            let despesasFiltradas = Array();

            //despesas filtradas recebe todas as despesas cadastradas, e atualiza a si mesma,
            //a cada vez que entra em uma condição
            despesasFiltradas = todasDespesas;
   
            //filtra ano
            if (despesaPesquisada.ano != ''){
                despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesaPesquisada.ano);            
            }   

            //filtra mês
            if ( despesaPesquisada.mes != '' ){
                despesasFiltradas = despesasFiltradas.filter( d => d.mes == despesaPesquisada.mes );
            }

            //filtra tipo
            console.log(despesaPesquisada)
            if ( despesaPesquisada.tipo != '' ){
                despesasFiltradas = despesasFiltradas.filter( f => f.tipo == despesaPesquisada.tipo );
            }

            //filtra dia
            if ( despesaPesquisada.dia != '' ){
                despesasFiltradas = despesasFiltradas.filter( d => d.dia == despesaPesquisada.dia );
            }

            //filtra descrição
            if ( despesaPesquisada.descricao != '' ){
                despesasFiltradas = despesasFiltradas.filter( d => d.descricao == despesaPesquisada.descricao );
            }

            //filtra valor
            if ( despesaPesquisada.valor != '' ){
                despesasFiltradas = despesasFiltradas.filter( d => d.valor == despesaPesquisada.valor );
            }
            

            return despesasFiltradas

        }
        
    }//ends class BD
    let bd = new Bd()
 

function cadastrarDespesa() {
    var titulo = document.getElementById("erroGravacaoModalLabel");
    var texto = document.getElementById("modal_conteudo");
    var butaum = document.getElementById("modal_btn");
    var seila1 = document.getElementById("modal_titulo_div");
    
    var ano = document.getElementById("ano");
    var mes = document.getElementById("mes");
    var dia = document.getElementById("dia");
    var tipo = document.getElementById("tipo");
    var tipoInText = tipo.options[tipo.selectedIndex].text;

    descricao = document.getElementById("descricao");
    valor = document.getElementById("valor");

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipoInText,
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

        modalBtn = document.getElementById("modal_btn")
        modalBtn.addEventListener("click", () => {
            ano.value = "";
            dia.value = "";
            mes.value = "";
            descricao.value = "";
            valor.value = "";
            tipo.value = "";    
        })
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
   let despesas = Array();
   despesas = bd.recuperarTodosRegistros();
    //seleciona tbody
    listaDespesas = document.getElementById("lista-despesas");
    
    despesas.forEach( function(d){
        //cria linha <tr>
        linha = listaDespesas.insertRow();
        
        d.dia < 10 ? d.dia = '0' + d.dia : false;
        d.mes < 10 ? d.mes = '0' + d.mes : false;

        showData = `${d.dia}/${d.mes}/${d.ano}`
        //cria coluna <td>
        linha.insertCell(0).textContent = showData;
        linha.insertCell(1).textContent = d.tipo;
        linha.insertCell(2).textContent = d.descricao;
        linha.insertCell(3).textContent = d.valor;
    })
}

function pesquisar(){

    let descricao = document.getElementById("descricao");
    let valor = document.getElementById("valor");
    let ano = document.getElementById("ano");
    let mes = document.getElementById("mes");
    let dia = document.getElementById("dia");
    let tipo = document.getElementById("tipo");
    let tipoInText = tipo.options[tipo.selectedIndex].text;
    tipoInText === "Tipo" ? tipoInText = '' : tipoInText = tipoInText;

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipoInText,
        descricao.value,
        valor.value
    )

    var despesasFiltradas = bd.pesquisar(despesa);
        

        
    //pega o número total de linhas no corpo da tabela
    //CADA LINHA É UM REGISTRO
    let listaDespesas = document.getElementById("lista-despesas");
    todasTR = listaDespesas.childNodes;
/* dentro de node list nós temos vários itens "tr", que correspondem ao número de registros
em localstorage que estão apresentados na tabela. No entanto, se temos 5 "tr's" o console.log de todasTR,
que apresenta o números de elementos filhos o elemento tbody com id "lista-despesas", veremos que temos
6 elementos filhos, sendo 5 "tr's" e um elemento "text" que fica no índice 0. 
Este elemento "text", se for apagado, causa um erro no console e faz o interpretador JS sair do código,
sendo assim, o parâmetro a ser utilizado para apagar as linhas, está uma unidade abaixo.
Então o loop para quando o parâmetro contador for igual a zero, sendo que em todasTR ainda teremos
uma unidade acima que corresponde ao index de "text"
*/
    for ( contador = todasTR.length - 1; contador != 0; contador--){
            listaDespesas.deleteRow(todasTR)//deleta node por node abaixo de lista-despesas
    }

    despesasFiltradas.forEach( despesa => {
           newLine = listaDespesas.insertRow();

           //data = formatar data em DD/MM/AAAA
           despesa.dia < 10 ? despesa.dia = '0' + despesa.dia : false 
           despesa.mes < 10 ? despesa.mes = '0' + despesa.mes : false 
           data = `${despesa.dia}/${despesa.mes}/${despesa.ano}`     
           
           newLine.insertCell(0).textContent = data;
           newLine.insertCell(1).textContent = despesa.tipo;
           newLine.insertCell(2).textContent = despesa.descricao;
           newLine.insertCell(3).textContent = despesa.valor;
        }    
    )
    
}

// function pesquisar () {
//     //DELETA REGISTROS ANTES CARREGADOS
//     //<tbody id="lista-despesas">
//     var listaDespesas = document.getElementById("lista-despesas");
  
//     //pega o número total de linhas no corpo da tabela
//     //CADA LINHA É UM REGISTRO
//     todasTR = listaDespesas.childNodes;
//     todasTRLength = todasTR.length

//     for ( contador = todasTRLength - 1; contador != 0; contador--){
//             listaDespesas.deleteRow(todasTR)//deleta node por node abaixo de lista-despesas
//             console.log(todasTR.length)
//     }


//         let tipoInText = tipo.options[tipo.selectedIndex].text;
//         let todosRegistros = localStorage.getItem('id');
        
        
//         for( let item = 1; item <= todosRegistros; item++){
//             //console.log(localStorage.getItem(item));
//             let registro = JSON.parse(localStorage.getItem(item));
//             console.log(registro)
//             if (registro.tipo === tipoInText){
    
//                 newLine = listaDespesas.insertRow();
                
//                 registro.dia < 10 ? registro.dia = '0' + registro.dia : false;
//                 registro.mes < 10 ? registro.mes = '0' + registro.mes : false;
    
//                 data = `${registro.dia}/${registro.mes}/${registro.ano}`
    
                
//                 newLine.insertCell(0).textContent = data;
//                 newLine.insertCell(1).textContent = registro.tipo;
//                 newLine.insertCell(2).textContent = registro.descricao;
//                 newLine.insertCell(3).textContent = registro.valor;
//             }
//         }
// }
    
  

