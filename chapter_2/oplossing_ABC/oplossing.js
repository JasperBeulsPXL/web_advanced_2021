let zin1 = 'Dit is de eerste zin';
let zin2 = 'Dit is de tweede zin';
let zin3 = 'Dit is de derde zin';

document.getElementById('zin1').innerHTML = zin1;
document.getElementById('zin2').innerHTML = zin2;
document.getElementById('zin3').innerText = zin3;

console.log(zin1);
console.log(zin2);
console.log(zin3);

// Oefening 2
let zinnen = zin1 + ' ' + zin2 + ' ' + zin3;
alert(zinnen);
document.getElementById('zinnen').innerHTML = zinnen;

// Oefening 3
let zin = 'ik wil een koekje';
console.log(zin.charAt(0));
console.log(zin.charAt(3));
console.log(zin.lastIndexOf('k'));
console.log(zin.lastIndexOf('e'));
console.log(zin.length);

// Oefening 4
let lasagne = zin.replace('koekje','lasagne van PXL catering').toUpperCase();
console.log(lasagne);

// Oefening 5
let woord = prompt('Geef een random woord in');
alert('het woord bestaat uit' + woord.length + ' karakters');

// Oefening 6
let random = prompt('Geef een random zin in');
let uitkomst = random.indexOf(' ') + 1;
alert('De eerste spatie van de zin staat op positie: ' + uitkomst);

// Oefening 9
let getal1 = parseFloat(prompt('getal 1'));
let getal2 = prompt('getal 2');
getal2 = parseFloat(getal2);

let getal3 = getal1 + getal2;
document.getElementById('multiply').innerHTML = getal3 + '';

// Oefening 10
let leeftijd = parseInt(prompt('Geef je leeftijd in'));
if (leeftijd < 18 && typeof leeftijd == "number"){
    alert('Probeer volgende editie opnieuw');
}