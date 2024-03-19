
const aplicarCor = (txt,reg,cor) => 
{ return txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)}

const files = require('./files.js')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0]
// String... 
codigo = aplicarCor(codigo,/(\".*\")/g, 'ce9178')

// palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd8f7cf')

//tipos
codigo = aplicarCor(codigo, /\b(String|int|void|boolean|char)\b/g, '1385e2')

// comentários de multiplas linhas...
codigo = aplicarCor(codigo, /\/\*[\s\S]*\*\//g, '267703')

// comentários de uma linha
codigo = aplicarCor(codigo, /\/\/.*?\n/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('codigoFonte.html', conteudoFinal)