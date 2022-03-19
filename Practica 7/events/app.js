const objeto = {
  nombre: `Matt`,
  edad: 43,
  apellido: `Bellamy`,
  keyPress: function () {
    console.log(`Key pressed`);
  },
  mouseOver: function () {
    console.log(`Mouse is over`);
  },
};

console.log(objeto.nombre);
// accede al objeto en la propiedad especificada
console.log(objeto[`nombre`]);

let myKey = `nombre`;
// utilizando el string de myKey lo pasa como parametro
// para buscar una propiedad dentro del objeto
console.log(objeto[myKey]);

console.log(`----key thingis------`);

// igual que arriba solo le cambiamos el valor a myKey para buscar
//el parametro deseado y en este caso en el que contiene una funcion
// la podemos invocar
myKey = `keyPress`;
console.log(objeto[myKey]());
myKey = `mouseOver`;
console.log(objeto[myKey]());

console.log(`------Arrays in JS------`);

let myArray = new Array();

myArray.push(4);
myArray.push(`una cadena`);
myArray.push(objeto);
myArray.push(function () {
  console.log(`soy una funcion guardada dentro de un array motherfuker`);
});
console.log(myArray);
console.log(myArray[2].mouseOver()); // accedemos a la casilla donde empujamos el objeto pasado y le damos el nombre de la funcion a realizar y la invocamos
// aqui se demuestra que dentro de un array se pueden guardar distintos tipos
// de datos cómo un obj, strings, numeros, funcionnes etc
console.log(myArray[3]());
// igual que en mouse over la diferencia es que cómo es una
// funcion anonima solo nececito invocarla

console.log(`------Arrays in the Revenge------`);
let funcArray = [];

funcArray.push(() => {
  console.log(`Funcion 1 sit and`);
});

funcArray.push(() => {
  console.log(`Funcion 2 drink`);
});

funcArray.push(() => {
  console.log(`Funcion 3 pennyroyal tea`);
});

funcArray.forEach((item) => {
  item();
});
// aqui utiliza una variable o parametro item el cual recorrera
// cada punto del array asignandole el valor de esa posicion a item
// temporalmente y por utlimo invocandola
