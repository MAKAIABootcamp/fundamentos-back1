//1. Capturar el formulario

const form = document.querySelector(".form");
// const inputName = document.getElementById('name');
// inputName.value = "";

//Nos entrega un ARRAY con todos los elementos hijos de form
const valuesForm = Object.values(form);
console.log(valuesForm);

//-------Reutilizar el mismo formulario para editar la información de un personaje---

const editFormStr = sessionStorage.getItem("editPersonaje")
  ? JSON.parse(sessionStorage.getItem("editPersonaje"))
  : "";
const editForm = editFormStr ? parseInt(editFormStr) : null;
console.log(editForm);
//Para obtener los datos de sessionStorage usamos el método getItem(). Este método recibe un parámetro que sería la key (nombre de la propiedad que queremos recuperar desde sessionStorage)

let personajes = sessionStorage.getItem("personajes")
  ? JSON.parse(sessionStorage.getItem("personajes"))
  : [];

console.log(personajes);

const editPersonaje = editForm
  ? personajes.find((person) => person.id === editForm)
  : null;

//---Necesitamos cambiar el título y texto del botón de la página
const title = document.querySelector(".title");
//--- Primera manera de cambiar el texto dentro de la etiqueta h1---
title.innerText = editForm
  ? `Actualiza los datos de ${editPersonaje.name}`
  : "Agregar nuevo Personajes";

// NO FUNCIONÓ//--- Segunda manera de cambiar el texto dentro de la etiqueta h1---
// title.innerText = editForm && `Actualiza los datos de ${editPersonaje.name}`;

const botonSubmit = document.querySelector("button");
botonSubmit.innerHTML = editForm ? "Guardar cambios" : "Crear Personaje";

if (editForm && !editPersonaje) {
  Swal.fire("¡No hayamos datos!", "Por favor regrese al home", "info").then(
    () => {
      window.location.href = "../index.html";
    }
  );
}

if (editForm && editPersonaje) {
  //Queremos obtener un objeto con toda la información ingresada en el input
  valuesForm.forEach((valueInput) => {
    if (valueInput.id) {
      valueInput.value = editPersonaje[valueInput.id];
    }
  });
}

//----función que cuenta cantidad de veces que se repite un caracter en  una cadena de texto

const cantidadCaracter = (caracter, string) => {
  const textString = string.split(caracter);
  const arrayCaracters = textString.filter((str) => str !== " ");
  console.log(arrayCaracters);
  return arrayCaracters.length;
};

//------Escuchador del Submit del form para crear un nuevo personaje------------
form.addEventListener("submit", (event) => {
  //.preventDefault() evita que ocurra la acción que viene asociada al submit por defecto (la recarga de la página)
  event.preventDefault();
  console.log("Esto es un submit");

  //Queremos obtener un objeto con toda la información ingresada en el input
  const newPersonajeInfo = {};

  //Crear una propiedad id
  newPersonajeInfo.id = editForm ? editPersonaje.id : personajes.length + 1;

  console.log(newPersonajeInfo.id);
  valuesForm.forEach((valueInput) => {
    if (valueInput.id) {
      newPersonajeInfo[valueInput.id] = valueInput.value;
    }
  });

  console.log(newPersonajeInfo);

  //Debemos validar que todas las propiedades de newPersonajeInfo tengan un valor válido (no estén vacíos)

  //Arrays de objetos con la traducción de la propiedad

  const keysTraductor = [
    {
      labelName: "name",
      traduccion: "Nombre",
    },
    {
      labelName: "height",
      traduccion: "Altura",
    },
    {
      labelName: "mass",
      traduccion: "Masa corporal",
    },
    {
      labelName: "hairColor",
      traduccion: "Color de cabello",
    },
    {
      labelName: "skinColor",
      traduccion: "Color de piel",
    },
    {
      labelName: "eyeColor",
      traduccion: "Color de ojos",
    },
    {
      labelName: "birthYear",
      traduccion: "Cumpleaños",
    },
    {
      labelName: "gender",
      traduccion: "Género",
    },
    {
      labelName: "specie",
      traduccion: "Especie",
    },
    {
      labelName: "image",
      traduccion: "Imagen",
    },
  ];

  //------Otra manera de obtener las labels con menos código-----
  //----Se capturan todas las etiquetas labels del DOM
  const labelsNodeList = document.querySelectorAll("label");
  // document.querySelectirAll() retorna un NodeList (!= Array), por tanto se debe convertir en un Array
  const labels = [...labelsNodeList];
  console.log(labels);

  //----Como prueba se accede al primer objeto (elemento) del array label y comprobamos como obtener los datos de las labels que necesitamos

  //Se obtiene el texto dentro de la etiqueta label
  console.log(labels[0].innerText);

  //Se obtiene el valor asignado a for en label, recordemos que for contiene el nombre de las propiedades del objeto a construir
  console.log(labels[0].getAttribute("for"));

  //----Mapeamos o creamos un nuevo arrays con las keys de las labels

  const keyLabels = labels.map((key) => ({
    labelName: key.innerHTML,
    keyName: key.getAttribute("for"),
  }));

  console.log(keyLabels);

  let keyStr = "";
  for (const key in newPersonajeInfo) {
    const propertyPersonaje = newPersonajeInfo[key];

    if (!propertyPersonaje) {
      const labelFound = keyLabels.find((label) => label.keyName === key);
      keyStr += labelFound.labelName + ", ";
    }
  }

  console.log(keyStr);
  if (keyStr) {
    const numberInputsVacios = cantidadCaracter(",", keyStr);
    console.log(numberInputsVacios);

    keyStr = keyStr.slice(0, -2);

    let messenger =
      numberInputsVacios === 1
        ? `El campo ${keyStr} no se encuentra diligenciado`
        : `Los campos ${keyStr} no se encuentran diligenciados`;
    alert(messenger);
    return;
  }

  //Debemos validar la acción correspondiente: si es para crear un nuevo personaje o es para actualizar un personaje ya existente.

  if (editForm) {
    //Encontramos el index o posición del personaje a editar
    const personajeIndex = personajes.findIndex(
      (person) => person.id === editForm
    );

    console.log(personajeIndex);

    //Ahora reemplazamos
    personajes[personajeIndex] = newPersonajeInfo;

    console.log(personajes);
  } else {
    //Agregar el nuevo personaje al array personajes
    personajes.push(newPersonajeInfo);

    console.log(personajes);
  }

  //Actualizar la información de personajes que tenemos en sessionStorage
  sessionStorage.setItem("personajes", JSON.stringify(personajes));

  // //Limpiar cada campo del formulaio
  // valuesForm.forEach((input) => {
  //   if (input.id) {
  //     input.value = "";
  //   }
  // });
  Swal.fire(
    "¡Excelente!",
    "Se ha guardado exitosamente el personaje",
    "success"
  ).then(() => {
    window.location.href = "../index.html";
  });
});
