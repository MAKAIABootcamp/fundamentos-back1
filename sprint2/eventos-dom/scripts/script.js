//Ejercicio consiste en crear una página que nos permita filtrar personajes de acuerdo a ciertas características. Este filtro lo vamos a realizar con unos botones de filtrado.

//1. Definir el arrays de personajes (Star wars)

const starWars = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hairColor: "blond",
    skinColor: "fair",
    eyeColor: "blue",
    birthYear: "19BBY",
    gender: "male",
    specie: "human",
    image: "https://smoda.elpais.com/wp-content/uploads/2019/12/2-look.jpg",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hairColor: "n/a",
    skinColor: "gold",
    eyeColor: "yellow",
    birthYear: "112BBY",
    gender: "n/a",
    specie: "androide",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hairColor: "n/a",
    skinColor: "white, blue",
    eyeColor: "red",
    birthYear: "33BBY",
    gender: "n/a",
    specie: "androide",
    image:
      "https://static.wikia.nocookie.net/esstarwars/images/e/e2/Artoo-Fathead.png",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hairColor: "none",
    skinColor: "white",
    eyeColor: "yellow",
    birthYear: "41.9BBY",
    gender: "male",
    specie: "human",
    image:
      "https://media.revistagq.com/photos/62a0a996223a33e985e4d59a/master/pass/1072434_110615-cc-Darth-Vader-Thumb.jpg",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hairColor: "brown",
    skinColor: "light",
    eyeColor: "brown",
    birthYear: "19BBY",
    gender: "female",
    specie: "human",
    image:
      "https://static.wikia.nocookie.net/esstarwars/images/f/ff/Leia_photomasher.jpg",
  },
];

//2. Insertar tarjetas de cada personaje dentro de main
//2.1. Creando una función que nos permita pintar las cards (o tarjentas) dentro del contenedor main

const printPersonajes = (listPersonajes, contenedor) => {
  //1. Vaciemos el contenido del contenedor
  contenedor.innerHTML = "";

  //2. recorrer el array listPersonajes y por cada elemento nos debe pintar un card.
  listPersonajes.forEach((personaje) => {
    const article = document.createElement("article");
    article.classList.add("main__card");
    article.innerHTML = `
        <figure class="card__image">
                    <img src=${personaje.image} alt=${personaje.name}>
                </figure>
                <h4 class="card__name">${personaje.name}</h4>
        `;

    contenedor.appendChild(article);
  });
};

//2.2. Capturar el contenedor donde queremos pintar las cards
//document.querySelector(selctor) recibe como parámetro el selector que posee el elemento que queremos capturar. En caso de: 1. Hacer referencia a una clase (class): .nombreDeLaClase, 2. Hacer referencia a un id: #nombreDelId, 3. Hacer referencia a una tag (o etiqueta): nombreDeLaEtiqueta por ejemplo: document.querySelector(a), document.querySelector(img), document.querySelector(h1)
const main = document.querySelector(".main");

const contenedorCards = document.getElementById("contenedorCards");

//Para obtener los datos de sessionStorage usamos el método getItem(). Este método recibe un parámetro que sería la key (nombre de la propiedad que queremos recuperar desde sessionStorage)

  let personajes = sessionStorage.getItem("personajes")
    ? JSON.parse(sessionStorage.getItem("personajes"))
    : [];

  console.log(personajes);

//2.3. Escuchamos al evento DOMContentLoaded (Cuando la página recarga o se renderiza) y cuando este evento ocurre se ejecuta el callback (función que es pasada como parámetro a la función o método .addEventListener('nombreDelEvento', callback)).
document.addEventListener("DOMContentLoaded", () => {
  

  if (personajes.length === 0) {
    //Guadar el array starWar a sessionStorage con el método setItem(). este método recibe dos parámetros: 1. es la Key (el nombre de la propiedad donde vamos almacenar los datos) 2. Los datos queremos almacenar. Estos datos deben guardarse en el storage como formato JSON.
    sessionStorage.setItem("personajes", JSON.stringify(starWars));
    personajes = JSON.parse(sessionStorage.getItem("personajes"));
    console.log(personajes);
  }



  //Pintamos las cards de cada personaje
  printPersonajes(personajes, contenedorCards);
});

//Funcionamiento a los botones de filtrado

//1. Capturar los botones
const botonAll = document.getElementById("all");
const botonAndroide = document.getElementById("androide");
const botonHumano = document.getElementById("human");

//2. Vamos a declarar un array donde cada elemento sea el btn que hemos capturado

const filterButtons = [botonAll, botonAndroide, botonHumano];

//3. Recorrer el array filterButtons para escuchar el click de ellos.

filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(button);
    console.log(event);
    console.log(event.target.id);
    console.log(button.id);
    let personajesFiltrados = [];

    if (button.id === "all") {
      personajesFiltrados = personajes;
    } else {
      personajesFiltrados = personajes.filter(
        (personaje) => personaje.specie === button.id
      );
    }
    console.log(personajesFiltrados);
    printPersonajes(personajesFiltrados, contenedorCards);
  });
});

//Funcionamiento de botones otra manera

//Sacar del array Star Wars las species disponibles

const speciesPersonajes = personajes.map((personaje) => `${personaje.specie}2`);
console.log(speciesPersonajes);

//Obtener los valores de speciesPersonajes no duplicados
const setSpecies = new Set(speciesPersonajes);
console.log(setSpecies);

//Obtener un array con los valores de species

const species = [...setSpecies, "all2"];
console.log(species);

species.forEach((especie) => {
  const specieButton = document.getElementById(especie);
  console.log(specieButton);
  //Se llama al escuchador de eventos
  specieButton.addEventListener("click", () => {
    //---Esto es una prueba de que se está escuchando el click sobre los botones---
    console.log("He realizado click sobre este btn");

    //--Verificamos como podemos capturar el id del botón
    const speciesString = especie.slice(0, -1);
    console.log(especie);
    console.log(speciesString);

    let filtrado = personajes.filter(
      (personaje) => personaje.specie === speciesString
    );
    let filtrerArray = speciesString === "all" ? personajes : filtrado;
    console.log(filtrerArray);

    //Invocar la funciín que nos permite pintar las Cards
    printPersonajes(filtrerArray, contenedorCards);
  });
});

//--------------------------------
//¿Cómo usar los spread Operatos?: Nos permite copiar propiedades de objeto a objeto y elemento de arrays a arrays, sets a Arrays
const variable1 = 1;
const variable2 = 2;
const variable3 = 2;
const name = "Antonio";
const age = 30;

const objeto = { variable1, variable2, variable3, name, age };
const objetoArray = [variable1, variable2, variable3, name, age];
const newSet = new Set(objetoArray);

console.log(objeto);
console.log(newSet);

const list = [...objetoArray];
console.log(list);
const listCopiaDeSet = [...newSet];
console.log(listCopiaDeSet);

//-------------------------------
