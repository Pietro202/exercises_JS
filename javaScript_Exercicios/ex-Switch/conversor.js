const valorMetro = prompt('Digite um valor em metros')

let converter = prompt('Digite o número referente a qual unidade de medida deseja converter' + '\n 1) Milimetro (mm) \n 2) Centimetro (cm) \n 3) Decimetro (dm) \n 4) Decâmetro \n 5) Hectometro (hm) \n 6) Quilometro (km)')

const converterNum = parseFloat(converter)

switch (converterNum) {
    case 1:
        alert(valorMetro + ' metros, é igual a ' + (valorMetro*1000) + ' milimetros')
        break
    case 2:
        alert(valorMetro + ' metros, é igual a ' + (valorMetro*100) + ' centimetros')
        break
    case 3:
        alert(valorMetro + ' metros, é igual a ' + (valorMetro*10) + ' decimetros')
        break
    case 4:
        alert(valorMetro + ' metros, é igual a ' + (valorMetro/10) + ' decametros')
        break
    case 5:
        alert(valorMetro + ' metros, é igual a ' + (valorMetro/100) + ' hectometros')
        break
    case 6:
        alert(valorMetro + ' metros, é igual a ' + (valorMetro/1000) + ' quilometros')
        break
    default:
        alert('Opção invalida')
}