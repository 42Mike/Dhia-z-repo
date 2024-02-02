function alph(x) {
    x = x.toUpperCase();

    i = 0;
    while (x.charAt(i) >= "A" && x.charAt(i) <= "Z" && i < x.length) { i++ }

    return i == x.length
}

function num(x) {
    i = 0;
    while (x.charAt(i) >= 0 && x.charAt(i) <= 9 && i < x.length) { i++ }

    return i == x.length && x.length == 8
}



function verif1() {
    n = document.getElementById('n').value
    p = document.getElementById('p').value
    t = document.getElementById('t').value
    a = document.getElementById('a').value
    m = document.getElementById('m').value
    c = document.getElementById('c').value

    if (!alph(n) || n.length < 3) {
        alert('nom invalide'); return false
    }

    if (!alph(p) || p.length < 3) {
        alert('prenom invalide'); return false
    }

    if (!num(t) || t.substr(0, 1) < 1) {
        alert('tel invalide'); return false
    }

    if (a.length < 10) {
        alert('adresse invalide'); return false
    }

    if (m.indexOf(" ") != -1 || m.length < 6) {
        alert('mdp invalide'); return false
    }

    if (c!= m) {
        alert('mdpc invalide'); return false
    }

    return true

}

function verif2(){
    typ=document.getElementById('typ');
    q=document.getElementById('q').value;
    t=document.getElementById('t').value;
    mp=document.getElementById('mp').value;

    if(typ.value!=1){
        alert('veiller choisir une pizza');return false
    }
    if(q<1 || q>5){
        alert('quantite <5');return false
    }
    if(t.length!=8 || t.substr(0,1)<1){
        alert('nombre invalide');return false
    }
    if(mp.length!=6 || mp.indexOf(" ")!=-1){
        alert('mdp invalide');return false
    }
    return true
}