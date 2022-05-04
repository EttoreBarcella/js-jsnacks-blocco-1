// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero
// se è dispari inseriscilo nell’array.


// Creo array vuoto che verrà riempito
const emptyList = [] 
// Creo ciclo n=6 volte
for (let i = 0; i < 6 ; i++){
    // Chiedo all'utente di inserire il numero
    let addNumber=Number(prompt("inserisci un numero"))
    // SE il numero è dispari aggiungo a emptyList il numero scelto => addNumber
    if (addNumber % 2 !== 0 ) {
        emptyList.push (addNumber)
    }
}
// Stampo i numero dispari in console
console.log(emptyList)

