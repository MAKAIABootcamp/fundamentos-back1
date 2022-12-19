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
    image:
      "https://static.wikia.nocookie.net/esstarwars/images/f/ff/Leia_photomasher.jpg",
  },
];

//2. Insertar tarjetas de cada personaje dentro de main
//2.1. Creando una función que nos permita pintar las cards (o tarjentas) dentro del contenedor main



const printPersonajes = (listPersonajes, contenedor) => {
    //1. Vaciemos el contenido del contenedor
    contenedor.innerHTML = '';

    //2. recorrer el array listPersonajes y por cada elemento nos debe pintar un card.
    listPersonajes.forEach(personaje => {
        const article = document.createElement('article');
        article.classList.add("main__card");
        article.innerHTML = `
        <figure class="card__image">
                    <img src=${personaje.image} alt=${personaje.name}>
                </figure>
                <h4 class="card__name">${personaje.name}</h4>
        `;

        contenedor.appendChild(article);
    });

}

//2.2. Capturar el contenedor donde queremos pintar las cards
//document.querySelector(selctor) recibe como parámetro el selector que posee el elemento que queremos capturar. En caso de: 1. Hacer referencia a una clase (class): .nombreDeLaClase, 2. Hacer referencia a un id: #nombreDelId, 3. Hacer referencia a una tag (o etiqueta): nombreDeLaEtiqueta por ejemplo: document.querySelector(a), document.querySelector(img), document.querySelector(h1)
const main = document.querySelector('.main');

const contenedorCards = document.getElementById("contenedorCards");

//2.3. Escuchamos al evento DOMContentLoaded (Cuando la página recarga o se renderiza) y cuando este evento ocurre se ejecuta el callback (función que es pasada como parámetro a la función o método .addEventListener('nombreDelEvento', callback)).
document.addEventListener('DOMContentLoaded', () => {
    printPersonajes(starWars, contenedorCards);
})


