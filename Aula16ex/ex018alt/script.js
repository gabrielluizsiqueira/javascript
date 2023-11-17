let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// por algum motivo, ao transformar num em Number(num.value) fora das functions, deu errado
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        lista.appendChild(item)
        item.text = `Você adicionou ${num.value}`
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function analisar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]

        // método para determinar o maior e menor número
        for (let pos in valores){
            soma += valores[pos]

            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${tot} números cadastrados<br>
        O maior valor informado foi ${maior}<br>
        O menor valor informado foi ${menor}<br>
        A soma dos valores foi ${soma}<br>
        A média foi ${soma/tot}`

    }
}