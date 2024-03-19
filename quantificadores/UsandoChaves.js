const text= 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

//Para definir um quantificador , usa {}
console.log(text.match(/\d{1,2}/g)); //Aqui, estamos pedindo todos os dígitos com 1 ou 2 carácteres
console.log(text.match(/[0-9]{2}/g));// Aqui, estamos procurando todos os números de 0 a 9 que possuem 2 dígitos
console.log(text.match(/\d{1,}/));//Aqui, estou pedindo um ou mais dígitos

console.log(text.match(/\w{7}/g)); //Grupos de caráceteres com 7 dígitos
console.log(text.match(/[\wõ]{7,}/g));//Todos os carácteres com 7 ou mais letras, incluindo  o 'O' com tio (õ)

//No futuro...
console.log(text.match(/\b\d{1,2}\b/g));
//As bordas ajudam a pegar somente os números que eu quero, com 1 ou 2 caracteres. por exemplo, não
//sairá no meu console o 12 e 0 do 120, pois o 120 possui 3 carácteres
console.log((text.match(/\b[\wõ]{7}\b/g)));//A mesma coisa com as palavras, aqui só pegamos palavras que tem 7 letras e são rodeadas por bordas
//tirando o 'apostan' do console.log