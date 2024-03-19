const texto = `
O e-mail dos convidados são:
 - fulano@cod3r.com.br
 - xico@gmail.com
 - lama201@hotmail.com.br
 - nino2910@hotmail.com
 - otavio.silveira@hotmail.com
 - kmwn18_02@gmail.com
 - juliano.ramos@yahoo.com
`
const regex = /\w+(\D\w+)?@\w+\D\w+\D\w+/g

console.log(texto.match(regex));