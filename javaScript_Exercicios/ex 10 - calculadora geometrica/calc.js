let option = ""

function triangle(a, b) {
    let areaTriangle = (a * b) / 2
    return areaTriangle
}

function retangle(a, b) {
    let areaRetangle = (a * b)
    return areaRetangle
}

function square(a){
    let areaSquare = (a ** 2)
    return areaSquare
}

function trapeze(a, b, c){
    let areaTrapeze = ((a + b) * c) / 2
    return areaTrapeze
}

function circle(a){
    let areaCircle = (a * a) * 3.14
    return areaCircle
}

do {
    option = prompt('-------- Calculadora Geometrica -------- \n\n ' +
    'Escolha qual figura geometrica deseja calcular a área\n' +
    '1) Triângulo \n 2) Retângulo \n 3) Quadrado \n 4) Trapézio \n 5) Circulo \n 6) Sair')

    switch (option) {
        case "1": 
            let base = prompt('Digite o valor da base do triângulo')
            let altura = prompt('Digite o valor da altura do triângulo')
            let result = triangle(base, altura)
            alert('A área do triangulo setado é ' + result)
        break
        case "2":
            let base1 = prompt('Digite o valor da base do retângulo') 
            let altura1 = prompt('Digite o valor da altura do retângulo')
            let result1 = retangle(base1, altura1)
            alert ('A área do retângulo setado é ' + result1)
        break
        case "3":
            let side = prompt('Digite o valor dos lados do quadrado')
            let resultSquare = square(side)
            alert('A área do quadrado setado é de ' + resultSquare)
        break
        case "4":
            let baseMaior = prompt('Digite o valor da base Maior do Trápezio')
            let baseMenor = prompt('Digite o valor da base Menor do Trápezio')
            let alturatrap = prompt('Digite o valor da altura do Trápezio')
            let areaTrap = trapeze(baseMaior,baseMenor,alturatrap)
            alert('A área do trapézio setado é de ' + areaTrap)
        break
        case "5":
            let raio = prompt('Digite o valor do raio do circulo')
            let area6= circle(raio)
            alert('A area do circulo setado é ' + area6)
        break
        case "6":
            alert('Finalizando')
        break
        default:
            alert('Opção inválida')
    }
}
while(option !=6)