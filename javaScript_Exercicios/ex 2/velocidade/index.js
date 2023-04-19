let velocity1 = prompt('Digite a velocidade do carro 1 em km/h')
let velocity2 = prompt('Digite a velocidade do carro 2 em km/h')

if (velocity1 > velocity2) {
    console.log('Velocidade do carro 1 maior que velocidade do carro 2 \n Carro 1: ' + velocity1 + ' \n Carro 2: ' + velocity2)
} else if (velocity1 < velocity2) {
    console.log('Velocidade do carro 2 maior que velocidade do carro 1 \n Carro 1: ' + velocity1 + ' \n Carro 2: ' + velocity2)
}else{
    console.log('Velocidade dos carros são iguais \n Carro 1: ' +velocity1 + ' \n Carro 2: ' + velocity2)
}