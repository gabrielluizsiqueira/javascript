// Qual é a diferença entre os dois exemplos de função?

testeDeclaration()

function testeDeclaration(){
    console.log('testando Function Declaration')
}

var testeExpression = function(){
    console.log('testando Function Expression')
}

testeExpression()


// No primeiro, a função pode ser chamada no começo do script. (Function declaration)
// No segundo, apenas depois da inicialização. (Function expression)

// Explicação: Ocorre o HOISTING, por isso não será um reference error, e sim
// por que var testeExpression não é uma função naquele momento

