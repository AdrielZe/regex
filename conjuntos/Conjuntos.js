const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//Para se definir uma classe ou um conjunto de caracteres, se usa []

const regexPares = /[02468]/g // Ao se montar um conjunto, é como se estivéssemos realizando uma busca OU. Nesse caso, ou 0, ou 2, ou 4, ou 6, ou 8
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g; // Realiza a busca por na ou nã 
console.log(texto2.match(regexComESemAcento));
