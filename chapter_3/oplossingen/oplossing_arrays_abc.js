window.onload = function () {
    oefening9();
}

function oefening1() {
    let digital = ['toegepaste-informatica', 'elektronica-ict', 'software-management', 'systeem & netwerkbeheer'];
    console.log('Het aantal items in de array zijn: ' + digital.length);
}

function oefening2() {
    let digital = ['toegepaste-informatica', 'elektronica-ict', 'software-management', 'systeem & netwerkbeheer'];
    digital.push('multimedia');
    console.log('Het aantal items in de ' + digital + ' array zijn: ' + digital.length);
}

function oefening3() {
    let digital = ['toegepaste-informatica', 'elektronica-ict', 'software-management', 'systeem & netwerkbeheer'];
    console.log(digital.join('\n'));
}

function oefening4() {
    let honden = ['golden retriever', 'labrador', 'chihuaua', 'dobberman', 'golden retriever', 'labrador', 'chihuaua', 'dobberman', 'chihuaua', 'dobberman'];
    let randomGetal;
    do {
        randomGetal = parseInt(prompt('Geef een random getal in'));
    } while (randomGetal < 1 || randomGetal > 10);

    let hondenString = honden[randomGetal - 1];
    document.getElementById('resultaat').innerText = 'Je koos ' + hondenString;
}

function oefening5() {
    let honden = ['golden retriever', 'labrador', 'chihuaua', 'dobberman', 'golden retriever', 'labrador', 'chihuaua', 'dobberman', 'chihuaua', 'dobberman'];
    honden.unshift('ras11', 'ras12', 'ras13', 'ras14', 'ras15');
    console.log(honden);
}

function oefening6() {
    let honden = ['golden retriever', 'labrador', 'chihuaua', 'dobberman', 'golden retriever', 'labrador', 'chihuaua', 'dobberman', 'chihuaua', 'dobberman'];
    honden.shift();
    honden.pop();
    console.log(honden);
}

function oefening7() {
    let honden = ['golden retriever', 'labrador', 'chihuaua', 'dobberman', 'golden retriever', 'labrador', 'chihuaua', 'dobberman', 'chihuaua', 'dobberman'];

    honden.splice(2, 0, 'jack russel', 'poedel');
    document.getElementById('resultaat').innerHTML = honden;
}

function oefening8() {
    let dagenPerMaand = [30, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
    for (let i = 0; i < dagenPerMaand.length; i++) {
        for (let j = 1; j <= dagenPerMaand[i]; j++) {
            console.log(`${j}/${i + 1}/2021`);

        }
    }

}
function oefening8b() {
    let date = new Date(2021, 0, 1),
        year = 2021,
        aantalDagenPerMaan = [],
        weekDagen = [];

    let i = 0;
    while (date.getFullYear() == year) {
        console.log("maand " + (date.getMonth() + 1));
        let maand = date.getMonth();
        while (date.getMonth() == maand) {
            console.log(`${dagen(date.getDay())}  ${date.getDay() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`);

            if (!aantalDagenPerMaan[i]) {
                aantalDagenPerMaan[i] = 0;
            }
            aantalDagenPerMaan[i]++;
            date.setDate(date.getDate() + 1);
        }
        console.log("Aaantal dagen in de maand is " + aantalDagenPerMaan[i]);
        console.log('\n');
        i++;
    }

    function dagen(dag) {
        switch (dag) {
            case 1:
                return "MAANDAG";
                break;
            case 2:
                return "din";
                break;
            case 3:
                return "won";
                break;
            case 4:
                return "don";
                break;
            case 5:
                return "vrij";
                break;
            case 6:
                return "zat";
                break;
            default:
                return "zon";
                break;
        }
    }
}

function oefening9(){
    let dagenPerMaand = [30, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
    let dagenVanDeWeek = ['zo','ma', 'di', 'woe', 'do', 'vr', 'za'];
    let datum = new Date();
    let maand = datum.getMonth();
    let jaar = datum.getFullYear();

    let dagNaam = dagenVanDeWeek[datum.getDay()];
    for (let i = 0; i < dagenPerMaand[datum.getMonth()]; i++){
        dagNaam = dagenVanDeWeek[i % 7];
        console.log(`${dagNaam}, ${i+1}/${maand+1}/${jaar}`);
    }

}