quarto = {
    armario: 'azul',
    mesa: 'branca',
    gaveta: {
        roupas: 'coloridas',
        meias: 'pretas',
    }
}
//lidando com arrays usa-se [], com objetos literais {}
 let {armario} = quarto; //or
 console.log(armario);

 let {gaveta: { meias }} = quarto;
console.log(meias)


 //o valor da chave mesa : passado para a variável parede
 let {mesa : parede} = quarto;
 console.log(parede);

 //declarar novo atributo do objeto e atribuir um valor
 let {calcados} = quarto;
 let {bancada = 'cinza'} = quarto;
 console.log(bancada)

 //uma vez que um atributo retorna undefined, ele pode ser atribuído a um valor
 //mas se ele já tiver uma valor e tentarmos atribuir outro valor a ele,
 //este novo valor não sobrepõe o já declarado

 let numeros = {
     a: 0,
     b: 1,
     c: 2,
     d: 3
 }

 function showNumeros({a: num1, b: num2} = numeros){
    console.log(num1, num2)
 }

 showNumeros()

 
 function showNumeros2({c, d} = numeros){
    console.log(c, d)
 }

 showNumeros2()