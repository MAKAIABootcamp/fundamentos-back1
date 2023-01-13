import getDataFetch from "../helpers/getData.js";
import { printCardsPersonajes } from "../modules/printPersonajes.js";

const urlFavoritos = "http://localhost:3000/favoritos";
const contenedor = document.getElementById("contenedor");


document.addEventListener('DOMContentLoaded', async() => {
    const favoritos = await getDataFetch(urlFavoritos);
    printCardsPersonajes(contenedor, favoritos);
})