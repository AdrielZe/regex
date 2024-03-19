const text = 'João é calmo, mas no trânsito fica nervoso.'
console.log(text.match(/[\wÀ-ü]+/gi));

//Positive lookahead
console.log(text.match(/[\wÀ-ü]+(?=,)/gi));
//(?=,) pega a palavra que tem uma vírgula na frente
//( tudo o que tem depois do ?= pode ser procurado)
//ex: (?= oi, tudo bem?)

//Negative lookahead

console.log(text.match(/[\wÀ-ü]+\b(?!,)/gi));
//(?!,) pega todas as palavras que não têm vírgula na frente
//(Tudo o que tem depois do ?! é o que eu não quero que tenha na frente da palavra)
//ex: (?! texto que nao quero)

console.log(text.match(/[\wÀ-ü]+[\s|\.](?!,)/gi));