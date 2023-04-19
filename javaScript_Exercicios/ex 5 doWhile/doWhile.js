let escolha = 0

do {
    escolha = prompt('Escolha uma opção: ' +
                    '\n1 - \n2 - \n3 - \n4 - \n5 - Sair')

    switch(escolha) {
    case "1":
        alert('Você escolheu a opção 1')
    break
    case "2":
        alert('Você escolheu a opção 2')
    break
    case "3":
        alert('Você escolheu a opção 3')
    break
    case "4":
        alert('Você escolheu a opção 4')
    break
    case "5":
        alert('Você escolheu encerrar')
        alert('Encerrando...')
    break
    default:
        alert('Opcção Invalida')
    }
}while (escolha != 5)

