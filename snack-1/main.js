// L’utente inserisce due numeri in successione, con due prompt.
const firstNumber = Number(prompt("inserisci il primo numero"))
console.log(firstNumber)
const secondNumber = Number(prompt("inserisci il secondo numero"))
console.log(secondNumber)
// Il software stampa il maggiore.
if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber){
    console.log(secondNumber)
} else{
    console.log("pareggio ritenta")
}
