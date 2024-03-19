const texto = '<b>Destaque</><strong>Forte</strong><div>Conteudo</div>'

console.log(texto.match(/<(\w+)>.*<\/\1>/g));

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi));


//O valor caputrado por um grupo pode ser acessado ao usar o ''\1'' , que é usado para
//evitar a reescrita do mesmo grupo.

//Existe uma síntaxe que podemos utilizar para o valor do grupo não ser capturado:
console.log(texto2.match(/(?:lenta)(mente).*\1/gi));

//?: faz com que o grupo não seja capturado.

console.log(texto2.match(/(lenta)(mente)?/gi));
console.log(texto2.replace(/(lenta)(mente)/gi,'$2'));
//$2 Substitui pelo segundo retrovisor.
//Os retrovisores são como se fossem variáveis.

//JavaScript suporta mais do que 9 retrovisores.



