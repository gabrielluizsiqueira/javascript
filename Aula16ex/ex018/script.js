var ntxt = document.querySelector('input#ntxt')
var adicionar = document.querySelector('input#add')
var analisar = document.querySelector('input#ana')
var lis = document.querySelector('select#lista')
var res = document.querySelector('p#res')
var array = []

adicionar.addEventListener('click', function () {

    var n = Number(ntxt.value)
    var pos = array.indexOf(n)
    res.innerHTML = ''

    if (ntxt.value.length == 0) {

        alert('Por favor, insira um número.')

    } else if (n < 1 || n > 100) {
        alert('Obedeça a condição!')
    } else if (pos != -1) {

        alert('Esse número já foi adicionado!')

    } else {

        var item = document.createElement('option')
        lis.appendChild(item)
        item.text = 'você adicionou ' + n
        array.push(n)
        array.sort()
    }
})

analisar.addEventListener('click', function () {


    if (array.length == 0) {
        alert('Adicione um número para começar!')
    } else {
        var soma = 0
        for (let c = 0; c < array.length; c++) {
            soma += array[c]
        }

        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${array.length} números cadastrados
    <br>O maior valor informado foi ${array[array.length - 1]}
    <br>O menor valor informado foi ${array[0]}
    <br>Somando todos os valores, temos ${soma}
    <br>A média dos valores digitados é ${soma / array.length}`
    }

})