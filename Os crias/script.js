const msg = document.querySelector('p#msg')
const img = document.querySelector('img#foto')

var botoes = document.querySelectorAll('.botao')

for (var i=0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function(event) {
        var botaoClicado = event.target
        img.setAttribute('src', botaoClicado.id)
        msg.innerHTML = 'Você escolheu '
        msg.innerHTML += 'o '+ botaoClicado.value +'!'
    })
}
