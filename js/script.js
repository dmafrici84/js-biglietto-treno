// il programma calcola il prezzo del biglietto del treno
// in base all'età e ai km che l'utente vuole percorrere
// se l'utente è minorenne sconto 20%
// se l'utente è over 65 sconto 40%

var euroAlkm = 0.21;
var prezzoScontato;
var prezzoFinale;
// Chiedere all'utente i Km che vuole percorrere

var percorso = parseInt(prompt("Inserisci i km del tuo viaggio"), 10);

document.getElementById('js-km').innerHTML = "Km da percorrere: " + percorso + " Km";

console.log(percorso);

// Chiedere all'utente l'età

var eta = parseInt(prompt("Inserisci la tua età"), 10);

document.getElementById('js-eta').innerHTML = "Età: " + eta + " anni";

console.log(eta);

// Calcolo del prezzo del Biglietto

var prezzo = euroAlkm * percorso;

// calcolo sconti

if (eta < 18) {

  prezzoScontato = prezzo * 80 / 100;
  prezzoFinale = prezzoScontato.toFixed(2);

  // Autput per l'utente

  document.getElementById('js-sconto').innerHTML = "Complimenti sei minorenne !!! Hai ottenuto uno sconto del 20% !!!";
  document.getElementById('js-prezzo').innerHTML = prezzoFinale + " euro";

} else if (eta > 65) {

  prezzoScontato = prezzo * 60 / 100;
  prezzoFinale = prezzoScontato.toFixed(2);

  // Autput per l'utente

  document.getElementById('js-sconto').innerHTML = "Complimenti sei un Over65 !!! Hai ottenuto uno sconto del 40% !!! ";
  document.getElementById('js-prezzo').innerHTML = prezzoFinale + " euro";

} else {

  prezzoFinale = prezzo.toFixed(2);

  // Autput per l'utente

  document.getElementById('js-prezzo').innerHTML =   prezzoFinale + " euro";

}
