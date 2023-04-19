let waitList = ["amir", "saulo", "maver"]
let option = ""
let have = ""


do{
    let patient = ""
    for(let i=0; i<waitList.length; i++){
        let list = waitList[i]
        patient += (list + " posição: " + (i+1)+ '\n')
    }
    
    option = prompt(patient + '\nEscolha a opção desejada: \n1) Novo Paciente \n2) Consultar Paciente \n3)Remover primeiro nome \n4) Sair')
    switch (option) {
        case "1":
            newName = prompt('Digite o nome do novo paciente')
            waitList.push(newName)
            console.log(waitList)
            console.log(newName)
        break
        case "2":
            let foundName = prompt('Digite o nome que deseja procurar na lista')
            have = waitList.includes(foundName)
            
            if (have == true){
                let position = waitList.indexOf(foundName)+1
                alert('O nome ' + foundName + ' esta na lista de espera na posiçao ' + position)
            }else{
                alert('O nome ' + foundName + ' não esta na lista de espera')
            }
        break
        case "3":
            let remove =  prompt('Deseja remover da lista o ' + waitList[0] + '? (SIM/NAO)')
            if (remove == 'SIM'){
            removed = waitList.shift()} 
            break
        case "4":
            alert('finalizando')

        break
        default:
            alert('Opção invalida')
            
    }
    
    
}while(option != "4")