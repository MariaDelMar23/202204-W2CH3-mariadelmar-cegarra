let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];


//********************************
pedirNombre()
mostrarVuelos()
costeMedio()
cuantosEscalas()
ultimos5Destinos()
//******************************** 



function pedirNombre() {
    const name = prompt('Escriba su nombre');
    const nombre = name[0].toUpperCase() + name.slice(1);;
    if (name !== null && name !== ''){
        alert(`Bienvenido, ${nombre}!`);
    } else {
        alert('Bienvenido, anónimo!');
    }
}



function mostrarVuelos(){
    console.log('A continuacion le mostramos los vuelos de hoy:')
    console.log('**********************')
    for (let i = 0; i<10; i++){
        if (flights[i]['scale'] === false){
            console.log(`El vuelo con origen: ${flights[i]['from']}, y destino: ${flights[i]['to']} tiene un coste de ${flights[i]['cost']} y no realiza ninguna escala.`)
        }else{
            console.log(`El vuelo con origen: ${flights[i]['from']}, y destino: ${flights[i]['to']} tiene un coste de ${flights[i]['cost']} y realiza como mínimo una escala.`)
        }
    } console.log('**********************')   
}



function costeMedio(){
    let costeTotal=0
    for (let i = 0; i<10; i++){
        costeTotal+= flights[i]['cost']
    }
costeMedio=costeTotal/10
console.log(`El coste medio del coste de los vuelos es ${costeMedio}.`)
}



function cuantosEscalas(){
    let escalas=0
    for (let i = 0; i<10; i++){
        if (flights[i]['scale'] === true){
            escalas += 1
        }
    }
console.log(`Hay ${escalas} vuelos que tienen escalas.`)
}

function ultimos5Destinos(){
    console.log(`Los últimos 5 destinos para el día de hoy son: ${flights[5]['to']}, ${flights[6]['to']}, ${flights[7]['to']}, ${flights[8]['to']} y ${flights[9]['to']}`)
}
