function bhaskara(a, b, c) {
    // Calcula o discriminante
    var delta = (b**2) -4*a*c
    
    if (delta < 0) {
        return "Sem soluções reais";
    } else if (delta === 0) {
        var x = -b / (2 * a);
        return "Uma solução: x = " + x;
    } else {
        var x1 = (-b + delta**(1/2)) / (2 * a);
        var x2 = (-b - delta**(1/2)) / (2 * a);
        return "Duas soluções: x1 = " + x1 + " e x2 = " + x2;
    }
}

function clicar() {
    var a = Number(document.querySelector('input#a1').value);
    var b = Number(document.querySelector('input#b1').value);
    var c = Number(document.querySelector('input#c1').value);
    
    var resultado = bhaskara(a, b, c);
    
    res.innerHTML = resultado;
}


