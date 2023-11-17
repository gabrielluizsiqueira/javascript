let lista = document.querySelector('ul#lista')
let elem = []

function adicionar() {

    var txt = document.querySelector('input#texto').value
    var elemento = document.createElement("li")

    if (txt.length == 0) {
        alert("Digite algo!")
    } else {
        elem.push(1)
        lista.appendChild(elemento)
        elemento.id = elem.length - 1
        elemento.innerHTML += txt
    }
}

function remover() {
    var lastelement = document.getElementById(elem.length-1)
    lastelement.remove()
    elem.pop()
}

function apagar() {
    elem = []
    lista.innerHTML = ''
}