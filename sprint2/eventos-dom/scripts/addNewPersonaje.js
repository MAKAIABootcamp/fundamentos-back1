//1. Capturar el formulario

const form = document.querySelector(".form");
// const inputName = document.getElementById('name');
// inputName.value = "";

//Para obtener los datos de sessionStorage usamos el método getItem(). Este método recibe un parámetro que sería la key (nombre de la propiedad que queremos recuperar desde sessionStorage)

let personajes = sessionStorage.getItem("personajes")
  ? JSON.parse(sessionStorage.getItem("personajes"))
  : [];

console.log(personajes);

form.addEventListener("submit", (event) => {
  //.preventDefault() evita que ocurra la acción que viene asociada al submit por defecto (la recarga de la página)
  event.preventDefault();
  console.log("Esto es un submit");

  //Nos entrega un ARRAY con todos los elementos hijos de form
  const valuesForm = Object.values(form);
  console.log(valuesForm);

  //Queremos obtener un objeto con toda la información ingresada en el input
  const newPersonajeInfo = {};
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

  let keyStr = "";
  for (const key in newPersonajeInfo) {
    const propertyPersonaje = newPersonajeInfo[key];

    if (!propertyPersonaje) {
      const labelFound = keysTraductor.find(label => label.labelName === key);
      keyStr = keyStr + labelFound.traduccion + ", ";
    }
  }

  console.log(keyStr);
  if (keyStr) {
    let messenger = `El campo ${keyStr} no se encuentra diligenciado`;
    alert(messenger);
    return;
  }

  //Agregar el nuevo personaje al array personajes
  personajes.push(newPersonajeInfo);

  console.log(personajes);

  //Actualizar la información de personajes que tenemos en sessionStorage
  sessionStorage.setItem("personajes", JSON.stringify(personajes));

  //Limpiar cada campo del formulaio
  valuesForm.forEach(input => {
    if (input.id) { 
      input.value = "";
    }
  })

});
