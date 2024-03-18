// g - global
// i - ignore case

const texto = "Carlos assinou o abaixo-assinado";
console.log(texto.match(/C|ab/)); //Nesse exemplo, a pesquisa para no C, pois não foi inserida a flag global.
console.log(texto.match(/c|ab/i)); // Nesse exemplo, mesmo com o "c" sendo minúsculo, a pesquisa encontra o "C" maiúsculo, pois foi passada a flag "i", que não diferencia letras maiúsculas e nem minúsculas.
console.log(texto.match(/ab|c/gi)); //Nesse exemplo, a pesquisa não para até que todos os "ab" ou "c" sejam encontrados, e não diferencia maiúsucla de minúscula,
//pois utilizamos as flags "g" e "i"
