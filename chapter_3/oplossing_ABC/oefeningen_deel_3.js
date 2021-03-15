// Oefeningen deel 3


// Schrijf een functie 'multiply()'
// 2 parameters (number,number)
// output: De vermenigvuldiging van de twee getallen die als input gegeven werden.
function multiply(num1, num2) {
    return num1 * num2;
}

// Schrijf een functie 'difference()'
// 1 parameter
// output: Het verschil tussen het ingegeven getal en het getal 100.
function difference(getal) {
    return getal - 100;
}

// Schrijf een functie 'isFifty()'
// 2 parameters
// output: Geeft TRUE terug als één van de getallen '50' is OF de som van de 2 getallen '50' is.
function isFifty(getal1, getal2) {
    return (getal1 === 50 || getal2 === 50 || getal1 + getal2 === 50);
}

// Schrijf een functie 'startsWithHello()'
// 1 parameter
// output: Als de inputstring begint met 'Hello ', return gewoon de string. Begint ze niet met 'Hello ', plak dit er dan voor.
function startsWithHello(input) { // Hello, ik ben Jasper
    if (input.substr(0, 5) === 'Hello ') {
        return input;
    } else {
        return 'Hello, ' + input;
    }
}

// Schrijf een functie 'removeCharacter()'
// 2 parameters (string, number)
// output: Verwijder het zoveelste karakter uit je string en print de nieuwe string (met dus 1 karakter minder)
// TIP: Kijk naar String.substring of String.slice
function removeCharacter(zin, nummer) {
    let hulpstring = zin.substr(0, nummer);
    let remaining = zin.substr(nummer + 1);
    // hulpstring = hulpstring.slice(0,-1);

    return hulpstring + remaining;
}

// Schrijf een functie 'capitalizeEveryWord()'.
// 1 parameter (string)
// output: Elk woord in de inputstring start met een hoofdletter, de rest van de letters zijn een kleine letter.
// TIP: Zoek String.prototype.split() , String.charAt() , String.substring() en String.join() op
function captalizeEveryWord(zin) {
    let woorden = zin.split(' ');
    for (let i = 0; i < woorden.length; i++) {
        woorden[i] = woorden[i].charAt(0).toUpperCase() + woorden[i].substring(1).toLowerCase();
    }
    return woorden.join(' ');

}

function captalizeEveryWord2(zin) {
    let woorden = zin.split(' ');
    let resultaat = '';
    for (let i = 0; i < woorden.length; i++) {
        woord = woorden[i].charAt(0).toUpperCase() + woorden[i].slice(1);
        resultaat += woord + ' ';
    }

    return resultaat;
}
console.log(captalizeEveryWord('Dit is een zin'));
// Schrijf een functie 'countVowels()'.
// 1 parameter (string)
// output: Het aantal klinkers dat voorkomt in de input string.
// TIP: Loop over je string en kijk voor elke letter of die overeen komt met één van de klinkers.
function countVowels(woord){
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for (let i = 0; i <woord.length; i++){
        if (vowels.includes(woord.charAt(i).toLowerCase())){
            count++;
        }
    }
    return count;
}

function countVowels2(woord){
    let aantalKlinkers = 0;
    let alpha = woord.split('');
    alpha.forEach(element =>{
        if (element === 'a'||element === 'e'||element === 'i'||element === 'o'||element === 'u'){
            aantalKlinkers++;
        }
    });
    return aantalKlinkers;
}
// Schrijf een functie 'maxValue()'
// 3 parameters
// output: De functie geeft het grootste getal van de 3 als resultaat
function maxValue(getal1,getal2,getal3){
    if(getal1 > getal2){
        if (getal1 > getal3){
            return getal1;
        }else{
            return getal3;
        }
    }else if(getal2 > getal3){
        return getal2;
    }
}

function maxValue2(getal1,getal2,getal3){
    return Math.max(getal1,getal2,getal3);
}
console.log('Output oef 1:', multiply(2, 2), multiply(4, 12));
console.log('Output oef 2:', difference(156), difference(20));
console.log('Output oef 3:', isFifty(15, 35), isFifty(70, -20), isFifty(50, 180), isFifty(10, 12));
console.log('Output oef 4:', startsWithHello('Hello there'), startsWithHello('there'));
console.log('Output oef 5(a):', removeCharacter('Voorbeeld', 1), removeCharacter('Voorbeeld', 4));
console.log('Output oef 5(b):', removeCharacter2('Voorbeeld', 1), removeCharacter2('Voorbeeld', 4));
console.log('Output oef 6:', capitalizeEveryWord('elk woord zou moeten beginnen met een hoofdletter'));
console.log('Output oef 7:', `De inputstring bevat ${countVowels('oefening')} klinkers`);
console.log('Output oef 8:', `Het grootste nummer is ${maxValue(12, 5, 25)}`);



