// chiedo la prima parola
let firstWord = prompt("inserisci una parola")
// mi segno quanto è lunga
let lenghtFirstWord = firstWord.length
console.log(lenghtFirstWord)
// chiedo la seconda parola
let secondWord = prompt("inserisci un'altra parola")
// mi segno quanto è lunga
let lenghtSecondWord = secondWord.length
console.log(lenghtSecondWord)
// se prima > seconda stampo la prima
// invece se prima < seconda stampo la seconda
// altrimenti se sono uguali scrivo che le parole sono lunghe uguali
if (lenghtFirstWord > lenghtSecondWord) {
    console.log(firstWord)
} else if (lenghtFirstWord < lenghtSecondWord) {
    console.log(secondWord)
} else {
    console.log("le parole sono lunghe uguali")
}



