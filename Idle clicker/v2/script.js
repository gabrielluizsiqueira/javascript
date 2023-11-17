let pescar = 1;
let res = document.querySelector('div#res')
let res2 = document.querySelector('div#res2')
let res3 = document.querySelector('div#res3')
let img = document.querySelector('img#img')

peixes = 0

setInterval(function () {
    res.innerHTML = `Você tem ${peixes.toFixed(1)} peixes<br><br>`
}, 1)

setInterval(function () {
    res2.innerHTML = `<abbr title="Peixes por clique">ppc:</abbr> ${pescar.toFixed(1)}<br><br>`
    res2.innerHTML += `<abbr title="Peixes por segundo">pps:</abbr> ${pps.toFixed(1)}`
}, 1)


function click1() {
    peixes += 1 * pescar
}

function click2() {
    if (peixes >= 100) {
        peixes -= 100
        pescar += 0.5
        document.getElementById('b2').disabled = true
    } else {
        alert('Peixes Insuficientes')
    }
}

function click3() {
    if (peixes >= 200) {
        peixes -= 200
        pescar += 1
        document.getElementById('b3').disabled = true
    } else {
        alert('Peixes Insuficientes')
    }
}

function click4() {
    if (peixes >= 1000) {
        peixes -= 1000
        pescar += 2
        document.getElementById('b4').disabled = true
    } else {
        alert('Peixes Insuficientes')
    }
}

function click5() {
    if (peixes >= 2000) {
        peixes -= 2000
        pescar += 5
        document.getElementById('b5').disabled = true
    } else {
        alert('Peixes Insuficientes')
    }
}

function click6() {
    if (peixes >= 3000) {
        peixes -= 3000
        pescar += 7.5
        document.getElementById('b6').disabled = true
    } else {
        alert('Peixes Insuficientes')
    }
}

function click7() {
    if (peixes >= 5000) {
        peixes -= 5000
        pescar += 10
        document.getElementById('b7').disabled = true
    } else {
        alert('Peixes Insuficientes')
    }
}

function click8() {
    if (peixes >= 20000) {
        peixes = 0

        alert('o que você fez')

        document.body.innerHTML = ''
        let aud = document.createElement('audio')
        aud.src = 'midia/audio.mp3'
        document.body.appendChild(aud)
        aud.play()
        audiorep = false

        document.body.style.backgroundImage = 'url("midia/bloop.jpg")'
        document.body.style.backgroundColor = 'black'
        document.body.style.backgroundSize = 'auto'

    } else {
        const textos = [
            '₵ɄłĐ₳ĐØ',
            '₦₳Ø ₣₳ç₳ ł₴₴Ø',
            'a̶̦̦̲̅̈́̿͠n̸̡̂̓̏ ̸̨̞̓ȩ̸̲͙͉͕̎͋͒̄̈́y̴͖̟̋̚ẹ̴̡̢̘̩̖͆̈̂ḻ̵͓͈̓́̎̉e̷̡̗̣̱͕̐͗̑̕͠ͅs̸̝̫̆́̀̃̿͘ş̷͈͓̤͋ ̶̣̙̋ǎ̷̲b̷̥͉̦̖̮̔͐o̴̮̩̿́̅̂͛m̶͈̟͕͙̫͘ï̴̫̆n̶̝̥̣̟̋͊̕͝a̷̗͕͆́̀̊t̷͖͂́̌͠i̵̡̱͓̖̪̮͋͋̀͌̚͠o̸̪̖̥̥̬̔ṉ̸̟̏ ̵̡͔̺̙̩̖̿ŵ̵̡̝͖͈̀̀į̴̨̮͖͕̓̇̈́͐̔t̷͕̜̆̓͐͆̋h̴̛̳̍̈͝ ̸̮̻̦̦̩̣̈̈́s̸͓̈̏̅̏̑e̵̯͖̿̉̈͜v̵̧̦̤̞̥̎e̶̢̬̘͇͂̒ͅn̴̨͈̤̔̒͗͐̚ ̸̭͖̭̲͚̲̑͊́͘̕͝m̶̢͉͆̎̅̅̚̕ọ̴̢̯͎̖̼̀̀̔̂̑̈́u̶̲̬̝̅̑̂̆͝ṱ̶̗̠̯̾́̀͌͂h̶̨̬͒s̷̙̘̀̉̍̈́̅',
            'ĭ̴͈̙̥̬̇̇t̴̛͓̝̥̠̹͒̾̄͒͘ ̴͔̗̔̽͒̓͐͘l̴̥̹͂̿̅̚u̴̡̹͙̭͒̑̆̊͝͠r̵̮̦͓̯̂̏̓̀̈̚ͅk̸͈̓̎͠͝s̷̙̓̓̿͆̿̄ ̸̠̩̥̘̗̼̃͋̒͊̾i̵̧̛̙̬͈̻͍n̸̘̣̬͓̙͛̓ ̶̢̠̘̜̲̀̅̈́͗t̸̡̡̢̛͍͌̈́h̴̢̯͚̞̭̱̓́͐͌͝ẹ̸͇̈́̀̽͜͠ ̵̛͉̰͖̒̆̀̆̈d̵͙̼̆͒͋̄͌͜ë̷̢͖́̐̏e̴̤̦̮̬͗̊p̷͔̟̼͔̊̌̚ȩ̸̎s̵͎̯͚̱̯̾͒̿͜ţ̷̗̔͐̑ ̸͖͈̾̉̀̕w̸̲̻͇͓̠̹̔̃̅̿̓a̵̤͇̥̰͍͍͑ṯ̷̦̘̌͑̕è̶̡̛̮͓̤͓̼͒͆̍r̵͎̺̔ş̴̀̐͛͜͝'
        ]
        const irandom = Math.floor(Math.random() * textos.length)
        alert(textos[irandom])
    }
}

let pps = 0
let mtxt1 = document.querySelector('div#melhoria1')
let mtxt2 = document.querySelector('div#melhoria2')
let preco1 = 100
let preco2 = 500
setInterval(function add() {
    peixes += pps
}, 1000)

function melhoria1() {

    if (peixes >= preco1 && pps == 0) {
        peixes -= preco1
        pps += 2
        preco1 += 50
        mtxt1.innerHTML = `${preco1} peixes`
    } else if (peixes >= preco1 && pps > 0) {
        peixes -= preco1
        pps += 2
        preco1 += 50
        mtxt1.innerHTML = `${preco1} peixes`
    } else {
        alert('Peixes insuficientes')
    }
}

function melhoria2() {

    if (peixes >= preco2 && pps == 0) {
        peixes -= preco2
        pps += 5
        preco2 += 50
        mtxt2.innerHTML = `${preco2} peixes`
    } else if (peixes >= preco2 && pps > 0) {
        peixes -= preco2
        pps += 5
        preco2 += 50
        mtxt2.innerHTML = `${preco2} peixes`
    } else {
        alert('Peixes insuficientes')
    }
}