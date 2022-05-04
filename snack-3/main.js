// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

// chiedo all'utente per un ciclo di n=10 volte di inserire un numero
let sumNumber = 0

for (let i = 0 ; i < 10 ; i++){
    let askNumber = Number(prompt("scrivi un numero"))
    // faccio la somma di tutti i numeri
    sumNumber += askNumber
    // stampo il risultato
    console.log(sumNumber)
}

