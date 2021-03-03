let firstSentence = 'Dit is de eerste zin';
let secondSentence = 'Dit is de tweede zin';
let thirdSentence = 'Dit is de derde zin';

console.log('eerste zin: ', firstSentence);
console.log('tweede zin: ', secondSentence);
console.log('derde zin: ', thirdSentence);

document.getElementsByClassName('first_sentence').innerText = firstSentence;
document.getElementsByClassName('second_sentence').innerText = secondSentence;
document.getElementsByClassName('third_sentence').innerText = thirdSentence;