let zin1, zin2, zin3;
zin1 = 'dit is de eerste zin';
zin2 = 'dit is de tweede zin';
zin3 = 'dit is de derde zin';

document.getElementById('zin1').innerHTML = zin1;
document.getElementById('zin2').innerHTML = zin2;
document.getElementById('zin3').innerText = zin3;

console.log(zin1);
console.log(zin2);
console.log(zin3);

// Oefening 2
let array = ['dit is zin 1', 'dit is zin 2', 'dit is zin 3'];
let output;

array.forEach(zin => {
    output += ' ' + zin
});
alert(zin1 + ' ' + zin2 + ' ' + zin3);
alert(`${zin1} dit is een doorlopende tekst ${zin2} en ${zin3}`); // !== ''
alert(output);


// Oefening 3
let koekje = 'Ik wil een koekje';
console.log(koekje.charAt(0));
console.log(koekje.charAt(3));
console.log(koekje.lastIndexOf('k'));
console.log(koekje.lastIndexOf('e'));
console.log(koekje.length);

// Oefening 4
let lasagne = koekje.replace('koekje', 'lasagne van de pxl'); // Ik wil een lasagne van de pxl
document.getElementById('lasagne').innerHTML = lasagne.toUpperCase(); // IK WIL EEN LASAGNE VAN DE PXL

// Oefening 5
let woord = prompt('Geef een woord in');
let lengte = woord.length;
alert(`De lengte van het woord ${woord} is ${lengte} karakters`);

// Oefening 6
let zin = prompt('Geef een zin in');
let indexOfSpace = zin.indexOf(' ') + 1;
console.log('De eerste spatie staat op positie ' + indexOfSpace);


// Oefening 9
let getal1 = parseFloat(prompt('Geef een getal in')); // "5"
let getal2 = prompt('Geef een tweede getal in'); // "7"
let vermenigvuldiging = parseFloat(getal1) * parseFloat(getal2);
let optelling = parseFloat(getal1) + parseFloat(getal2);

let uitkomst = 'De uitkomst van de vermenigvuldiging is: ' + vermenigvuldiging;
document.getElementById('uitkomst').innerText = uitkomst;

// Oefening 10
let oudGenoeg = prompt('Ben je ouder dan 18?');
if(!oudGenoeg === 'ja'){
    alert('Sorry, probeer probeer volgend jaar opnieuw');
}

