//No início...

//Um byte (8 bits) - 256 caracteres
//Símbolos, Pontuação, A-Z, a-z, 0-9

//Dois bytes (16 bits) - 65500+ caracteres
//+Símbolos, +Pontuação, A-Z, a-z, 0-9

//O nosso idioma nos oferece um ponto de dificuldade ao usar o Regex: O idioma brasileiro possui acentuação, e o inglês não. Isso faz com que
//o processo de busca através do Regex, em algumas situações, nos cause dificuldade, e precisamos encontrar diferentes formas para resolver essas situações
//Para isso que serve o Unicode:

//Unicode - 
//Quantidade de Bytes Variável - Expansível
//Suporta mais de 1 milhão de caractéres
//Atualmente tem mais de 100.000 caractéres atribuídos

//https://unicode-table.com/pt/
//u0BF5
//U+0B87
//U+058D

//Exemplo:

const texto = 'a֍இ௵';  //Colocar o código dos caractéres disponíveis do Unicode para realizar a busca
console.log(texto.match(/\u058D\u0B87\u0BF5/g)) ;