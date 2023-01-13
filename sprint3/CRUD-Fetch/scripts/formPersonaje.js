//1. Capturar el formulario

import getDataFetch from "../helpers/getData.js";
import { submitForm } from "../modules/submitForm.js";

const urlPersonajes = "http://localhost:3000/personajes";
const form = document.querySelector(".form");

//2. Capturamos todos los elementos hijos de este form

const valuesForm = Object.values(form);
console.log(valuesForm);

//--Queremos utilizar este form para crear un nuevo personaje y para editar información de cualquier personaje

const editFormStr = sessionStorage.getItem("editPersonaje")
  ? JSON.parse(sessionStorage.getItem("editPersonaje"))
  : "";

const editForm = editFormStr ? parseInt(editFormStr) : null;

//--- Para que nos actualice el título de acuerdo con la acción que vamos a realizar: Crear nuevo personaje o editar personaje

const title = document.querySelector(".title");
const submitButton = valuesForm[valuesForm.length - 1];
console.log(submitButton);

submitButton.innerHTML = editForm ? "Guardar cambios" : "Crear Personaje";

//--Este evento permite rellenar los campos del formulario cuando el usuario vá a realizar la edición de un personaje
document.addEventListener("DOMContentLoaded", async () => {
  let editPersonaje = {};
  const url = editForm ? `${urlPersonajes}/${editForm}` : urlPersonajes;

  try {
    if (editForm) {
      editPersonaje = await getDataFetch(url);
      console.log(editPersonaje);

      title.innerText = editForm
        ? `Actualiza los datos de ${editPersonaje.name}`
        : "Agregar nuevo Personajes";

      valuesForm.forEach((valueInput) => {
        if (valueInput.id) {
          valueInput.value = editPersonaje[valueInput.id];
        }
      });
    }

    await submitForm(form, url, editForm);
  } catch (error) {
    console.log(error);
    alert(error);
  }
});

