const texto = 'supermercado hipermercado minimercado mercado'
console.log(texto.match(/(super|hiper|mini)?mercado/g));
console.log(texto.match(/(hi|su)per|mini)?mercado/g));
//Como vemos na linha acima, é possível utilizarmos grupos aninhados.