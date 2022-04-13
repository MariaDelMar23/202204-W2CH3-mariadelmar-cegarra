calcularYMostrar(pedirNumero())

//Recoge los numeros introducidos por el usuario. 
//Si introduce algo que no sean numeros, se alerta y vuelve a pedir los dos valores. 
//Si el segundo no se rellena o se cancela, se recoge el primer numero introducido. 
function pedirNumero(){
    const numero1 = prompt('Enter a number to start operating.')
    if (isANumber(numero1)){
        const numero2 = prompt('Enter another number. Press "Cancel" or leave blank to get the square root.')
        if (numero2===''||numero2===null){
            return [parseFloat(numero1,10)]
        }else if(isANumber(numero2)){
            return [parseFloat(numero1,10), parseFloat(numero2,10)]
        }else{
            alert('Please enter only a number, not letters or symbols!')
            pedirNumero()
        }
    }else{
        alert('Please enter only a number, not letters or symbols!')
        pedirNumero()
    }

}

//Comprueba si el numero introducido es o no un numero
function isANumber(numero){
    return /^\d+$/.test(numero)
}

//Calcula los resultados dependiendo 
// de si hay uno o dos numeros introducidos y 
//los muestra en la consola.
function calcularYMostrar(numeroIntroducido){
    if (numeroIntroducido.length===1){
        //Aqui se almacena el resultado en una array
        const resultado = parseFloat([Math.sqrt(numeroIntroducido[0]).toFixed(3)])
        //Se muestra el resultado al usuario
        console.log(`The result of the square root of ${numeroIntroducido[0]} is ${resultado}.`)
    }else{
        const resultSum = numeroIntroducido[0] + numeroIntroducido[1]
        const resultRest = numeroIntroducido[0] - numeroIntroducido[1]
        const resultMult = numeroIntroducido[0] * numeroIntroducido[1]
        const resultDiv = parseFloat((numeroIntroducido[0] / numeroIntroducido[1]).toFixed(3))
        //Aqui se almacena el conjunto de resultados en una array
        const resultado = [resultSum, resultRest, resultMult, resultDiv]
        //Se muestran los resultados al usuario
        console.log(`These are the results for ${numeroIntroducido[0]} and ${numeroIntroducido[1]}:`)
        console.log(`The result of the sum is ${resultSum}.`)
        console.log(`The result of the rest is ${resultRest}.`)
        console.log(`The result of the multiplication is ${resultMult}.`)
        console.log(`The result of the division is ${resultDiv}.`)
    }
}



