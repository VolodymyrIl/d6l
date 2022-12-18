/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area"
 , che riceve due parametri (l1, l2)
  e calcola l'area del rettangolo associato..
*/

const area  = function(l1,l2){
  return l1*l2r
}
const risultatoArea= (3,4);
console.log("esercizio 1 ",risultatoArea)


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum",
  che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri,
  ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum= function(n1,n2){
  if(n1===n2){
    return (n1+n2)*3;
  }else{
    return n1+n2;
  }
}
console.log("esercizio 2 ",crazySum(4,4))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" 
 che calcola la differenza assoluta tra un numero fornito come parametro e 19.

 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff= function(numerofornito){
  if(numerofornito>19){
    return Math.abs(numerofornito-19)*3
  }else if (numerofornito<=19){
    return Math.abs(numerofornito-19)
  }
}
console.log("esercizio 3 ",crazyDiff(6))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary"
  che accetta un numero intero n come parametro,
   e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function(numeroIntero){
  if (numeroIntero>20 && numeroIntero <=100||numeroIntero===400){
    return true
  } else{
    return false
  }
}
console.log("esercizio 4 ",boundary(21))



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function(stringa){
  if(stringa.startsWith("EPICODE")){
    return stringa
  }else {
    return "EPICODE" + stringa
  }
}
console.log("esercizio 5 ",epify("EPICODE"))
console.log("esercizio 5 ",epify(" saluta a tutti"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
  La funzione deve controllare che il parametro sia un multiplodi 3 o di 7.
   (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function(numeroPositivo){
  if(numeroPositivo>=0 &&(numeroPositivo%3===0 ||numeroPositivo%7===0)){
    return true
  }else {
    return false
  }
}
console.log("esercizio 6 ",check3and7(30))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString",
  il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function(unaStringa){
  let splittiamo = unaStringa.split("");
  let reverseString = splittiamo.reverse();
  let uniamo =reverseString.join("");
  return uniamo

}
console.log("esercizio 7 ",reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.

const upperFirst = function(stringg){
  let ingrandiamo = toUpperCasa.stringg;
  return ingrandiamo

}
console.log(upperFirst("ciao belli"))*/


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", 
 che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function(stringapici){
return stringapici.slice(1, stringapici.length -1)
}
console.log("esercizio 9 ",cutString("VIVAMILAN"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/