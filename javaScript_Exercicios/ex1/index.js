const firstName = prompt('Digite seu primeiro nome:' )
const nickName = prompt('Digite seu sobrenome:' )
let areaDeEstudo = prompt('Area de estudo: ')
const anoDeNascimento = prompt('Ano de nascimento: ')

alert(
    'Recruta cadastrado com sucesso! \n' + '\n Nome Completo: ' + firstName + " " + nickName  + '\n Area de Estudo: ' + areaDeEstudo + '\n Idade: ' + (2023 - anoDeNascimento)
    )