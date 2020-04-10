
// creamos el observador con los metodos que requerimos
let observer = {
    // suscripcion al publicador
    obtenerOfertas: function(callback){
        if(typeof callback === "function"){
            this.suscribers[this.suscribers.length] = callback;

        }
    },
    cancelarOfertas: function(callback){
        for( let i = 0; i < this.suscribers.length ; i++){
            if(this.suscribers[i] === callback){
                delete this.suscribers[i];
            }
        }
    },
    publicarOferta: function(oferta){
        for( let i = 0; i < this.suscribers.length ; i++){
            if(typeof this.suscribers[i] === 'function'){
                this.suscribers[i](oferta);
            }
        }
    },
    // creacion de nuevos publicadores 
    crear: function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.suscribers = [];
            }
        }
    }
}

// vendedores o publicadores
const udemy = {
    nuevoCurso: function(){
        const curso = 'Un nuevo curso de Javascript';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

// crear publicadores
observer.crear(udemy);
observer.crear(facebook);

const peto = {
    compartir: function(oferta){
        console.log('excelente oferta!  ' + oferta); 
    }
};

const karen = {
    interesa: function(oferta){
        console.log('me interesa la oferta de ' + oferta); 
    }
};

udemy.obtenerOfertas(peto.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(karen.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas( karen.interesa);
facebook.obtenerOfertas( peto.compartir);
facebook.nuevoAnuncio()

