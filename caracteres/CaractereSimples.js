const texto = "1,2,3,4,5,6,a.b c!d?e";

const regexVirgula = /,/;
console.log(texto.split(regexVirgula)); // Transforma a string em um array, e quebra os elementos desse array sempre que encontra uma vírgula.
console.log(texto.match(regexVirgula)); // Procura por onde tem somente a primeira vírgula (Pois não foi usado o flag global, que procura por todas as vírgulas).

console.log(texto.match(/,/g)); // Com o flag global, procura por todas as vírgulas.
console.log(texto.match(/A/)); // Sem o flag 'i' e 'g', procura somente primeiro A maiúsculo.
console.log(texto.match(/A/gi)); // Com o flag 'i' e 'g', procura por todos os 'A', independente se for maiúsculo ou minúsculo
console.log(texto.match(/2/g)); //Procura por todos os '2' globalmente.
console.log(texto.match(/b c!d/)); //Procura pela ocorrência de "b c!d" no texto
