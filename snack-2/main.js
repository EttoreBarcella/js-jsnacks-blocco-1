
let firstWord = prompt("inserisci una parola")
let lenghtFirstWord = firstWord.length
console.log(lenghtFirstWord)
let secondWord = prompt("inserisci un'altra parola")
let lenghtSecondWord = secondWord.length
console.log(lenghtSecondWord)

if (lenghtFirstWord > lenghtSecondWord) {
    console.log(firstWord)
} else {
    console.log(secondWord)
}



