
function hack() {
    peixes += 1000
}

function teste() {
    let audiorep = true
    alert('o que você fez')
    setInterval(() => {
        if (audiorep == true) {
        document.body.innerHTML = ''
        let aud = document.createElement('audio')
        aud.src = 'jumpscare.mp3'
        document.body.appendChild(aud)
        aud.play()
        audiorep = false
        }
    }, 2000);

    setInterval(() => {
        document.body.style.backgroundImage = 'url("susto.jpg")'
        document.body.style.backgroundColor = 'black'
        document.body.style.backgroundSize = 'auto'
    }, 3000);
}