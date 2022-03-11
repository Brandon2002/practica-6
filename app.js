let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']); //Formas de mostrar el objeto en la terminal.

let myKey = 'nombre'
console.log(obj[myKey]); //Busca en el objeto lo que hay en 'nombre'

myKey = 'keypress';//undefined
console.log(obj[myKey]());//Imprime en la terminal, lo que ha en el objeto nombrado 'keypress'
myKey = 'mouseOver';//undefined
console.log(obj[myKey]());//Imprime en la terminal, lo que ha en el objeto nombrado 'mouseOver'

let myArray = [];

myArray.push(4);//Integra al array
myArray.push('una cadena');//Integra al array
myArray.push(obj);//Integra al array el objeto antes creado. Siendo las funciones anónimas.
myArray.push(function () {
    console.log("hola desde el array"); //Integra al array pero la funcion no se puede observar debido a que es anónima
})
myArray.push(obj[myKey])//Integra al array la funnción 'mouseOver'
console.log(myArray);
console.log(myArray[3]());//Imprime lo que hay en la posición 3 del array. Saliendo undefined debibo a que ejecuta la función pero no regresa nada

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");      //Se añaden funciones al array.
});

funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) =>{
    item();
}); //busca en el array cada función que hay y la ejecuta.
