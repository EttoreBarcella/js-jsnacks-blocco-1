// Crea un array di numeri interi 
// e fai la somma di tutti gli elementi  che sono in posizione dispari

// Creo array di numeri interi
const numberList = [1 , 2 , 3 , 4 , 5]

// faccio la somma degli indici in posizione dispari => 2 e 4
let sum = 0
for (let i = 0 ; i < numberList.length ; i++){
    // SE i === 1 allora dispari e sommo a variabile Sum che è contenitore dei miei indici dispari
    if (i % 2 === 1){
        sum += numberList[i]
    }
}
// Stampo la somma
console.log(sum)
