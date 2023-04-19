let imoveis = []
let option = ""


do{
    option = prompt('Bem vindo!' + '\nAtualmente temos ' + imoveis.length + ' imóveis cadastrados' + '\n\nEscolha abaixo a opção desejada: \n1) Cadastrar um novo imóvel \n2) Mostrar todos os imóveis cadastrados \n3) Sair')

    switch (option){
        case "1":
            const cadastro = {}
            cadastro.proprietario = prompt('Digite o nome do proprietário')
            cadastro.quartos = prompt('Digite a quantidade de quartos')
            cadastro.banheiros = prompt('Digite a quantidade de banheiros')
            cadastro.garagem = prompt('Tem garagem? (sim ou nao)')
        
           const confirmacao = confirm(
            'Salvar este imovel? \n' +
            '\nProprietário: ' + cadastro.proprietario +
            '\nQuartos: ' + cadastro.quartos +
            '\nBanheiros: '+ cadastro.banheiros +
            '\nPossui garagem? ' +cadastro.garagem
           )
           if(confirmacao){
            imoveis.push(cadastro)
            alert('Cadastro efetuado')
           }else{
            alert('Retornando ao menu inicial')
           }
        break
        case "2":
            for(let i=0; i<imoveis.length; i++){
                alert(
                    '\nImóvel ' + (i+1) +
                    '\nProprietário ' + imoveis[i].proprietario +
                    '\nQuartos ' + imoveis[i].quartos +
                    '\nBanheiros '+ imoveis[i].banheiros +
                    '\nPossui Garagem? '+ imoveis[i].garagem
                )
            }
        break
        case "3":
            alert('finalizando')
        break
        default:
            alert('Opção inválida')
    }
    
}while(option!= 3)


