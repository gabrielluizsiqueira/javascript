function clicar() {
    let ntxt = document.querySelector('input#ntxt') // let possui escopo diferente, ela vale apenas dentro do bloco
    let n = Number(ntxt.value)
    let tab = document.getElementById('seltab')

    if (ntxt.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option') //cria um option
            tab.appendChild(item) // coloca a option dentro do select
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // não é importante para o js, apenas outras linguagens
            c++
        }


    }
}