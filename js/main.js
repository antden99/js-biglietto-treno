console.log("tutto ok")

// Chiedo all'utente di inserire i km che desidera percorrere
const distance = prompt("Inserisci i km che desireri percorrere");
console.log(distance);

// Chiedo all'utente di inserire la sua età
const age = prompt("Inserisci la tua età");
console.log(age);

// Calcolo il prezzo del biglietto, moltiplicando la distanza da percorrere per il prezzo a km
const price = (distance * 0.21);
console.log(price);

// Applico uno sconto attraverso un if se vengono rispettati determinati requisiti
if (age < 18) {
    let final = price - (price * 0.20);
    console.log(final);
} else if (age > 65) {
    let final = price - (price * 0.40);
    console.log(final);
} else {
    console.log(price);
}
