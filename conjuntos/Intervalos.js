const text = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(text.match(/[a-z]/g)) // Os intervalos funcionam dentro de conjuntos ([ ]). Nesse caso, estamos buscando por todas as letras minúsculas entre a e z.
console.log(text.match(/[b-d]/g)) // Entre b e d.
console.log(text.match(/[2-4]/g)) //Também é possível realizar a busca por números. Nesse caso, entre 2 e 4.
console.log(text.match(/[A-Z1-3]/gi)) // Também é possível realizar a junção de 2 intervalos. Nesse caso, do A até o Z e do 1 até o 3

