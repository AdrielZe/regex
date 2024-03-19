const texto = 'dia diatonico diafragama media wikipedia bom_dia melodia radial'


console.log(texto.match(/\bdia\w+/gi));
console.log(texto.match(/\w+dia\b/gi));
console.log(texto.match(/\w*dia\w*/gi));
console.log(texto.match(/\bdia\b/gi));

//Borda é não \w, que é o conjunto de todos os
//caractéres de A a Z, a a z e 0 a 9... temos problemas com acentos!

const texto2 = 'dia diatônico diafragama, média wikipédia bom-dia melodia radial'

console.log(texto2.match(/\bdia\b/gi)); // essa expressão selecionaria 4 bordas, porque os acentos são registrados
//como bordas. (Pois não fazem parte do conjunto \w)

//Como resolver isso?
console.log(texto2.match(/(\S*)?dia(\S*)?\b/gi)); // Pega tudo , inclusive com as vírgulas
console.log(texto2.match(/([\wÁ-ü-]*)?dia([\wÁ-ü-]*)?/gi));