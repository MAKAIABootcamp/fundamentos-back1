//1. ¿Cómo inicializarlos?

//1.1. Object literals: usando llaves

let motocycle = {
    color: 'black',
    model: '2022',
    cilindraje: '4',
    hibrido: false,
    combustible: 'gasolina',
    price: 1000000
}

console.log(motocycle);


//1.2. Con el constructor

let motocycleConstructor = new Object();

//Para asignarles las propiedades
//1. Usando la notación de punto
motocycleConstructor.color = 'Red';

//2. Usando la notación de corchete
motocycleConstructor['model'] = '2020';

let propertyName = 'combustible';

motocycleConstructor[propertyName] = '2';
console.log(motocycleConstructor);

//2. ¿Cómo acceder a las propiedadas?

//2.1 Por la notación de puntos

console.log(motocycle.hibrido);


//2.2 Por la notación de corchetes

const property = 'price'

console.log(motocycle[property]);


//3. Métodos asociados a los Objects

//Object.key(): Nos retorna un array con todas los nombres de las propiedades (las key) de un objeto

const keysMotocycle = Object.keys(motocycle);

console.log(keysMotocycle);

// Si queremos saber la cantidad de propiedades que tiene un objeto asociado

const longitudMotocycle = Object.entries(motocycle).length;

console.log(longitudMotocycle);

//¿Qué es lo que JavaScript interpreta con true y como false?
const ejemplo1 = null;
const ejemplo2 = undefined;
const ejemplo3 = 0;
const ejemplo4 = '';

//¿Cuándo una variable es undefined?


//---Cuando es declarada mas no le asignamos un valor
let variableUndefined;
console.log(variableUndefined);

//--Cuando queremos encontrar un elemento que no existe en un array

const arrayEjemplo = [
  { name: "mango", cantidad: 2 },
  { name: "piña", cantidad: 5},
  { name: "banano", cantidad: 7 },
];

const loQueQuieroEncontrar = 'manzana'
const laFrutaEncontrada = arrayEjemplo.find((fruta) => fruta.name === loQueQuieroEncontrar);

console.log(laFrutaEncontrada);


//JavaScript interpreta como false

//---Cuando la variable a validar es un null
const validacionConTernario1 = (ejemplo1) ? 'A ejemplo1 JavaScrit lo lee como true' : 'A ejemplo1 JavaScript lo lee como false';

console.log(validacionConTernario1);

//---Cuando la variable a validar es un undefined

const validacionConTernario2 = ejemplo2
  ? "Sí, esta variable es true"
  : "No, esta variable es false";

console.log(validacionConTernario2);

//---Cuando la variable a validar es igual a 0

const validacionConTernario3 = ejemplo3
  ? "Sí, esta variable es true"
  : "No, esta variable es false";

console.log(validacionConTernario3);

//---Cuando la variable a validar es igual a un string vacío

const validacionConTernario4 = ejemplo4
  ? "Sí, esta variable es true"
  : "No, esta variable es false";

console.log(validacionConTernario4);


//JavaScript interpreta como true

const ejemplo5 = {};
const ejemplo6 = [];

//---Cuando la variable a validar es igual a un objeto vacío
const validacionConTernario5 = ejemplo5
  ? "Sí, esta variable es true"
  : "No, esta variable es false";

console.log(validacionConTernario5);

//----Cuando el valor de una variables es diferente a 0

const validacionConTernario6 = longitudMotocycle
  ? "Sí, esta variable es true"
  : "No, esta variable es false";

console.log(validacionConTernario6);

//---Cuando la variable a validar es igual a un array vacío
const validacionConTernario7 = ejemplo6
  ? "Sí, esta variable es true"
  : "No, esta variable es false";

console.log(validacionConTernario7);


//----Ejemplo

const longitudObjetoEjemplo5 = Object.entries(ejemplo5).length;

if (longitudObjetoEjemplo5) {
  console.log("El Objeto tiene propiedades");
} else {
  console.log("El objeto está vacío");
}

console.log(longitudObjetoEjemplo5);

//Haciendo el mismo ejemplo con el operador ternario

const validacionCantidadPropiedades = longitudObjetoEjemplo5 ? 'El objeto posee propiedades' : 'El objeto no posee propiedades';

console.log(validacionCantidadPropiedades);







