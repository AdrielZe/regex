const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!"
const text2 = "There is a big fog in NYC"

// '*' -> zero ou mais - Expressão pode ter uma ou nenhuma ocorrência
const regex = /fogo*/gi // mais especificamente, ele vai buscar por todas ou nenhuma ocorrência da nossa string
console.log(text1.match(regex))
console.log(text2.match(regex));

