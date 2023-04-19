let valor = prompt('Digite a quantidade de dinheiro inicial: (R$)' )
let option = ""

do{ 
    option = prompt('Atualmente a quantidade de dinheiro é de: R$' + valor + 
        '\nO que deseja fazer?' +
         '\n 1 - Sacar' +
         '\n 2 - Depositar'+
         '\n 3 - Sair' )

    switch (option) {
    case '1':
        valorSaque = prompt('Digite o valor do saque: (R$)')
        valor -= valorSaque
    break
    case '2':
        valorDeposito = prompt('Digite o valor do Depósito: (R$)')
        valorDeposito=parseFloat(valorDeposito)
        valor += valorDeposito
    break
    case '3':
        alert('Valor total da conta R$' + valor + '\nEncerrando...')
    break
    default:
        alert('Opção Invalida')
    }
 

} while(option!=='3')