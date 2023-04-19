let num1 = prompt('Digite o primeiro número: ')
let num2 = prompt('Digite o segundo número: ')

const x = parseFloat(num1)
const y = parseFloat(num2)

const soma = x + y
const sub = x - y
const divisão = x / y
const mult = x * y

alert(
    'A soma dos 2 números é igual a: ' + soma +
    '\n A subtração dos 2 números é igual a: ' + sub +
    '\n A divisão dos 2 números é igual a: ' + divisão +
    '\n A multiplicacao dos 2 números é igual a: ' + mult
)