visor = document.getElementById("console");

function somethingClicked(tipo, valor){
    if (tipo === 'numero'){
        visor.value += valor;
    }
    else if(tipo === 'operador'){
        visor.value += valor;
    }
    else if(tipo === 'igual'){
        total = eval(visor.value)
        visor.value = total;
    }
}

function del(){
    inputLength = visor.value.length;
    inputLessOne = inputLength - 1;
    visor.value = visor.value.substring(inputLength - inputLessOne)
}