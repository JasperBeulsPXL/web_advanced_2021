//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// Schrijf een functie 'multiply()'
// 2 parameters (number,number)
// output: De vermenigvuldiging van de twee getallen die als input gegeven werden.
function multiply(a, b) {
    return a * b;
}

// Schrijf een functie 'difference()'
// 1 parameter
// output: Het verschil tussen het ingegeven getal en het getal 100.
function difference(n) {
    return n > 100 ? n - 100 : 100 - n;
}

// Schrijf een functie 'isFifty()'
// 2 parameters
// output: Geeft TRUE terug als één van de getallen '50' is OF de som van de 2 getallen '50' is.
function isFifty(x, y) {
    return ((x === 50 || y === 50) || (x + y === 50));
}

// Schrijf een functie 'startsWithHello()'
// 1 parameter
// output: Als de inputstring begint met 'Hello ', return gewoon de string. Begint ze niet met 'Hello ', plak dit er dan voor.
function startsWithHello(sentence) {
    if (!sentence || sentence.substring(0, 6) === 'Hello ') {
        return sentence;
    }
    return 'Hello ' + sentence;
}

// Schrijf een functie 'removeCharacter()'
// 2 parameters (string, number)
// output: Verwijder het zoveelste karakter uit je string en print de nieuwe string (met dus 1 karakter minder)
// TIP: Kijk naar String.substring of String.slice
function removeCharacter(str, position) {
    let part1 = str.substring(0, position);
    let part2 = str.substring(position + 1, str.length);
    return (part1 + part2);
}

// OF
function removeCharacter2(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
}

// Schrijf een functie 'capitalizeEveryWord()'. 
// 1 parameter (string)
// output: Elk woord in de inputstring start met een hoofdletter, de rest van de letters zijn een kleine letter.
// TIP: Zoek String.prototype.split() , String.charAt() , String.substring() en String.join() op
function capitalizeEveryWord(sentence) {
    let splitStr = sentence.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

// Schrijf een functie 'countVowels()'.
// 1 parameter (string)
// output: Het aantal klinkers dat voorkomt in de input string.
// TIP: Loop over je string en kijk voor elke letter of die overeen komt met één van de klinkers.
function countVowels(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u')
            count = count + 1;
    }
    return count;
}

// Schrijf een functie 'maxValue()'
// 3 parameters
// output: De functie geeft het grootste getal van de 3 als resultaat
function maxValue(x, y, z) {
    let largestNumber = x;
    if (y > largestNumber) {
        largestNumber = y;
    }
    if (z > largestNumber) {
        largestNumber = z;
    }
    return largestNumber; // of: Math.max(x,y,z)
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

// Vraag 1a
function printDriehoek(numberOfCharacters){
    let output = '';
    for (let i = 0; i <= numberOfCharacters; i++) {
        for (let j = 0; j < i; j++) {
            output += '#';
        }
        console.log(output);
        output = '';
    }
}
printDriehoek(7);

// Vraag 1b
function printDriehoekOmgekeerd(numberOfCharacters) {
    for (let i = 0; i < numberOfCharacters; i++) {
        let output = '';
        for (let j = 1; j < numberOfCharacters-i; j++) {
            output = output + ' ';
        }
        for (let k = 1; k <= (i+1); k++) {
            output = output + '#';
        }
        console.log(output);
    }
}
printDriehoekOmgekeerd(7);

// Vraag 1c
function printDriehoekPyramide(numberOfCharacters) {
    for (let i = 0; i < numberOfCharacters; i++) {
        let output = '';
        for (let j = 1; j < numberOfCharacters-i; j++) {
            output = output + ' ';
        }
        for (let k = 1; k <= (2*i+1); k++) {
            output = output + '#';
        }
        console.log(output);
    }
}
printDriehoekPyramide(7);

// Vraag 1d
function printDriehoekPyramideInterval(numberOfCharacters, interval) {
    let count = 0;
    for (let i = 0; i < numberOfCharacters; i++) {
        let output = '';
        for (let j = 1; j < numberOfCharacters-i; j++) {
            output = output + ' ';
        }
        for (let k = 1; k <= (2*i+1); k++) {
            if (count % interval === 0){
                output += '@';
            }else{
                output = output + '#';
            }
            count++;
        }
        console.log(output);
    }
}
printDriehoekPyramideInterval(7, 5);

// Vraag 2
function printGetallen() {
    let output = '';
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0){
            output += 'Fizz';
        }else if (i % 3 !== 0 && i % 5 === 0){
            output += 'Buzz';
        }else if (i % 3 === 0 && i % 5 === 0){
            output += 'FizzBuzz';
        }else{
            output += i + '';
        }
    }
    console.log(output);
}
printGetallen();

// Vraag 3
function schaakBord(grootte) {
    let output;
    for (let i = 0; i < 10; i++) {
        output = '';
        for (let j = 0; j < grootte; j++) {
            if (j % 2 === 0){
                output += '#';
            }else{
                output += ' ';
            }
        }
        console.log(output);
    }
}
schaakBord(8);