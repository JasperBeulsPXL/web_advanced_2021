window.onload = function () {
    oefening13();
}

// Oefening 1
function oefening1() {
    let geboortejaar = parseInt(prompt('Geef je geboortejaar'));
    let datum = new Date().getFullYear();
    let leeftijd = datum - geboortejaar;
    if (leeftijd >= 20) {
        alert('Je bent oud genoeg om deze website te bekijken');
    }
}

// Oefening 2
function oefening2() {
    let antwoordSport;
    let doetAanSport = prompt('Hou je van sport?');

    if (doetAanSport.toLowerCase() === 'ja') {
        antwoordSport = 'Do it!';
    } else {
        antwoordSport = 'Blijf dan maar in de zetel liggen';
    }
    alert(antwoordSport);
}

// Oefening 3
function oefening3() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    if (hour <= 12) {
        console.log(`Het is ${hour}:${minutes} uur voormiddag`);
    } else {
        console.log(`Het is ${hour}:${minutes} uur namiddag`);
    }
}

// Oefening 4
function oefening4() {
    let tijd1 = new Date().toLocaleTimeString()
    let uur = new Date().getHours()

    document.getElementById("antwoord").innerText = `${uur} \n ${tijd1}`;

    if (uur >= 7 && uur <= 12) {
        document.getElementById("antwoord2").innerText = `Goedemorgen! het is ${tijd1} `
    } else if (uur >= 12 && uur <= 18) {
        document.getElementById("antwoord2").innerText = `Goede Dag  het is ${tijd1}`

    } else {
        document.getElementById("antwoord2").innerText = `Goede avond het is ${tijd1} in de namiddag`
    }
}

// Oefening 5
function oefening5() { // LIKE!
    let getal = parseInt(prompt('Geef een getal in'));

    if (getal < 50) {
        document.getElementById('sentence').innerHTML = 'Te laag';
    } else if (getal === 50) {
        document.getElementById('sentence').innerHTML = 'Proficiat, goed gegokt!';
    } else if (getal > 50) {
        document.getElementById('sentence').innerHTML = 'Te hoog';
    }
}

// Oefening 5b
function oefening5alternative() {
    let getal = parseInt(prompt('Geef een getal in'));
    let message = 'Te laag';

    if (getal === 50) {
        message = 'Proficiat, je hebt goed gegokt';
    } else if (getal > 50) {
        message = 'Te hoog';
    }
    document.getElementById('sentence').innerText = message;
}

// Oefening 6
function oefening6() {
    let antwoordSport;
    let doetAanSport = prompt('Hou je van sport?');

    switch (doetAanSport.toLowerCase()) { // 50
        case 'ja':
            antwoordSport = 'Just do it!';
            break;
        case 'nee':
            antwoordSport = 'Jammer, blijf dan maar liggen, luilak!';
            break;
        default:
            antwoordSport = '‘Dat was niet duidelijk, antwoord je vanuit je luie zetel?';
    }

    alert(antwoordSport);
}

// Oefening 7
function oefening7() {
    let d = new Date().getMonth();
    let result = 'jul-dec';

    switch (d) {
        case 0:
            result = 'januari';
            break;
        case 1:
            result = 'feb';
            break;
        case 2:
            result = 'maa';
            break;
        case 3:
            result = 'apr';
            break;
        case 4:
            result = 'mei';
            break;
        case 5:
            result = 'jun';
            break;
    }
    console.log('Het is de maand ' + result);
}

// Oefening 8
function oefening8() {
    let dagdeel;
    let nu = new Date();
    let uren = nu.getHours();
    let dag;

    if (uren >= 7 && uren < 12) {
        dagdeel = 'goedemorgen';
    } else if (uren >= 12 && uren < 18) {
        dagdeel = 'goededag';
    } else {
        dagdeel = 'goedeavond';
    }

    switch (nu.getDay()) {
        case 0:
            dag = 'zondag';
            break;
        case 1:
            dag = 'maandag';
            break;
        case 2:
            dag = 'dinsdag';
            break;
        case 3:
            dag = 'woensdag';
            break;
        case 4:
            dag = 'donderdag';
            break;
        case 5:
            dag = 'vrijdag';
            break;
        case 6:
            dag = 'zaterdag';
            break;
    }
    document.getElementById('oefening8').innerText = `Het is ${dag} ${dagdeel} ${uren}:${nu.getMinutes()}`;
}

// Oefening 9
function oefening9() {
    let randomNumber = parseInt(prompt('Geef een getal tussen 1 en 10 in'));
    if (randomNumber <= 0 || randomNumber >= 10) {
        console.log('Niet mogelijk');
    } else {
        for (let i = 0; i < 11; i++) {
            console.log(i + ' x ' + randomNumber + ' = ' + i * randomNumber);
        }
    }
}

// Oefening 10
function oefening10() {
    let lines = 7;
    for (let i = 1; i <= lines; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
        //console.log('*'.repeat(i));
    }
}

// Oefening 11
function oefening11() {
    let lines = parseInt(prompt('Geef een getal van 1 tot 10 in'));
    if (lines >= 0 && lines <= 10) {
        for (let i = 1; i <= lines; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += '*';
            }
            console.log(row);
            //console.log('*'.repeat(i));
        }
    }else{
        console.log('Dat is niet mogelijk');
    }
}

// Oefening 12
function oefening12(){
    let getal  = parseInt(prompt('Geef een getal tussen 0 en 10 in'));
    if(getal < 1 || getal > 10){
        console.log('Niet mogelijk');
    }else{
        for (let i = 1; i <= getal; i++) {
            let driehoek = '';
            for (let j = getal-i; j > 0; j--) {
                driehoek += ' ';
            }
            for (let k = 0; k < i; k++) {
                driehoek += '#';
            }
            console.log(driehoek);
        }
    }
}

// Oefening 13
function oefening13(){
    let lines = 7;
    for (let i = 1; i <= lines ; i++) {
        let row = '';
        for (let j = 1; j <= lines - i; j++) {
            row+= ' ';
        }
        for (let k = 0; k <= (2*(i-1)); k++) {
            row += '*';
        }
        for (let l = i+1; l <= lines ; l++) {
            row+= ' ';
        }
        console.log(row);
    }
}