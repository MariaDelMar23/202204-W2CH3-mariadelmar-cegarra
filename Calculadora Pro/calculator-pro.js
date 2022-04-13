calcularYMostrar(pedirNumero())

//Recoge los numeros introducidos por el usuario. 
//Si introduce algo que no sean numeros, se alerta y vuelve a pedir más valores. 
//Recoge números hasta que el usuario aprieta "Cancelar"
function pedirNumero() {
    debugger
    let newNumber;
    let numberList = [];

    do {
        newNumber = prompt('Enter a number or press cancel to stop.');
        if (isANumber(newNumber)) {
            numberList.push(parseFloat(newNumber, 10))
        } else {
            if (newNumber!==null){
                alert('Please introduce only numbers, not text or symbols.')
            }
        }
    } while (newNumber !== null)
    return numberList
}

//Comprueba si el numero introducido es o no un numero
function isANumber(numero) {
    return /^\d+$/.test(numero)
}

//Calcula los resultados dependiendo 
// de si hay uno o más numeros introducidos y 
//los muestra en la consola.
function calcularYMostrar(numeroIntroducido) {
    debugger
    let resultado;
    if (numeroIntroducido.length === 1) {
        //Aqui se almacena el resultado en una array
        resultado = parseFloat([Math.sqrt(numeroIntroducido[0]).toFixed(3)])
        //Se muestra el resultado al usuario
        console.log(`The result of the square root of ${numeroIntroducido[0]} is ${resultado}.`)
    } else {
        let resultSum = numeroIntroducido[0];
        let resultRest = numeroIntroducido[0];
        let resultMult = numeroIntroducido[0];
        let resultDiv = numeroIntroducido[0];
        //Calculamos iniciando con el primer numero de nuestro array,
        //operandolo con el siguiente y continuando con el resultado.
        for (let i = 1; i<numeroIntroducido.length; i++){
            resultSum += numeroIntroducido[i]
            resultRest -= numeroIntroducido[i]
            resultMult *= numeroIntroducido[i]
            resultDiv /= numeroIntroducido[i]
        }
        //Aqui se almacena el conjunto de resultados en una array
        resultado = [resultSum, resultRest, resultMult, parseFloat(resultDiv.toFixed(3))]
        //Se muestran los resultados al usuario
        console.log(`These are the results for ${numeroIntroducido.join(', ')}:`)
        console.log(`The result of the sum is ${resultSum}.`)
        console.log(`The result of the rest is ${resultRest}.`)
        console.log(`The result of the multiplication is ${resultMult}.`)
        console.log(`The result of the division is ${resultDiv.toFixed(3)}.`)
    }
}


