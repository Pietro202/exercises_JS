let cartas = []
let option = ""


do{
    option = prompt('Cartas no baralho: ' + cartas.length +
                    '\nEscolha a opção desejada \n1) Adicionar uma carta \n2) Puxar uma carta \n3) Sair')

                    switch(option){
                        case "1":
                            novaCarta = prompt('Qual carta deseja adicionar?')
                            cartas.push(novaCarta)
                        break
                        case "2":
                            lastCard = cartas.pop()
                            if (!lastCard){
                                alert('Não temos cartas a serem puxadas')
                            }else{
                            alert('Você puxou a carta ' + lastCard)}
                        break
                        case "3":
                            alert('Finalizando')
                        break
                        default:
                            alert('Opção invalida')

                    }


} while(option != 3)