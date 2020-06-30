let frutas = ['Abacaxi', 'Banana', 'Abacate', 'Morango', 'Pêssego'];

//o operador de atribuição entre dupla de chaves à sua esquerda e variável tipo array à direita, indica que é uma operação de desetruturação
let[fruta0, fruta1, fruta2, , fruta4] = frutas; 
//na medida que são passadas variáveis entre as chaves, estas vão recebendo o valor em um índice do array, em ordem crescente!!
//a quarta fruta foi atribuída a um espaço em branco, sendo assim foi omitida e passada a nenhuma variável

console.log(fruta0)
