// const incorrectDataJSON = {
//     'name': 'Whitney',
//     'age': 29
// }

import getDataFetch from "../helpers/getData.js";
import deleteDataFetch from "../helpers/deleteData.js";
import {
  btnCategoryFilters,
  btnCategoryFilters2,
} from "../modules/btnCategoryFilters.js";
import { getCategoryFilter } from "../modules/getCategoryFilter.js";
import { printCardsPersonajes } from "../modules/printPersonajes.js";
import postDataFetch from "../helpers/postData.js";

// const dataJson = JSON.stringify(incorrectDataJSON);
// console.log(dataJson);
// console.log(typeof dataJson);

const urlPersonajes = "http://localhost:3000/personajes";
const urlFavoritos = "http://localhost:3000/favoritos";
let personajes = [];

const contenedorPersonajes = document.getElementById("contenedorCards");

//-----Capturando el input de búsqueda
const search = document.getElementById("search");

//-----Botones de filtrado--------

//------Capturar el primer conjunto de botones-----
const botonAll = document.getElementById("all");
const botonAndroide = document.getElementById("androide");
const botonHumano = document.getElementById("human");

//Colocamos todos estos botones en un array
const arrayBotones = [botonAll, botonAndroide, botonHumano];

document.addEventListener("DOMContentLoaded", async () => {
  sessionStorage.removeItem("editPersonaje");
  sessionStorage.removeItem("personajeDetails");
  try {
    personajes = await getDataFetch(urlPersonajes);
    console.log(personajes);

    printCardsPersonajes(contenedorPersonajes, personajes);
    //Ejecutamos la función que nos permite filtrar x categoría
    btnCategoryFilters(arrayBotones, personajes, contenedorPersonajes);
    //   printCardsPersonajes(contenedorPersonajes, filtros);

    //----Funcionalidad al segundo conjunto de botones
    const parcialCategories = getCategoryFilter(personajes);
    const categories = ["all2", ...parcialCategories];
    console.log(categories);
    btnCategoryFilters2(categories, personajes, contenedorPersonajes);
    //   printCardsPersonajes(contenedorPersonajes, filtros2);
  } catch (error) {
    console.log(error);
    alert(error);
  }
});

document.addEventListener("click", async ({ target }) => {
  //Funcionalidad de ir a detalles del personaje
  if (target.classList.contains("card__img")) {
    sessionStorage.setItem("personajeDetails", JSON.stringify(target.id));
    location.href = "./pages/personajeDetails.html";
  }
  //Funcionalidad de eliminar un personaje
  if (target.classList.contains("card__delete")) {
    Swal.fire({
      title: "¿Está usted seguro de eliminar?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const idPersonajeDelete = parseInt(target.name);
        const urlDelete = `${urlPersonajes}/${idPersonajeDelete}`;

        try {
          await deleteDataFetch(urlDelete);
          personajes = await getDataFetch(urlPersonajes);
          printCardsPersonajes(contenedorPersonajes, personajes);
        } catch (error) {
          console.log("No se pudo eliminar hay un error" + error);
        }
      }
    });
  }

  //Inicio de la funcionalidad de edición

  if (target.classList.contains("card__edit")) {
    console.log(target.name);
    sessionStorage.setItem("editPersonaje", JSON.stringify(target.name));
    location.href = "./pages/formPersonaje.html";
  }

  //Para agregar a favoritos
  if (target.classList.contains("card__favorite")) {
    const idFavorito = target.name;
    const urlPersonajeFavorito = `${urlFavoritos}?id=${idFavorito}`;

    const favorito = await getDataFetch(urlPersonajeFavorito);
    //Obtenemos el objeto
    const favoritePersonaje = await getDataFetch(
      `${urlPersonajes}/${idFavorito}`
    );
    if (favorito.length === 0 && Object.entries(favoritePersonaje).length) {
      await postDataFetch(urlFavoritos, favoritePersonaje);
      const data = await getDataFetch(urlFavoritos);
      console.log(data);
    }
  }
});

//Escuchar el evento search del input de búsqueda por nombre
search.addEventListener("search", async () => {
  const searchTerm = search.value;
  try {
    if (searchTerm) {
      const datosPersonajes = await getDataFetch(urlPersonajes);
      const resultadoBusqueda = datosPersonajes.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      printCardsPersonajes(contenedorPersonajes, resultadoBusqueda);
    } else {
      const datosPersonajes = await getDataFetch(urlPersonajes);
      printCardsPersonajes(contenedorPersonajes, datosPersonajes);
    }
  } catch (error) {
    console.log(error);
  }
});
