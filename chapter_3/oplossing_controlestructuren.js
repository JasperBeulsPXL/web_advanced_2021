// Oefening 1
let geboortejaar = parseInt(prompt('Geef je geboortejaar'));
let datum = new Date().getFullYear();
let leeftijd = datum - geboortejaar;
if(leeftijd >= 20){
    alert('Je bent oud genoeg om deze website te bekijken');
}

// Oefening 2
