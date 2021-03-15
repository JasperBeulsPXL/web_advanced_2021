let zin1, zin2,zin3;
zin1 = 'dit is de eerste zin';
zin2 = 'dit is de tweede zin';
zin3 = 'dit is de derde zin';

console.log(zin1);
console.log(zin2);
console.log(zin3);

document.getElementById('zin1').innerHTML = zin1;
document.getElementById('zin2').innerHTML = zin2;
document.getElementById('zin3').innerHTML = zin3;

let langeZin = zin1 + ' ' + zin2 + ' ' + zin3;
console.log(langeZin);
alert(langeZin);

// Oefening 3
let koekje = 'Ik wil een koekje';
let uitkomst;

uitkomst = koekje.charAt(0);
uitkomst = koekje.charAt(3);
console.log(koekje.lastIndexOf('k'));
console.log(koekje.lastIndexOf('e'));
console.log(koekje.length);

// Oefening 4
let lasagne = koekje.replace('koekje', 'lasagne van de PXL').toUpperCase();
console.log(lasagne);

// Oefening 5
let woord = prompt('Geef een random woord in');
alert(woord.length);

// Oefening 6
let zin = prompt('Geef een random zin in');
let uitkomst;

uitkomst = zin.indexOf(' ');
window.alert('De eerste spatie staat op positie: ' + ' ' + uitkomst);
window.alert(`De eerste spatie staat op positie: ${uitkomst} .`);

// Oefening 7
let getal1 = prompt('Geef het eerste getal in');
const getal3 = 14;
let getal2 = prompt('Geef het tweede getal in');

let uitkomst = parseFloat(getal1) * parseFloat(getal2);
document.getElementById('uitkomst').innerHTML = uitkomst;

// Oefening 8
let leeftijd = prompt('Geef je leeftijd in');

if(leeftijd < 18){
    alert('Probeer het volgend jaar opnieuw');
}else{
    alert('Welkom!')
}


