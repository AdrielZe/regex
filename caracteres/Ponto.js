//. como METACARACTERE
//. é um coringa, válido para uma posição.

const texto = "1,2,3,4,5,6,7,8,9,0";

console.log(texto.match(/1.2/g)); //Nesse caso, será encontrado o ''1,2'' presente na string texto, porque o '.' assume o lugar de coringa
//fazendo com que o (1 _ 2) seja encontrado, independente do caractere existente entre os dois.

console.log(texto.match(/1..2/g)); // Nesse caso, não será encontrado nada, pois no texto não há nenhuma parte em que entre o 1 e 2 hajam 2 caracteres.

console.log(texto.match(/1..,/g)); // Nesse caso, será encontrado o '1,2,' , pois há partes em que existem 2 caracteres entre uma ',' e um '1'

const notas = "8.3,7.1,8.8,10.0";

console.log(notas.match(/8../g)); // Nesse caso, será encontrado '8.3 e 8.8', porque o '.' coringa também serve para o '.' literal, pois o '.' literal não deixa
//de ser um caractere, assim como todos os outros

console.log(notas.match(/.\../g)); // Qualquer coisa dentro da string que tenha : (qualquer caractere(.) , seguido de um '.' literal(\.), seguido de qualquer caractere(.))
