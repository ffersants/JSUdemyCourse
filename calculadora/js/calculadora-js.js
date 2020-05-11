visor = document.getElementById("console");
i = 0;
caracter = 0;

document.addEventListener('keydown', getNumTyped);

function getNumTyped(event){
    num = (event.key);
    num <= 9 ? somethingClicked('numero', num) : false;
    
    if (num === '/'){
        somethingClicked('operador', num);
    } else if (num === '*'){
        somethingClicked('operador', num);
    } else if (num === '-'){
        somethingClicked('operador', num);
    } else if (num === '+'){
        somethingClicked('operador', num);
    } else if (num === '.'){
        somethingClicked('operador', num)
    } else if (num === ','){
        somethingClicked('operador', num)
    } else if (num === 'Enter'){
        somethingClicked('igual')
    } else if (num === 'Backspace'){
        del()
    }
}

function somethingClicked(tipo, valor){
    if (tipo === 'numero'){
        visor.value += valor;
        // console.log(visor.value.length);
        if (i != 0){
            visor.value = valor;
            i = 0;
        }
    }
    else if(tipo === 'operador'){
        visor.value += valor;
        if(i = 1){
            i = 0;
        }
    }
    else if(tipo === 'igual'){
        total = eval(visor.value);
        total === undefined ? visor.value = '' : visor.value = total;
        i=1;
    }
}

function del(){
    visorValue = visor.value;
    consoLength = visorValue.length;
    consoLengthLessOne = consoLength - 1;
    visorValue = visorValue.slice(0, consoLengthLessOne)
    visor.value = visorValue;
}
