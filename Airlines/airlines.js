const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function pedirNombre(name) {
  let nombre = name[0].toUpperCase() + name.slice(1);

  if (name !== null && name !== "") {
    return nombre;
  }
  nombre = "anonimo";
  return nombre;
}

function costeMedio() {
  let costeTotal = 0;
  for (let i = 0; i < 10; i++) {
    costeTotal += flights[i].cost;
  }
  const costeMedioVuelos = costeTotal / 10;
  return costeMedioVuelos;
}

function cuantosEscalas() {
  let escalas = 0;
  for (let i = 0; i < 10; i++) {
    if (flights[i].scale === true) {
      escalas += 1;
    }
  }
}

function ultimos5Destinos() {
  const ultimos5 = slice(-5);
  return ultimos5;
}

pedirNombre();
costeMedio();
cuantosEscalas();
ultimos5Destinos();
