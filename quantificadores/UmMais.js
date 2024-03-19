const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!"
const text2 = "There is a big fog in NYC"

// '+' -> Um ou mais ocorrência do caráctere logo à esquerda do símbolo de '+'
const regex = /fogo+/gi //O 'o+',faz com que seja encontrado tudo o que houver junto a mais da string fogo, portanto a palavra fogoooooo será encontrada
console.log(text1.match(regex));
console.log(text2.match(regex));

const text3= "Os números: 0123456789."
console.log(text3.match(/\d/g));//Nesse exemplo, traz todos os elementos separados,um como cada elemento do array, pois estamos procurando pelo conjunto.
console.log(text3.match(/\d+/g));//Nesse exemplo, estamos procurando  todos os elementos juntos, pois o + pegará e juntará todo elemento que houver com o +

