
const Vendedor = function(nombre){
    this.nombre = nombre;
    
}

const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;

}
Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en $${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador} (sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre}: ${mensaje}`)
    } 
}

// subaste es el mediador
// es la que controla los objetos 
// vendedores y compadores 
const Subasta = function(){
    let compradores = {};
    // las salas es donde van a interactuar los objetos
    return{
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario ; 
            usuario.sala = this;
            // console.log(compradores);
        }
    }
}

// instanciar las clases
const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const karen = new Comprador('Karen');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(karen);

vendedor.oferta('mustang 1996', 3000);
juan.oferta(3500, juan);
pablo.oferta(4000, pablo);
karen.oferta(10000, karen);
vendedor.vendido(karen.nombre);