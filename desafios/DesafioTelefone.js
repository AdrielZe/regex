const text = `
Lista telefônica:
 - (11) 98756-1212
 - 98765-4321
 -(23) 98472-4918
 - (4)98472-4918
`

const regex = /(\s*\(\d{0,2}\)\s*)?\d{5}-\d{4}/g
console.log(text.match(regex));