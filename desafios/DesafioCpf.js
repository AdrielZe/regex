const texto = `
CPF dos aprovados:
 - 600.567.890-12
 - 765.998.345-23
 - 478.350.294-51
 - 963.634.456-10
`

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
const regex2 = /\d\d\d\.\d\d\d.\d\d\d-\d\d/g
const regex3 = /[0-9]{3}\.[0-9]{3}.[0-9]{3}.[0-9]{2}/g

console.log(texto.match(regex));
console.log(texto.match(regex2));
console.log(texto.match(regex3));