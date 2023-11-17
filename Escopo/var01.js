// var possui function scope
var nome = 'Gabriel';

function retornarNome() {
    var nome = 'Filipe';
    return nome;
}

console.log(nome);