////////////////////////SPREAD ESPALHANDO///////////////////////////

houseParts = 'Balcony, Attic, Deck, Roof';

console.log(...houseParts)//neste caso a string vem toda dividida e cada caracter é um índice em um array macro

a = [...houseParts]
console.log(a)

////////////////////REST JUNTANDO//////////////////

function multiplica(multiplicador, ...multiplicando){
    resultado = 0;
    multiplicando.forEach(num =>resultado = multiplicador * num)
    console.log(resultado)
}

multiplica(5,1,2,3,4,5)
//neste caso o primeiro argumento passado na função é encaminhado para o parâmetro "multiplicador",
//enquanto os de mais integram a array "multiplicando", que é envolvida no loop forEach para resgate e tratamento
//do valor armazenado em cada índice