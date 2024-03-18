const texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const regexNove = RegExp("9"); //RegExp() é o método usado em JS para a criação de Expressões regulares
console.log("Métodos da RegExp...");
console.log(regexNove.test(texto)); //Retorna um booleano indicando se o padrão dessa expressão regular está presente ou não no texto em questão
console.log(regexNove.exec(texto)); //Executa a expressão regular dentro de um texto e mostra se encontrou ou não, e em que posição está o elemento.

const regexLetras = /[a-f]/g; // Todas as letras de A à F
console.log("Métodos da string...");
console.log(texto.match(regexLetras)); //Mostra todos os matchs do texto com os do RegEx do parâmetro passado
console.log(texto.search(regexLetras)); // Mostra o índice do elemento que bate com o PRIMEIRO item do RegEx que eu passei como parâmetro
console.log(texto.replace(regexLetras, "Achei")); //Uso quando quero substituir algum elemento que encontrei no RegEx por algum outro texto.
//Nesse caso, tudo o que é "a","b","c","d" e "f", vai ser substituído pela palavra "Achei"
console.log(texto.split(regexLetras)); //Separa um texto e gera um array a partir do Split. Separa esse array com base em todos os matchs que bateram com a RegEx
