 let fullName = prompt('What is your name?');
 if ( fullName === ''){
     fullName = 'random guest'
 }

/* Prompt siempre recoge strings. Para pasar de un numero de string a int:
    --> +prompt()
        - parseInt(prompt())
        - Number(prompt())
     */
    
const yearOfBirth = +prompt('Year of Birth?');
const userHobbies = getUserHobbies();

console.log('Name:' + fullName)
console.log('Age:' + getAgeFromYearOfBirth(yearOfBirth));
console.log('Hobbies list:' );
printUserHobbies(userHobbies);

function getAgeFromYearOfBirth(year){
    const currentDate = new Date();
    return currentDate.getFullYear() - year;
}

function getUserHobbies(){
    const hobbies = [];
    let hobby;
    do{
        hobby = prompt('Write a hobby or press cancel');
        if (hobby!== null){
            hobbies.push(hobby)
        }
    } while(hobby !== null);
    return hobbies;
}

/* forEach es una funcion de arrays que recorre todos los elementos de una array.
    Podemos usarla por si misma, no hace falta que este dentro de una funcion
    (al igual que map y las demas funciones built-in)*/

function printUserHobbies(hobbies){
    hobbies.forEach(hobby => {
        console.log('- ' + hobby)
    });
}