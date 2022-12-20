//1. Capturar el formulario

const form = document.querySelector(".form");

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
});
