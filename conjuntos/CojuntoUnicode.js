const text = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(text.match(/[À-ü]/g))//A partir da tabela Unicode, pegando todos os carácteres com acento entre o À e o ü
//Intervalo muito bom para selecionar palavras com acentos.
