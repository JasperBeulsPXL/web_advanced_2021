window.onload = function () {
    vraag13();
}

function vraag1() {
    let geboortejaar = prompt('Wat is je geboortejaar'); // 2000
    let currentDate = new Date(); // current date
    let currentYear = currentDate.getFullYear(); // 2021

    if (currentYear - geboortejaar >= 20) {
        alert('Je bent oud genoeg om de informatie op deze pagina te bekijken');
    }
}

function vraag2() {
    let vraag = prompt('Sport je graag?');

    if (vraag.toLowerCase() === 'ja') {
        alert('Just do it!');
    } else {
        alert('Blijf dan maar liggen');
    }
}

function vraag3() {
    let welkomstzin = 'Welkom op de webpagina!';
    document.getElementById('welkomstzin').innerText = welkomstzin;
    setInterval(function () {
        let date = new Date();
        let dagdeel;

        if (date.getHours() < 12) {
            dagdeel = 'voormiddag';
        } else {
            dagdeel = 'namiddag';
        }
        document.getElementById('vraag3').innerHTML = `Het is ${dagdeel} op ${date.toString()}`;
    }, 1000);
}

function vraag4() {
    let date = new Date();
    let uur = date.getHours(); // 6

    if (uur <= 11 && uur >= 7) {
        document.getElementById('vraag4').innerText = 'Goedemorgen ' + uur.toString();
    } else if (uur >= 12 && uur <= 17) {
        document.getElementById('vraag4').innerText = 'Goede dag ' + uur.toString();
    } else if (uur >= 18 && uur < 7) {
        document.getElementById('vraag4').innerText = 'Goede avond ' + uur.toString();
    }
}

function vraag5() {
    let getal = prompt('Geef een random getal in');
    getal = parseFloat(getal);

    if (getal < 50) {
        alert('Te laag');
    } else if (getal === 50) {
        alert('Proficiat, goed gegokt');
    } else {
        alert('Te hoog');
    }
}

function vraag6() {
    let vraag = prompt('Sport je graag?');

    switch (vraag.toLowerCase()) {
        case 'ja':
            alert('Just do it!');
            break;
        case 'nee':
            alert('Jammer, blijf dan maar liggen');
            break;
        default:
            alert('Dat was niet duidelijk, antwoord je vanuit je luie zetel?');
    }
}

function vraag7() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let month = '';
    switch (currentMonth) {
        case 0:
            month = 'januari';
            break;
        case 1:
            month = 'februari';
            break;
        case 2:
            month = 'maart';
            break;
        case 3:
            month = 'april';
            break;
        case 4:
            month = 'mei';
            break;
        case 5:
            month = 'juni';
            break;
        case 6:
            month = 'juli';
            break;
        case 7:
            month = 'augustus';
            break;
        case 8:
            month = 'september';
            break;
        case 9:
            month = 'oktober';
            break;
        case 10:
            month = 'november';
            break;
        case 11:
            month = 'december';
            break;
    }
    document.getElementById('vraag7').innerText = `Het is de maand ${month}`;
}

function vraag8() {
    let date = new Date();
    let uur = date.getHours(); // 6
    let dagdeel = '';

    if (uur <= 11 && uur >= 7) {
        dagdeel = 'ochtend';
    } else if (uur >= 12 && uur <= 17) {
        dagdeel = 'middag';
    } else if (uur >= 18 && uur < 7) {
        dagdeel = 'avond'
    }

    switch (dagdeel) {
        case 'ochtend':
            document.getElementById('vraag4').innerText = 'Goedemorgen ' + uur.toString();
            break;
        case 'middag':
            document.getElementById('vraag4').innerText = 'Goede dag ' + uur.toString();
            break;
        case 'avond':
            document.getElementById('vraag4').innerText = 'Goede avond ' + uur.toString();
            break;
    }
}

function vraag9() {
    let getal;

    do {
        getal = parseInt(prompt('Geef een getal tussen 0 en 10 in'));
    } while (getal < 0 || getal > 10);

    for (let i = 1; i < 11; i++) {
        console.log(i + ' x ' + getal + ' = ' + i * getal);
    }
}

function vraag10() {
    let hashtags;
    for (let i = 1; i <= 7; i++) {
        hashtags = '';
        for (let j = 0; j < i; j++) {
            hashtags += '#';
        }
        console.log(hashtags);
    }
}

function vraag10b() {
    for (let i = 1; i <= 7; i++) {
        console.log('#'.repeat(i));
    }
}

function vraag11() {
    let aantalLijnen;
    do {
        aantalLijnen = parseInt(prompt('Geef een getal tussen 0 en 10 in'));
    } while (aantalLijnen < 0 || aantalLijnen > 10);
    for (let i = 1; i <= aantalLijnen; i++) {
        console.log('#'.repeat(i));
    }
}

function vraag12() {
    let aantalLijnen = prompt('Geef een getal');
    let karakter = '#';
    let num = '';
    let spatie = ' ';
    let spaties;
    let aantalSpaces = aantalLijnen - 1;

    for (let i = 1; i <= aantalLijnen; i++) {
        num = num + karakter;
        spaties = spatie.repeat(aantalSpaces);
        console.log(spaties + num);
        aantalSpaces = aantalSpaces - 1;
    }
}

function vraag13(){
    let aantalLijnen = prompt('Geef het aantal lijnen in');
    let karakter = '#';
    let num = '';
    let spatie = ' ';
    let spaties;
    let aantalSpaces = aantalLijnen - 1;
    for (let i = 1; i <= aantalLijnen; i++) {
        num = num + karakter;
        spaties = spatie.repeat(aantalSpaces);
        console.log(spaties + num + karakter.repeat(i-1));
        aantalSpaces = aantalSpaces - 1;

    }
}