import { printCardsPersonajes } from "./printPersonajes.js";

export const btnCategoryFilters = (arrayBtns, arrayPerson, contenedor) => {
  arrayBtns.forEach((boton) => {
    boton.addEventListener("click", () => {
      const filtro = arrayPerson.filter(
        (person) => person.specie === boton.id
      );
        const filteredPersonajes = boton.id === "all" ? arrayPerson : filtro;
        console.log(filteredPersonajes);
        printCardsPersonajes(contenedor, filteredPersonajes);
    });
  });
};

export const btnCategoryFilters2 = (categoryList, arrayPerson, contenedor) => {
  categoryList.forEach((category) => {
    const categoryBtn = document.getElementById(category);
    categoryBtn.addEventListener("click", () => {
      const specie = categoryBtn.id.slice(0, -1);
      console.log(specie);
      const filtro = arrayPerson.filter((person) => person.specie === specie);
      const filteredPersonajes = specie === "all" ? arrayPerson : filtro;
      console.log(filteredPersonajes);
      printCardsPersonajes(contenedor, filteredPersonajes);
    });
  });
};





