const texto = "Bom\ndia"; // Em JavaScript, o '.' não lê o '\n' ( Quebra de linha ) o JS não é dotall ( o '.' não resolve em todos os casos), há linguagens
// que são dotall que possuem flags específicas para o '.' resolver todos os casos, inclusive na quebra de linha \n. O flag, quando acontece em 
//outras linguagens é identificado como (/s) ex: /exp/s, mas há possíveis para resolver isso em JS, que serão vistas mais para frente.

console.log(texto.match(/..../gi));//Isso gerará um 'null', pois como '\n' não é resolvido pelo '.', o terminal entenderá que não há nenhuma sequência de
//4 caracteres na string 'texto'
