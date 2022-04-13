let flights = [

    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];



function pedirNombre(name) {

    if (name !== null && name !== '') {
        const nombre = name[0].toUpperCase() + name.slice(1);
        return nombre
    } 
    return "anonimo"
}

function costeMedio() {
    let costeTotal = 0;
    for (let i = 0; i < flights.length; i++) {
        costeTotal += flights[i].cost;
    }
    const costeMedioVuelos = (costeTotal / flights.length).toFixed(2);
    return costeMedioVuelos
}



function cuantosEscalas() {
    let escalas = 0;
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            escalas += 1;
        }
    }
    return escalas
}



function preguntarRol(rol) {
    if (rol === null) {
        preguntarRol();
    } else if (rol.toUpperCase() !== "USER" && rol.toUpperCase() !== "ADMIN") {
        preguntarRol();
    } else {
        return rol.toUpperCase();
}



function preguntarAccion(accion) {
    if (accion !== null) {
        if (accion.toUpperCase() !== "CREAR" && accion.toUpperCase() !== "ELIMINAR") {
            preguntarAccion();
        } else {
            return accion.toUpperCase();
        }
    } else {
        return accion;
    }
}


function accionesAdmin(to, from, cost, scale,idABorrar) {
    const accionPreguntada = preguntarAccion();
    if (accionPreguntada !== null) {
        if (accionPreguntada === "CREAR") {
            if (flights.length < 15) {
                const newFlight = {};
                newFlight.to = to;
                newFlight.from = from;
                newFlight.cost = cost;
                newFlight.scale = scale;
                newFlight.id = flights[flights.length - 1].id + 1;
                flights.push(newFlight);
            } 
            mostrarVuelos();
        } else if (accionPreguntada === 'ELIMINAR') {
            let longitudFlights = flights.length
            for (let i = 0; i < longitudFlights; i++) {
                if (flights[i].id === idABorrar) {
                    flights.splice(i, 1);
                    longitudFlights--
                }
            }
           
        accionesAdmin()
    }
}
}



function accionesUser() {
    const precioPedido = prompt('Cuánto quiere gastarse en el vuelo?');
    let idDisponible = [];
    flights.forEach(flight => {
        if (flight.cost <= precioPedido) {
            idDisponible.push(flight['id']);
            if (flight['scale'] === false) {
                console.log(`Vuelo con número: ${flight.id}. Con origen en ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} y ninguna escala.`);
            } else {
                console.log(`Vuelo con número: ${flight.id}. Con origen en ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} y mínimo una escala.`);
            }
        }
    });
    if (idDisponible.length === 0) {
        alert('Lamentamos no tener vuelos disponibles.\n Gracias por su visita, vuelva pronto.');
    } else {
        comprarVuelo(idDisponible);
        // const idAComprar = prompt('Qué vuelo quiere comprar? Escriba su número en la cajita.')
        // if (idAComprar in idDisponible){
        // alert('Gracias por su compra, vuelva pronto.')
        // }else if (idAComprar === null){
        // alert('Gracias por su visita, vuelva pronto.')
        // }else{
        // idAComprar = prompt('El vuelo introducido no está disponible, introduzca de nuevo el número del vuelo que desea comprar. \n Si no quiere comprar ninguno, pulse Cancelar.')
        // }
    }
}



function comprarVuelo(idDisponible) {
    const idAComprar = prompt('Qué vuelo desea comprar? Escriba su número en la cajita.\n Si no quiere comprar ninguno, pulse Cancelar.');
    if (idDisponible.includes(parseInt(idAComprar))) {
        alert('Gracias por su compra, vuelva pronto.');
    } else if (idAComprar === null) {
        alert('Gracias por su visita, vuelva pronto.');
    } else {
        alert('El vuelo introducido no está disponible, introduzca de nuevo el número del vuelo que desea comprar.');
        comprarVuelo(idDisponible);
    }
}



function funcionesRoles() {
    pedirNombre();
    mostrarVuelos();
    costeMedio()
    cuantosEscalas()
    ultimos5Destinos()
    const rolPreguntado = preguntarRol();
    if (rolPreguntado === 'USER') {
        accionesUser();
    } else {
        accionesAdmin();
    }
}




funcionesRoles();
