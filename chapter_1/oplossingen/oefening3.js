let getal;
do {
    getal = prompt('Geef een getal in');
    getal = parseInt(getal); // optioneel
} while (getal < 0 || getal > 5);