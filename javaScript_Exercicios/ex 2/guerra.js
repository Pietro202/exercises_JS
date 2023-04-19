let name = prompt('Digite o nome do guerreiro 1')
let atack = prompt('Digite o poder de ataque do guerreiro ' + name)


let nameDois = prompt('Digite o nome do guerreiro 2')
let defense = prompt('Digite o poder de DEFESA do guerreiro ' + nameDois)
let lifeDois = prompt('Digite a quantidade de vida que o ' + nameDois + ' tem')
let escudo = prompt( nameDois + ' tem escudo? (sim ou nao)')

let danoCausado = 0

if (atack > defense && escudo === 'nao'){
    danoCausado = atack - defense
    alert('O dano causado foi de: ' + danoCausado)
   
} else if (atack > defense && escudo === 'sim') {
   danoCausado = (atack - defense)/2
    alert('O dano causado foi de: ' + danoCausado)
}

alert('Guerreiro: '+ name + '\ncausou ' + danoCausado + ' de dano no Guerreiro: ' + nameDois + '\nPontos de Vida restantes: ' + (lifeDois-danoCausado))

