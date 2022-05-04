// L’utente inserisce due numeri in successione, con due prompt.
const firstNumber = prompt("inserisci il primo numero")
const secondNumber = prompt("inserisci il secondo numero")
// Il software stampa il maggiore.
if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber){
    console.log(secondNumber)
} else{
    console.log("pareggio ritenta")
}
