// pequeño creador de sitios web
function constructorSitios(){
    this.crearElementos = function(texto, tipo){
        let html;
        // en este caso los objetos similares son
        // elementos html que tienen un texto
        // y un tipo de etiqueta

        // cada uno de estos tipos tenemos que crearlos
        // aparte
        if(tipo === 'input'){
            html = new InputHTML(texto);
        } else if(tipo === 'img'){
            html = new ImageHTML(texto);
        } else if(tipo === 'h1'){
            html = new HeadingHTML(texto);
        } else if(tipo === 'p'){
            html = new ParrafoHTML(texto); 
        }

        // agregamos esto para no poner lo mismo
        // en todos los constructores
        html.tipo = tipo; 

        html.mostrar = function(){
            const elemento = document.createElement(this.tipo);

            if(this.tipo === 'input'){
                elemento.setAttribute('placeholder', this.texto);
            } else if(this.tipo === 'img'){
                elemento.setAttribute('src', this.texto);
            } else {
                elemento.appendChild(document.createTextNode(this.texto));
            }
            document.querySelector('#app').appendChild(elemento)
        }

        return html;
    }
}

const InputHTML = function(texto){
    this.texto = texto;
}
const ImageHTML = function(texto){
    this.texto = texto;
}
const HeadingHTML = function(texto){
    this.texto = texto;
}
const ParrafoHTML = function(texto){
    this.texto = texto;
}

// CREO INSTANCIA
const sitioweb = new constructorSitios();

// almacenar elementos 
const elementosWeb = [];

elementosWeb.push( sitioweb.crearElementos('Bienvenidos', 'h1'));
elementosWeb.push( sitioweb.crearElementos('Bienvenidos a nuestro sitio web', 'p'));
elementosWeb.push( sitioweb.crearElementos('logo.svg', 'img'));
elementosWeb.push( sitioweb.crearElementos('Conoce mas sobre nosotros', 'h1'));
elementosWeb.push( sitioweb.crearElementos('Contacto', 'input'));
elementosWeb.push( sitioweb.crearElementos('Conctactanos en el formulario', 'h1'));

elementosWeb.forEach(elemento =>{
    elemento.mostrar();
})