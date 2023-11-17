function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += '<br><br>Está de manhã'
        foto.src = 'img/manha.png'
        document.body.style.background = '#7AA454'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += '<br><br>Está de tarde'
        foto.src = 'img/tarde.png'
        document.body.style.background = '#FFB23B'
    } else {
        msg.innerHTML += '<br><br>Está de noite'
        foto.src = 'img/noite.png'
        document.body.style.background = '#3E4C57'
    }
}
