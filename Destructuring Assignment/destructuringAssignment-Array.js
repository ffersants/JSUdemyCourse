let frutas = ['Abacaxi', 'Banana', 'Abacate', 'Morango', 'Pêssego'];

//o operador de atribuição entre dupla de chaves à sua esquerda e variável tipo array à direita, indica que é uma operação de desetruturação
let[fruta0, fruta1, fruta2, , fruta4, fruta5 = 'Laranja'] = frutas; 
//na medida que são passadas variáveis entre as chaves, estas vão recebendo o valor em um índice do array, em ordem crescente!!
//a quarta fruta foi atribuída a um espaço em branco, sendo assim foi omitida e passada a nenhuma variável



console.log(fruta1)

let numeros = [0, 1, 2, 3, 4]

function showNumeros([num0, num1] = numeros){
   console.log(num0, num1)
}

showNumeros()


function showNumeros2({c, d} = numeros){
   console.log(c, d)
}

showNumeros2()