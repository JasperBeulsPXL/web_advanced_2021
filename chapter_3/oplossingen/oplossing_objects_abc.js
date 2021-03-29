window.onload = function () {
    oefening3();
}

function oefening1() {
    let persoon = {naam: 'achternaam', voornaam: 'Peter', email: 'Peter@pxl.be'};
    console.log('De naam van de persoon is: ' + persoon.naam);
    console.log('De voornaam van de persoon is: ' + persoon.voornaam);
    document.getElementById('naamtd').innerText = persoon.naam;
    document.getElementById('voornaamtd').innerText = persoon.voornaam;
    document.getElementById('emailtd').innerText = persoon.email;
    document.getElementsByClassName('data')[0].innerHTML = persoon.naam;
    document.getElementsByClassName('data')[1].innerHTML = persoon.voornaam;
    document.getElementsByClassName('data')[2].innerHTML = persoon.email;
    /*document.getElementsByClassName('data').forEach((element)=>{
        element.innerHTML = persoon.naam;
    })*/
}

function oefening2() {
    let persoon = {
        naam: 'achternaam',
        voornaam: 'Peter',
        email: 'Peter@pxl.be',
        zinvorm: function () {
            return `Mijn naam is ${this.voornaam} ${this.naam} en mijn email is ${this.email}`
        }
    };
    document.getElementById('persoon').innerText = persoon.zinvorm()

    console.log(Object.entries(persoon));
}

function oefening3() {
    let persoon = {
        naam: 'achternaam',
        voornaam: 'Peter',
        email: 'Peter@pxl.be',
        zinvorm: function () {
            return `Mijn naam is ${this.voornaam} ${this.naam} en mijn email is ${this.email}`
        },
        lengte: 180,
        gewicht: 70,
        leeftijd: 19
    };
    let objectkeys = Object.keys(persoon);
    let objectValues = Object.values(persoon);
    let ul = document.createElement('ul');
    for (let i = 0; i < objectkeys.length; i++) {
        let li = document.createElement('li');
        let innerText = '';
        console.log(objectkeys[i]);
        if(objectkeys[i] === 'zinvorm'){
            innerText = objectkeys[i] + ' ' + objectValues[i]();
        }else{
            innerText = objectkeys[i] + ' ' + objectValues[i];
        }
        li.textContent = innerText;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);

}