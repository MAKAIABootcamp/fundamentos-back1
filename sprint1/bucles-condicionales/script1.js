//Ejemplo con la estructura cíclica while

let n = 0;
let x = 0;

while (n < 4) {
  n++;
  x += n;
  console.log("Cuando n = ", n, " x = ", x);
}

//Ejemplo con la estructura cíclica for

//Explicación de la sintaxis de la declaración for
for (let i = 0; i < 10; i++) {
  //Aqui van todas las lineas de intrucciones que se va ejecutar, siempre que la condición evaluada sea true
}

for (let i = 0; i <= 10; i++) {
  //En cada ciclo vamos escribiendo en el HTML el valor actual de i y luego vamos a escribir en el documento la etiqueta <br> que permite el salto de línea
  document.write(i);
  document.write("<br>");
}

//Ejercicio 2 ciclo for: Queremos calcular el factorial de un número

const factorial = 5;
let resultado = 1;

for (let i = factorial; i >= 1; i--) {
  //En cada ciclo se multiplica el valor de la variable resultado por el valor actual de i
  resultado = resultado * i;
}

console.log("El resultado del factorial de ", factorial, " es: ", resultado);

//-----Estructuras condicionales----
//1. Condicionales simples
const name = "Fernando";
if (typeof name === "string") {
  console.log(`Hola ${name}`);
}

//2. Condicionales dobles

if (typeof name === "string") {
  console.log(`Hola ${name}`);
} else {
  console.log("Por favor verifique que el nombre sea una cadena de caracteres");
}

//3. Condicionales múltiples
const num1 = 4;
const num2 = 10;

if (num1 < num2) {
  console.log("Verdadero: ", num1, " es menor a ", num2);
} else if (num1 === num2) {
  console.log("Los valores son iguales");
} else {
  console.log("Falso: ", num1, " es mayor a ", num2);
}

//4. Estructura de control Switch Case

switch (num1) {
  case 10:
    console.log("El número es igual a 10");
    break;
  default:
    console.log("El numero es diferente a 10");
    break;
}

//5. operadores lógicos

const varible1 = 3;
const variable2 = "3";

//5. 1. Igualdad: Sólo compara el valor de las variables
console.log(varible1 == variable2);

//5.2 Igualdad estricta: Compara el valor y el tipo de dato de las variables
console.log(varible1 === variable2);

//Ejercicios prácticos

//1. Estructura de control Switch

const responseUser = prompt("¿Usted es culpable?").toLowerCase();

switch (responseUser) {
  case "si":
    document.write("IRÁS A LA CARCEL");
    break;
  case "no":
    document.write("IRÁS A CASA");
    break;

  default:
    document.write("LA DOCUMENTACIÓN POR FAVOR");
    break;
}

//2.

const responseUser2 = prompt(
  "¿Cuál es el topping que desea usted? Los disponibles son:\n1. Oreo\n2.Topping de oreo.\n3.Topping de KitKat.\n3.Topping de brownie.\n4.Topping de lacasitos"
).toLowerCase();

const valorHelado = 1900;

switch (responseUser2) {
  case "oreo":
    const toppingOreo = 1000;
    const totalOreo = valorHelado + toppingOreo;
    alert("El precio de su helado con topping de Oreo es de: $ " + totalOreo);
    break;
  case "kitkat":
    const toppingKitkat = 1500;
    const totalKitkat = valorHelado + toppingKitkat;
    alert(
      "El precio de su helado con topping de KitKat es de: $ " + totalKitkat
    );
    break;
  case "brownie":
    const toppingBrownie = 750;
    const totalBrownie = valorHelado + toppingBrownie;
    alert(
      "El precio de su helado con topping de Brownie es de: $ " + totalBrownie
    );
    break;
  case "lacasitos":
    const toppingLaCasitos = 950;
    const totalLaCasitos = valorHelado + toppingLaCasitos;
    alert(
      "El precio de su helado con topping de Lacasitos es de: $ " +
        totalLaCasitos
    );
    break;
  default:
    alert(
      "Lo sentimos no tenemos el topping solicitado, el valor del helado sin topping es de: $ " +
        valorHelado
    );
    break;
}

//3. Ejercicio con estructura cíclica

const numeroDeNotas = 5;
let acumuladoDeNotas = 0;

for (let i = 1; i <= numeroDeNotas; i++) {
  const nota = prompt(`Ingrese la nota ${i} del estudiante`);
  const notaNumerica = parseFloat(nota);
  acumuladoDeNotas += notaNumerica;
}

// console.log(acumuladoDeNotas);
const promedioDeNotas = acumuladoDeNotas / numeroDeNotas;

if (promedioDeNotas >= 3.5) {
  alert(
    `La nota final del estudiante es: ${promedioDeNotas}, ha sido aprobado`
  );
} else {
  alert(
    `La nota final del estudiante es: ${promedioDeNotas}, ha sido suspendido`
  );
}

//Ejercicio Realizado por Brian Steven
const mensaje = confirm("Digite la cantidad de productos.");
// console.log(mensaje);
if (mensaje) {
  //Vamos a nombrar las variables y constantes usando la notación camelCase
  let listaNombre = [];
  let subtotal = 0;
  let total_pagar = 0;

  let cantidad_productos = parseInt(
    prompt("Este es el espacio para digitar la cantidad de productos")
  );

  for (let i = 0; i < cantidad_productos; i++) {
    const mensaje_nombre = confirm("Digite el nombre del producto.");

    if (mensaje_nombre) {
      let nombre_producto = prompt(
        "Este es el espacio para digitar el nombre del producto"
      );

      listaNombre.push(nombre_producto);
      const mensaje_precio = confirm("Digite el precio del producto.");

      if (mensaje_precio) {
        let precio_producto = parseInt(
          prompt(
            `Este es el espacio para digitar el precio de ${nombre_producto}`
          )
        );
        if (precio_producto > 20000) {
          let operacion = precio_producto - precio_producto * 0.2;
          alert(
            `El producto ${nombre_producto} tiene un valor con descuento de ${operacion}`
          );
          subtotal += precio_producto;
          total_pagar += operacion;
        } else if (precio_producto > 10000) {
          let operacion = precio_producto - precio_producto * 0.1;
          alert(
            `El producto ${nombre_producto} tiene un valor con descuento de ${operacion}`
          );
          subtotal += precio_producto;
          total_pagar += operacion;
        } else if (precio_producto > 5000) {
          let operacion = precio_producto - precio_producto * 0.05;
          alert(
            `El producto ${nombre_producto} tiene un valor con descuento de ${operacion}`
          );
          subtotal += precio_producto;
          total_pagar += operacion;
        } else {
           subtotal += precio_producto;
           total_pagar += precio_producto;
          alert(
            `El producto ${nombre_producto} no tiene descuento y tiene un valor de ${precio_producto}`
          );
        }
      } else {
        alert("Proceso cancelado");
        break;
      }
    } else {
      alert("Proceso cancelado");
      break;
    }
  }
  alert(
    `El subtotal a pagar de toda la compra es ${subtotal} y el total de la compra es: ${total_pagar}`
  );
}
