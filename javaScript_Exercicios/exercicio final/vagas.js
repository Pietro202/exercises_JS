let option = ""
let vacances = [ ]



function menu(){
    do{
        option = prompt('-*-*- Bem Vindo ao Pipico Empregos -*-* ' + '\n\n 1) Vagas Disponíveis \n 2) Criar Nova Vaga \n 3) Visualizar Vaga \n 4) Inscrever candidato em vaga \n 5) Excluir Vaga \n 6) Sair')

        switch (option){
        case "1":
            vacanceList()
        break
        case "2":
            newVacance()
        break
        case "3":
            showVacance()
        break
        case "4":
            newCandidate()
        break
        case "5":
            deleteVacance()
        break
        case "6":
            alert('Finalizando')
        break
        default:
            alert('Opção Invalida')
        }
    } while (option !=6)
}

function vacanceList(){
    const textVacance = vacances.reduce(function(finalText, vacance, index){
        finalText += index + ' .'
        finalText += vacance.name
        finalText += " (" + vacance.candidates.length + ' candidatos) \n'
        return finalText  
    }, "")

    alert(textVacance)
}

function newVacance(){
    let name = prompt('Digite o nome da vaga')
    let description = prompt('Descrição da vaga')
    let finalDate = prompt('Data limite para inscrição: (dd/mm/yyyy)')

    const confirmation = confirm('Deseja criar uma nova vaga com esses dados abaixo? \n Nome: ' + name + '\nDescrição: ' + description + '\nData Final para inscrição: ' + finalDate)

    if(confirmation){
        const newVacance = { name, description, finalDate, candidates:[] }
        vacances.push(newVacance)
        alert('Vaga Criada')

    }
    
}

function showVacance(){
    const index = prompt('Digite o índice da vaga que deseja procurar:')
    if (index >= index.length){
        alert('Índice inválido')
        return
    }
    const vacance = vacances[index]

    if(!index) {
        alert('Voltando ao menu inicial')
        return
    }

    const candidateText = vacance.candidates.reduce(function (finalText, candidate) {
        return finalText + '\n ' + candidate
    }, "")

    alert(
        'Índice da vaga: ' + index +
        '\nNome: ' + vacance.name +
        '\nDescricao: ' + vacance.description +
        '\n Data Limite: ' + vacance.finalDate +
        '\nQuantidade de inscritos: ' + vacance.candidates.length +
        '\nCandidatos Inscritos: ' + candidateText 
    )
}

function newCandidate(){
    const candidate = prompt('Digite o nome do candidato')
    const index = prompt('Digite o índice da vaga para qual vai ser inscrito')
    const vacance = vacances[index]

    if(!candidate) {
        alert('Voltando ao menu inicial')
        return
    }

    const confirme = confirm('Deseja inscrever o candidato ' + candidate + ' na vaga de índice ' + index + '? \n' + 'Nome: ' + vacance.name + '\n Descrição: ' + vacance.description + '\nData Limite: ' + vacance.finalDate)

    if (confirme){
        vacance.candidates.push(candidate)
        alert('Inscrição realizada')
    }
}

function deleteVacance(){
    const index = prompt('Digite o indice da vaga que deseja exluir')
    const vacance = vacances[index]

    if(!index) {
        alert('Voltando ao menu inicial')
        return
    }

    const confirme = confirm('Deseja Excluir a vaga indice ' + index + '\nNome: ' + vacance.name + '\nDescrição' + vacance.description + '\nData Limite: ' + vacance.finalDate)

    if (confirme){
        vacances.splice(index, 1)

        alert('Vaga Excluida')

    }
}


menu()