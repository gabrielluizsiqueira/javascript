// não é possível REAPONTAR o valor de uma const,
// isso torna possível inicializar uma const apontando para um OBJETO
// e depois alterar o VALOR das PROPRIEDADES desse mesmo objeto

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Luiz'
}
 
console.log(pessoa)

pessoa.nome = 'Gustavo'

console.log(pessoa)
