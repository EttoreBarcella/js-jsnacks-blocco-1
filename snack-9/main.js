// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// creo l'array della prima lista
const firstList = [1 , 3 , 5 , 6 , 7]
// creo l'array della seconda lista
const secondList = [ 2 , 10 , 4 , 5 , 6 , 7 , 8 , 8]
// creo un generatore random di numeri da aggiungere alla lista meno grande
let randomNum = Math.floor(Math.random() * 10);
// creo un ciclo
for (let i = 0 ; i <= firstList.length ; i++){
    // se la seconda lista è più corta allora aggiungo un numero casuale nella seconda lista
    if (secondList.length < firstList.length){
        secondList.push(randomNum)
    // se la prima lista è più corta allora aggiungo un numero casuale nella prima lista
    } else if (secondList.length > firstList.length){
        firstList.push(randomNum)
    }
}
// Stampo la prima lista in console
console.log(firstList)
// Stampo la seconda lista in console
console.log(secondList)
