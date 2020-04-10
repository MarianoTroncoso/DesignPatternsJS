const comprarBoleto = ( function(){

    // privado
    let evento = 'Conferencia JS 2030';
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // publico
    return{
        mostrarBolesto: function(){
            adquirirBoleto();
        }
    }
})();

comprarBoleto.mostrarBolesto();