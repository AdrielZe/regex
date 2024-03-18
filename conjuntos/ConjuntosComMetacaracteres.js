const text = '.$+*?-'

//Uso de conjuntos com metacaracteres
console.log(text.match(/[+.?*$]./g)) // Quando os metacaracteres estão dentro de um conjunto, não precisa utilizar o escape (\) para fazer com que
//os metacaracteres sejam literais
console.log(text.match(/[$-?]/g)) // Nesse caso, o hífen (-) não está sendo representado como o '-' literal, e sim como um metacaractere de intervalo.
//Sendo assim, temos um intervalo entre '$' e '?'


//NÃO É UM INTERVALO...
console.log(text.match(/[$\-?]/g)); // Não é, pois antes do hífen, foi colocado um escape (\)
console.log(text.match(/[-?]/g)); // Não é, pois o '-' não está no meio de dois caracteres, ele é o primeiro, portanto serve como literal pois não espaçamento
//para criar um intervalo

// Pode precisar de escape dentro do conjunto : - [ ] ^

