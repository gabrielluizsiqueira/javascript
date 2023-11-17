// let possui block scope

/*
var nome = 'Gabriel'
 if (1 + 1 === 2) {
    var nome = 'Gustavo'
 }

 console.log(nome) -> Gustavo
 */

let nome = 'Gabriel'
if (1 + 1 === 2) {
    let nome = 'Gabriel'
}

console.log(nome)