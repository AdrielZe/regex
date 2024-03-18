const texto = "lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3"; // Exiba todos os '.mp3' utilizando um Regex.
console.log(texto.match(/\.mp3/g));

//no futuro...
console.log(texto.match(/\w+\.mp3/g));
