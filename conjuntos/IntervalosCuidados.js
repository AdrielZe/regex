const text = 'ABC - [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g)) // Não define um range, pois não está dentro de um conjunto

console.log(text.match(/[A-z]/g)) // Intervalos usam a ordem da tabela UNICODE. Entre o A maiúsculo e o z minúsculo, passamos por todo conjunto de
//A até Z, e depois de a até z, e também passamos por símbolos no meio, portanto, no nosso output, teremos colchetes e letras maiúsculas e minúsculas.

