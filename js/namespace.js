// OBJETO GLOBAL
// Para evitar la colision de nombres
const restaurarApp = {};

restaurarApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 15
    }
];

restaurarApp.funciones = {
    ordenar: id => {
        console.log(`
            Tu platillo: ${restaurarApp.platillos[id].platillo} se esta preparando
        `);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurarApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menú:  `);
        platillos.forEach( (platillo, index) => {
            console.log(`${index} : ${platillo .platillo} $${platillo.precio}`)
        });
    }
}

const {platillos} = restaurarApp;
restaurarApp.funciones.mostrarMenu(platillos);
restaurarApp.funciones.ordenar(1);

restaurarApp.funciones.agregarPlatillo('Pastel', 15);
restaurarApp.funciones.mostrarMenu(platillos);
