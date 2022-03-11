var Emitter = require('./emitter');//Se inyecta la dependencia

var emtr = new Emitter();//Emisor de eventos.

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});
                                                    //Dos funciones con el mismo nombre pero diferente comportamiento.
emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');//Se invoca la función "greet". Al ejecutarlo en la terminal, las dos funciones son invocadas y se imprime lo que hay en cada función.

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr); //Ahora "emit" tiene por eventos tanto "greet" como "jump" que fueron las funciones que se crearon en app.js.
emtr.emit('jump'); 