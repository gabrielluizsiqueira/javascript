let pescar = 1;
let res = document.querySelector('div#res')
let res2 = document.querySelector('div#res2')
let img = document.querySelector('img#img')

peixes = 0


function click1() {
    peixes += 1 * pescar
    res.innerHTML = `Você tem ${peixes} peixes<br><br>`
    res2.innerHTML = ''
}

function click2() {
    if (peixes >= 10) {
        peixes -= 10
        pescar += 1
        res.innerHTML = `Você tem ${peixes} peixes<br><br>`
        document.getElementById('b2').disabled = true
    } else {
        alert('Você não tem peixes o suficiente')
    }
}

function click3() {
    if (peixes >= 50) {
        peixes -= 50
        pescar += 2
        res.innerHTML = `Você tem ${peixes} peixes<br><br>`
        document.getElementById('b3').disabled = true
    } else {
        alert('Você não tem peixes o suficiente')
    }
}

function click4() {
    if (peixes >= 100) {
        peixes -= 100
        pescar += 5
        res.innerHTML = `Você tem ${peixes} peixes<br><br>`
        document.getElementById('b4').disabled = true
    } else {
        alert('Você não tem peixes o suficiente')
    }
}

function click5() {
    if (peixes >= 500) {
        peixes -= 500
        pescar += 10
        res.innerHTML = `Você tem ${peixes} peixes<br><br>`
        document.getElementById('b5').disabled = true
    } else {
        alert('Você não tem peixes o suficiente')
    }
}

function click6() {
    if (peixes >= 1000) {
        peixes -= 1000
        pescar += 20
        res.innerHTML = `Você tem ${peixes} peixes<br><br>`
        document.getElementById('b6').disabled = true
    } else {
        alert('Você não tem peixes o suficiente')
    }
}

function click7() {
    if (peixes >= 2000) {
        peixes -= 2000
        pescar += 50
        res.innerHTML = `Você tem ${peixes} peixes<br><br>`
        document.getElementById('b7').disabled = true
    } else {
        alert('Você não tem peixes o suficiente')
    }
}

function click8() {
    if (peixes >= 5000) {
        peixes -= 5000
        pescar = 0
        res.innerHTML = `Você tem ${peixes} peixes<br>`
        document.getElementById('b8').disabled = true
        res2.innerHTML = 'Você zerou o jogo!'
        img.src = 'tilapia.jpg'
    } else {
        alert('Você não tem peixes o suficiente')
    }
}