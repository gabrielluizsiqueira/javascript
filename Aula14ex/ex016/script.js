function clicar() {
    var initxt = document.querySelector('input#initxt').value // coloquei .value de uma vez para facilitar
    var ini = Number(initxt)
    var fimtxt = document.querySelector('input#fimtxt').value
    var fim = Number(fimtxt)
    var pastxt = document.querySelector('input#pastxt').value
    var pas = Number(pastxt)
    var msg = document.querySelector('div#msg')
    msg.innerHTML = 'Contando...<br>' // fazer isso reseta o msg toda vez que eu aperto o botão
    if (initxt.length == 0 || fimtxt.length == 0 || pastxt.length == 0) { // input vazio
        msg.innerHTML = 'Não foi possível contar!'
    } else if (pas <= 0) { // passo = 1
        window.alert('Passo não informado. Considerando passo = 1')
        for (ini; ini <= fim; ini++) {
            msg.innerHTML += `${ini} 👉 `
        }
        msg.innerHTML += '🚩'    
    } else if (ini > fim) { // contagem regressiva
        for (ini; ini >= fim; ini = ini - pas) {
            msg.innerHTML += `${ini} 👉 `
        }
        msg.innerHTML += '🚩'
    } else { // contagem crescente
        for (ini; ini <= fim; ini = ini + pas) {
            msg.innerHTML += `${ini} 👉 `
        }
        msg.innerHTML += '🚩'
    }
}