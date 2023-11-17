// var aceita ser redeclarada
var nome = 'Gabriel';

function retornarNome() {
    nome = 'Filipe'
    return nome
}

retornarNome()
console.log(nome)