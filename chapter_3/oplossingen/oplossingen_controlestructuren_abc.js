window.onload = function () {
    //oefening7();
    oefening13();
}

// Oefening 1
//let geboortejaar = prompt('Geef je geboortejaar in');
let geboortejaar = 2000;
let tijd = new Date();
let huidige_jaar = tijd.getFullYear();
let leeftijd = huidige_jaar - geboortejaar;
if (leeftijd > 20) {
    //alert('Je bent oud genoeg om de informatie op deze site te bekijken');
}

// Oefening 2
//let antwoord = prompt('sport u graag?');
let antwoord = '';
if (antwoord.toLowerCase() === 'ja') {
    document.getElementById('tekst').innerHTML = 'Just do it!';
} else if (antwoord.toLowerCase() === 'nee') {
    document.getElementById('tekst').innerHTML = 'Jammer';
}

// Oefening 3
let heading = document.querySelector('h1');
let uur = new Date().getHours();
if (uur < 12) {
    heading.innerText = 'Goeiemorgen, welkom op de website';
} else {
    heading.innerText = 'Goeiemiddag, welkom op de website';
}

// Oefening 4
let uren = new Date().getHours();
let minuten = new Date().getMinutes();
let dagdeel = '';

if (uren >= 7 && uren <= 12) {
    dagdeel = 'goedemorgen';
} else if (uren > 12 && uren <= 18) {
    dagdeel = 'goededag';
} else {
    dagdeel = 'goedavond';
}

document.getElementById('welkomstzin').innerText = dagdeel + ', ' + uren + ':' + minuten;

// Oefening 5
function oefening5() {
    let nummer = parseInt(prompt('Geef een random nummer in'));
    if (nummer < 50) {
        document.getElementById('resultaat').innerHTML = 'Te laag';
    } else if (nummer > 50) {
        document.getElementById('resultaat').innerHTML = 'Te hoog';
    } else {
        document.getElementById('resultaat').innerHTML = 'Goed gegokt';
    }
}

function oefening5alternative() {
    let nummer = parseInt(prompt('Geef een random nummer in'));
    let hoeGegokt = 'Te laag';

    if (nummer === 50) {
        hoeGegokt = 'Goed gegokt';
    } else if (nummer > 50) {
        hoeGegokt = 'Te hoog'
    }
    document.getElementById('resultaat').innerText = hoeGegokt;
}

// Oefening 6
function oefening6() {
    let antwoord = prompt('sport u graag?');

    let par = document.createElement('p');
    switch (antwoord.toLowerCase()) {
        case 'ja':
            par.innerText = 'Just do it!';
            break;
        case 'nee':
            par.innerText = 'Jammer, blijf dan maar in je luie zetel liggen';
            break;
        default:
            par.innerText = 'Dat was niet duidelijk, antwoord je vanuit je luie zetel?';
    }
    document.body.appendChild(par);
}

// Oefening 7
function oefening7() {
    let datum = new Date();
    const maanden = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
    let maandnaam = maanden[datum.getMonth()];
    document.getElementById('openingszin').innerHTML = 'Welkom, we zitten nu in de maand ' + maandnaam;

}

// Oefening 9
function oefening9() {
    let getal;
    do {
        getal = parseInt(prompt('Geef een getal tussen 1 en 10 in', '2'));
        if (!isNaN(getal) && getal > 0 && getal <= 10) {
            for (let i = 0; i <= 10; i++) {
                console.log(getal * i);
            }
        } else {
            console.log('Niet mogelijk');
        }
    } while (isNaN(getal) || getal < 0 || getal > 10);
}

// Oefening 10
function oefening10() {
    for (let i = 1; i <= 7; i++) {
        console.log('#'.repeat(i));
    }
}

// Oefening 11
function oefening11() {
    let aantalLijnen = parseInt(prompt('Geef een getal tussen 0 en 10', '1'));
    while (aantalLijnen < 0 || aantalLijnen > 10) {
        aantalLijnen = parseInt(prompt('Sorry niet mogelijk, geef een getal tussen 0 en 10 in', '1'));
    }

    for (let i = 1; i <= aantalLijnen; i++) {
        console.log('#'.repeat(i));
    }
}

// Oefening 12
function oefening12() {
    const teken = '#';
    let aantalLijnen = parseInt(prompt('Geef een nummer van 0 tot 10'));
    while (isNaN(aantalLijnen) || aantalLijnen < 0 || aantalLijnen > 10) {
        aantalLijnen = parseInt(prompt('Fout, geef een nummer van 0 tot 10'));
        console.log('Niet mogelijk');
    }

    let arr = [];
    for (let i = 0; i < aantalLijnen; i++) {
        arr.push(' ');
    }
    let teller = aantalLijnen - 1;
    for (let i = 0; i < aantalLijnen; i++) {
        arr[teller] = teken;
        console.log(arr.join(''));
        teller--;
    }
}

// Oefening 13
function oefening13() {
    let aantalLijnen = parseInt(prompt('Geef een nummer van 0 tot 10'));
    while (isNaN(aantalLijnen) || aantalLijnen < 0 || aantalLijnen > 10) {
        aantalLijnen = parseInt(prompt('Fout, geef een nummer van 0 tot 10'));
        console.log('Niet mogelijk');
    }
    let charTeller = 1;
    if (aantalLijnen % 2 === 0) {
        charTeller = 2;
    }
    for (let i = Math.trunc(aantalLijnen / 2); i >= 0; i--) {
        console.log(' '.repeat(i) + '#'.repeat(charTeller) + ' '.repeat(i));
        charTeller += 2;
    }
}