// declare variables
let kmViaggio, userAge, prezzoBiglietto, scontoMinori, scontoOver, messaggio;

// ask the user the number of km to travel
kmViaggio = parseInt(prompt("Inserisci i km del tuo viaggio"));
console.log(kmViaggio);

//ask the age of the passenger
userAge = parseInt(prompt("Inserisci l'età del passeggero"));
console.log(userAge);

// standard ticket price
prezzoBiglietto = (0.21 * kmViaggio);
console.log(prezzoBiglietto);

// passenger age variables
 if (userAge < 18){
    scontoMinori = ((prezzoBiglietto/100) * 20);
    prezzoBiglietto = (prezzoBiglietto - scontoMinori);
    console.log(prezzoBiglietto);
 }else if (userAge > 65){
    scontoOver = ((prezzoBiglietto/100) * 40);
    prezzoBiglietto = (prezzoBiglietto - scontoOver);
    console.log(prezzoBiglietto);
 }else {
    prezzoBiglietto = (0.21 * kmViaggio);
    console.log(prezzoBiglietto);
}

// message for the user
messaggio = `Il prezzo del tuo biglietto è: ${prezzoBiglietto = prezzoBiglietto.toFixed(2)}€`;
console.log(messaggio);


document.getElementById("train").innerHTML = messaggio;

