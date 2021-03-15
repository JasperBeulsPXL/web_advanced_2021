alert('Welkom');

// Oefening 3
let randomGetal = prompt('Geef een random getal tussen 1 en 5', '1');

while(randomGetal > 5 || randomGetal < 1){
    randomGetal = prompt('Het getal lag niet tussen 1 en 5, geef aan ander getal in', '1');
}
