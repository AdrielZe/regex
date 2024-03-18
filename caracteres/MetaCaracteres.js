// . ? * + - ^ $ | [ ] { } ( ) \ :
const texto = "1,2,3,4,5,6,a.b c!d?e";
const regexPonto = /\./g; //Utiliza -se a '\' (contrabarra, nesse caso, chamado de escape) para indicar quando queremos utilizar o metacaractere ( nesse exemplo, o '.'), de forma literal, como texto
//e não exercendo a sua função de metacaractere
console.log(texto.split(regexPonto));

const regexSimbolos = /,|\.|\?|!| /g; //Uso do escape para usar os caracteres '.' e '?' na sua forma literal.
console.log(texto.split(regexSimbolos));
