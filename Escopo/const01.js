// const possui block scope
// sofre hoisting porém não é inicializado
// o valor não pode ser redeclarado e NEM REATRIBUÍDO

const nome = 'Gabriel'
nome = 'Gustavo'
console.log(nome)