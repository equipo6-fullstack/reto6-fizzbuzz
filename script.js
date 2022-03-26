/*1.Crear un método que imprima en consola los números del 1 al 100 tomando en cuenta lo siguiente:
●Si el número es múltiplo de 3, imprimirá ‘Fizz’.
●Si el número es múltiplo de 5, imprimirá ‘Buzz’.
●Si el número es múltiplo de 3 y de 5, imprimirá ‘FizzBuzz’.
●Si el número no es múltiplo de 3 ni de 5, imprimirá el número.*/

fizzbuzz();

function fizzbuzz(){

    let number = "";
    for(let i = 1; i <= 100; i++){
        
        if(i % 3 === 0 && i % 5 ===0){
            console.log("FizzBuzz");
            number += "FizzBuzz" + "<br>";
        }
        else if(i % 3 ===0){
            console.log("Fizz");
            number += "Fizz" + "<br>";
        }
        else if(i % 5 === 0 ){
            console.log("Buzz");
            number += "Buzz" + "<br>";
        }
        else{
            console.log(i);
            number += i + "<br>";
        }   
    }
    
    document.getElementById("solucion").innerHTML = number;
}
