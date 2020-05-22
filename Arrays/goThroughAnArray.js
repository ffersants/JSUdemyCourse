
arreiOne = Array();

addressWhile = 0;

while(addressWhile < 5){
    arreiOne[addressWhile] = addressWhile * 2;
    addressWhile++;
}
////////////////////////////////   U S I N G      F O R     A N D     I N D E X ////////////////////////////

for(x = 0; x!=addressWhile; x++){
    console.log(`No índice ${x} o valor é igual a ${arreiOne[x]}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////   U S I N G      F O R     I N //////////// ////////////////////////////

partyItems = ['Drinks', 'Food', 'Board Games'];
partyItems['isString'] =  'Music';
partyItems[-20] = 'Pool';

for (item in partyItems){
    console.log(`${partyItems[item]} at ${item}`)//as u can see, it goes through every single index, even when
    //itsn't a number, when it's a string index, a negative number and so on.....

// the loop ends when the value of the next item is 'undefined'
//I THINK THAT THIS ONE IS WAY BETTER THEN USING FOR(VARIABLE;COMPARING;ADD)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////   U S I N G      F O R     E A C H //////////// ////////////////////////////

maFamily = ['Sandra', 'Almir', 'Fernando', 'Felipe'];
maFamily['a'] = 'Teste';
//forEach is a array method, in this case the object is the array. forEach uses a callback function as argument,
//which means that for each array, the callback function passed as argument will run!
maFamily.forEach(function(valor, index){
    //these two arguments are necessary if you pretend to get the index and its value
    //forEach() only works for arrays w/ numbers as index!
    console.log(`${valor} \n ${index}`);
})