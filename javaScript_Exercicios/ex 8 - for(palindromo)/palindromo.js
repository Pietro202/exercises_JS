let palavra = prompt("Digite uma palavra ou frase")
let palavraInvertida = ""

for(let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if (palavraInvertida===palavra) {
    alert('A frase escrita é um palindromo \n' + palavra)
} else alert('A frase escrita não é um palindromo ' + palavra + '\n Palavra invertida: ' + palavraInvertida)