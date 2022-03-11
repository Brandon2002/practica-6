function Emitter() { //función constructora
    this.events = {}; //Objeto vacío.
}
                         //Recibe dos parámetros
Emitter.prototype.on = function (type, listener) { //Función llamada "on".
    this.events[type] = this.events[type] || [];//valida si "events" tiene algo o está vacío. Si contiene algo se toma lo que hay, si no, se le asigna un array vacío que será llenado con funciones.
    this.events[type].push(listener);//Una vez se tiene un array, se invoca la función "push" y en el indice "type" se mete la función correspondiente a "listener".
}
                        //Recibe un parámetro "type" que corresponde a la función que se quiere invocar
Emitter.prototype.emit = function (type) {//función miembro llamada "emit"
    if(this.events[type]) {
        this.events[type].forEach(function (listener){
            listener();
        });
    }
}

module.exports = Emitter; //Se exporta el constructor.