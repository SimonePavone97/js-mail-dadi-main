// MAIL

// 1)Chiedi all’utente la sua email

// 2)controlla che sia nella lista di chi può accedere

// 3)stampa un messaggio appropriato sull’esito del controllo
// (non usare INCLUDES)

let iscritti = [ 
    `antonio@gmail.com`, 
    `francesco@tiscali.it`, 
    `andrea@hotmail.it`, 
    `franca@gmail.com`,
    `simone@hotmail.it`,
    `maddalena@libero.it`,
    `domenica@gmail.com`,
]

let inserisciMail = prompt("inserisci la tua mail");
console.log("la mail inserita è " + inserisciMail);

let mailTrovata = false;

for ( let i=0; i < iscritti.length; i++ ) {

    if ( inserisciMail == iscritti[i] ) {
        mailTrovata = true;
    }
}

if ( mailTrovata == true ) {
    console.log("SEI GIA' REGISTRATO!");
    document.getElementById("risposta_in_uscita").innerHTML = `SEI GIA' REGISTRATO!`;
} else {
    console.log("NON SEI REGISTRATO!");
    document.getElementById("risposta_in_uscita").innerHTML = `NON SEI REGISTRATO!`;
}