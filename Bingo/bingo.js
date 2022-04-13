let bingoCard = [

    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    //next line
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    //next line
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false } ];

let playerPoints = [
    {player: 'Tony Stark', points: 850},
    {player: 'Thor Hijo de Odin', points: 740},
    {player: 'Peter Quill (Star-Lord)', points: 330},
    {player: 'Natasha Romanov', points: 790},
    {player: 'Steve Rogers', points: 480},
    {player: 'Peter Parker', points: 570},
    {player: 'Wanda Maximoff', points: 620},
    {player: 'Groot', points: 420}
]

let name = '';
let line = false;
let esBingo = false;
let currentPlayer = '';
let numberOfTurns = 1;
let numbersCreated = [];
let numbersMatched = 0;


function resetVars(){
    bingoCard = [

        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        //next line
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        //next line
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false },
        { number: 0, matched: false } ];
         name = ''
    line = false;
    esBingo = false;
    currentPlayer = '';
    numberOfTurns = 1;
    numbersCreated = [];
    numbersMatched = 0;
    
}


play();


function play(){
    name = askName();
    savePlayer();
    showRanking();
    createCard();
    alert('Tienes 1000 puntos, cada vez que pase un turno se te restaran 10, haz Bingo en el menor número de turnos para ganar!');
    console.log('******* EMPIEZA EL BINGO *******');
    do{
        turn();
    }while(esBingo != true && askTurn())
    //enseñar carton, turnos, ranking, puntos
    showRanking();
    if (esBingo === true){
        alert(`Enhorabuena! Has acabado el Bingo con ${currentPlayer.points} puntos en ${numberOfTurns} turnos.`);
    }
    else{
        alert(`Has hecho `);
    }
    
    if (confirm('Quieres volver a jugar de nuevo?')){
        resetVars();
        play();
    }
    else{
        alert('Hasta la próxima!');
    }
}




function askName(){
    name = prompt('Bienvenido! Como te llamas?');
    if (name === ''){
        askName();
    } else if (name === null){
        alert('Hasta la próxima!');
    }
    return name;
} 



function savePlayer(){
    currentPlayer = playerPoints.find(obj => obj.player === name);
        if (currentPlayer != undefined){
            currentPlayer.points = 1000;
        } else {
            playerPoints.push({player: name, points:1000});
            currentPlayer = playerPoints.find(obj => obj.player === name);
        }
}



function createCard(){
    let numbers=[];
    for (let i=0; i<bingoCard.length; i++){
        let newNumber = 0;
        do{
            newNumber = Math.floor(Math.random() * 100);
        } while (numbers.includes(newNumber) || newNumber == 0)
                
        bingoCard[i].number = newNumber;              
        numbers.push(newNumber);       
        }
    showBingoCard();
    let wantCard = window.prompt('Quieres usar este cartón? (Yes/No)', 'Yes');
    if (wantCard != 'Yes'){
        createCard();
    }
    
}



function showBingoCard(){
    let numbers=[];
    for (i=0; i<bingoCard.length; i++){
        numbers.push(bingoCard[i].number);
    }
    let line1 = numbers.slice(0,  5);
    let line2 = numbers.slice(5, 10);
    let line3 = numbers.slice(10, 15);
    console.table ([line1, line2, line3]);
}



function askTurn(){
    return  confirm('Quieres jugar este turno?');
    
}


function turn(){
    let numberTurn = createNumber();
    console.log(`Bola: ${numberTurn}`);
    alert(`Has sacado el ${numberTurn}. \nTurno ${numberOfTurns}.`);
    compareNumber(numberTurn);
    currentPlayer.points -= 10;
    numberOfTurns++;
}


function createNumber(){
    let newNumber = 0;
        do{
            newNumber = Math.floor(Math.random() * 100);
        } while (numbersCreated.includes(newNumber) || newNumber == 0);          
        numbersCreated.push(newNumber);
        return newNumber;    
        }



function compareNumber(numberTurn){ 
    bingoCard.forEach(bingoNumber => {
        if (numberTurn === bingoNumber.number){
        bingoNumber.matched = true;
        bingoNumber.number = `X${bingoNumber.number}X`;
        numbersMatched++;
            if (line !== true){
                lines();
            } 
            if (esBingo !== true){
                bingo();
            }
            
        showBingoCard();

        }
    });

}


function lines(){
    
    for (let i = 0; i<=10; i+=5){
        if (bingoCard[i].matched && bingoCard[i+1].matched && bingoCard[i+2].matched && bingoCard[i+3].matched && bingoCard[i+4].matched){
        console.log('LINEA!!!');
        alert('LINEA!!!');
        line = true;
        } 
        
    }
}


function bingo(){
    let i=0;
    bingoCard.forEach(bingoNumber => {
        if (bingoNumber.matched === true){
            i++;
        }
    });
    if (i === 15){
        console.log('BINGO!!!');
        alert('BINGO!!!');
        esBingo = true;
    }
}


function showRanking(){
    console.log('**** Ranking de Jugadores ****');
    playerPoints.forEach(player => {
        console.log(player.player + ': ' + player.points +'\n');
    });
    console.log('******************************');
}
