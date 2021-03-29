window.onload = function () {
    oefening9();
}

function oefening1() {
    let opleiding = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding3'];
    console.log(opleiding.length);
}

function oefening2() {
    let opleiding = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding3'];
    opleiding.push('multimedia', 'communicatie');
    console.log(opleiding, opleiding.length);
}

function oefening3() {
    let opleiding = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding3'];

    console.log(opleiding.join('\n'));
}

function oefening4() {
    const hondenrassen = ['hond1', 'hond2', 'hond3', 'hond4', 'hond5', 'hond6', 'hond7'];
    let vraag = prompt('Geef een random getal tussen 1 en 10'); // 3
    let hond = hondenrassen[vraag - 1];

    console.log(hond);
}

function oefening5() {
    const hondenrassen = ['hond1', 'hond2', 'hond3', 'hond4', 'hond5', 'hond6', 'hond7'];
    hondenrassen.unshift('hond8', 'hond9', 'hond10');
    console.log(hondenrassen);
}

function oefening6() {
    const hondenrassen = ['hond1', 'hond2', 'hond3', 'hond4', 'hond5', 'hond6', 'hond7'];
    hondenrassen.shift();
    hondenrassen.pop();
    console.log(hondenrassen);
}

function oefening7() {
    let fruits = ['banaan', 'mango', 'appel', 'peer'];
    fruits.splice(0, 1, 'kiwi');
    fruits.splice(3, 1);
    console.log(fruits);
}

function oefening8() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= numberOfDays; i++) {
        console.log(i + '/03/2021');
    }

}

function oefening9() {
    let dagenPerMaand = [30, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
    let dagenVanDeWeek = ['zo', 'ma', 'di', 'woe', 'do', 'vr', 'za'];

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // Huidige maand, maart

    let startDay = new Date(currentYear, currentMonth, 1).getDay(); // 1

    // manier 1
    /*for (let i = 1; i <= numberOfDays; i++) {
        if(startDay > 6){
            startDay = 0;
        }
        console.log( dagenVanDeWeek[startDay] + ', ' + i+'/03/2021'); // ma, 1/03/2021
        startDay += 1; // 3
    }*/

    // manier 2
    console.log('sanity check', )
        for (let i = 0; i < numberOfDays; i++) {
            console.log(dagenVanDeWeek[(startDay + i) % 7] + ', ' + (i + 1) + '/' + currentMonth + '/' + currentYear);
        }
}