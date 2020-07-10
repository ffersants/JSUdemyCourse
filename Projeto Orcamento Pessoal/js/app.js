

ano = document.getElementById("ano");
mes = document.getElementById("mes");
dia = document.getElementById("dia");
tipo = document.getElementById("tipo");
descricao = document.getElementById("descricao");
valor = document.getElementById("valor");

function cadastrarDespesa(){
    class Despesa{
        constructor(ano, mes, dia, tipo, descricao, valor){
            this.ano = ano;
            this.mes = mes; 
            this.dia = dia;
            this.tipo = tipo;
            this.descricao = descricao;
            this.valor = valor;
        }
    }

    let despesa = new Despesa(
        ano.value,
        dia.value,
        mes.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    gravar(despesa);
}

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
    
    
    localStorage.setItem(id, JSON.stringify(d))
}



