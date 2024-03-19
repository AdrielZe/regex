const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/^r.*r$/gi)); //Problema do dotall
console.log(text.match(/^r[\s\S]*r$/gi));//Resolução do problema do dotall.
