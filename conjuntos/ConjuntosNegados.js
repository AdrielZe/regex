const text = '1,2,3,a.b c!d?e[f'

console.log(text.match(/\D/g));
console.log(text.match(/[^0-9]/g));
console.log(text.match(/[^\d!\?[\s,\.]/g));

const text2 = '1: !"#$%&\'()*+,-./ 2: :;<==>?@' //ordem com base na tabela ASCII
console.log(text2.match(/[^!-/:-@\s]/g)); // aqui , estamos excluindo do '!' até o '/', como visto acima, excluímos um conjunto inteiro de símbolos, assim como
// estamos excluindo do ':' até o '@', deixando sobrar só os números para o nosso output.

