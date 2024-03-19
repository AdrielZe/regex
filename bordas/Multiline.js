const texto = `
Léo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gim));// 'm' é a tag multiline, que
//permite que utilizemos essa expressão para capturar o texto em diferentes linhas
