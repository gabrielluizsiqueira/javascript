let num = [5, 8, 4]

// adiciona o elemento de valor 6 na chave 3
num[3] = 6

//adiciona o elemento uma posição a frente no vetor
num.push(7) 

//coloca os elementos em ordem crescente
num.sort() 

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// diz a posição de um valor, se não houver o valor pedido, ele retornará como -1
let pos = num.indexOf(6) 

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
