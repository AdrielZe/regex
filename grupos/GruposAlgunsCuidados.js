const texto = 'Pedrinho (filho do Pedro Silva) é doutro do ABC!'

console.log(texto.match(/[(abc)]/gi));
//Dentro de um conjunto, um grupo "()" funciona
//como um caractere normal, e não como agrupamento

console.log(texto.match(/([abc])/gi));
//Por outro lado, um conjunto funciona dentro de um grupo
