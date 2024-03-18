const text = `1,2,3,4,5,6,a.b c!d?e   - 
f_g`

console.log(text.match(/\d/g)) // '\d' [0-9] representa o conjunto de todos os dígitos de 0 a 9. Portanto, estamos buscando todos os números presentes na string text
console.log(text.match(/\D/g));// '\D' [^0-9] representa tudo aquilo que NÃO é número (',', letras , espaços em branco, símbolos etc);
console.log(text.match(/\w/g)) // '\w' representa todos os caracteres [a-zA-Z0-9_] (letras, hifen)
console.log(text.match(/\W/g));// Não caractéres [^a-zA-Z0-9_] (vírgulas,ponto,espaço, exclamção, tab,nova linha)
console.log(text.match(/\s/g)); // espaços (\r\s\t\n\f)
console.log(text.match(/\S/g)); // Tudo aquilo que não é espaço em branco ([^\r\s\t\n\f])

// \b \B