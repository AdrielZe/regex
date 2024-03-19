const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/r/gi))
console.log(text.match(/^r/gi)) // início da linha ou String
console.log(text.match(/r$/gi))// $ fim da linha/string

console.log(text.match(/^r.*r$/gi)); //Problema do dotall
