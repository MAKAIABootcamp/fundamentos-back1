//---Declarar funciones de manera convencinal

const saludar = function (name) {
  const saludo = `Hola ${name}, que gusto verte!`;
  return saludo;
};

const saludaADiana = saludar("Diana");

console.log(saludaADiana);

const saludarDeOtraManera = function (name = "") {
  document.write(
    `<h2>Hola ${name}, que gusto verte... Te saludo desde el cuerpo del navegador!</h2>`
  );
};

saludarDeOtraManera();

const sumar = function (num1 = 0, num2 = 0) {
  const resultado = num1 + num2;
  return resultado;
};

const resuldoSuma = sumar(2, 3);

console.log(resuldoSuma);
//---Declarar funciones con arrow functions

const saludarArrowFunction = (name = "") => {
  const saludo = `Hola ${name}, te saludo desde una función flecha`;
  return saludo;
};

const saludoConArrowFunction = saludarArrowFunction();

console.log(saludoConArrowFunction);

const saludarArrowFunction2 = (name) =>
  `Hola ${name}, te saludo desde una función flecha`;

const saludoConArrowFunction2 = saludarArrowFunction2("Diana");

console.log(saludoConArrowFunction2);

//Ejemplo 2.

const newUser = (name, edad) => ({
  name: name,
  edad: edad,
  yearBirth: 2022 - edad,
});

const ArmarUsuario = () => {
  const name = prompt("Usuario, por favor digite su nombre");
  const edadNoParseada = prompt(`${name}, por favor digite su edad`);

  const edad = parseInt(edadNoParseada);

  const nuevoUsuario = newUser(name, edad);
  console.log(nuevoUsuario);
};

ArmarUsuario();

//Ejemplo 3. Realizar una función que agregue elementos a un array previamente instanciado, y otra que quite elementos del array recibiendo un parámetro que será el indíce a eliminar. Si el índice no existe, debe eliminar el último elemento del array. Realizar una función que reciba alguna de las anteriores como parámetro callback y muestre el array restante.

//Paso 1. Realizar una función que agregue elementos al final de un array previamente instanciado

const addElement = (list, addItem = "") => {
    if (addItem) {
        list.push(addItem);
        console.log(list);
    }
};

//Paso 2. función que permita elementos de un array

const deleteElement = (list, posDelete = null) => {
  const ultimaposicion = list.length - 1;
  const position = posDelete === null ? ultimaposicion : posDelete;
  list.splice(position, 1);
  console.log(list);
};

//Paso 3. Realizar una función que reciba alguna de las anteriores como parámetro callback y muestre el array restante.

const addOrDelete = (callback, list, addOrPosition) => {
  callback(list, addOrPosition);
};

//Paso 4. Ejecutar la función con el callback

const frutas = ["mango", "fresa", "ciruelas", "pera"];
//4.1 Con la función deleteElement()

addOrDelete(deleteElement, frutas, 1);

//4.2 Con la función addElement()

addOrDelete(addElement, frutas, "manzanas");
