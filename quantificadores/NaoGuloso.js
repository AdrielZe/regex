const text = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//Quantificadores SÃO gulosos ( greedy )...
console.log(text.match(/<div>.+<\/div>/g));//Aqui , o .+ depois da div faz com que busquemos todos os carácteres depois da div, além dela mesmo. pois o . é coringa
console.log(text.match(/<div>.*<\/div>/g));
console.log(text.match(/<div>.{0,100}<\/div>/g));
//Esses 3 selecionam o texto inteiro, portanto são gulosos


//Agora, os quantificadores NÃO gulosos (lazy)
console.log(text.match(/<div>.+?<\/div>/g));
console.log(text.match(/<div>.*?<\/div>/g));
console.log(text.match(/<div>.{0,100}?<\/div>/g));

// Este é um padrão que procura por um ou mais caracteres (+) de qualquer tipo (.), exceto uma nova linha, de forma não gananciosa (?). O ponto (.) casa com qualquer caractere, exceto uma nova linha. O + indica que o caractere anterior (.) 
// deve aparecer uma ou mais vezes. O ? após o + torna a correspondência "não gananciosa", o que significa que tentará encontrar a correspondência mais curta possível. Isso evita que a correspondência vá além do próximo </div>.
// O '?' sempre torna a expressão não gulosa,  o que faz com que a expressão pegue a menor ocorrência possível. Nesse caso, as divs serão separadas, uma em cada elemento doa array

