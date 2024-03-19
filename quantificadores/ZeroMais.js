const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!"
const text2 = "There is a big fog in NYC"

// '*' -> zero ou mais - Expressão pode ter uma ou nenhuma ocorrência
const regex = /fogo*/gi // o conjunto 'o?' torna o 'o' opcional, e a minha pesquisa vai retornar tudo o que encontrar com e sem o O (ex: fog, fogo) 
console.log(text1.match(regex))
console.log(text2.match(regex));

