//Obtener la información del personaje al cual queremos ver su detalle

const idPersonajeStr = sessionStorage.getItem("seeDetails")
  ? JSON.parse(sessionStorage.getItem("seeDetails"))
  : null;

const idPersonaje = idPersonajeStr ? parseInt(idPersonajeStr) : null;

console.log(idPersonaje);

//Traer el array personajes desde el sessionStorage
const personajes = sessionStorage.getItem("personajes")
  ? JSON.parse(sessionStorage.getItem("personajes"))
  : [];

console.log(personajes);

//Encontrar el objeto personaje con el id que se obtuvo en idPersonaje

const personaje = idPersonaje
  ? personajes.find((persona) => persona.id === idPersonaje)
  : {};
console.log(personaje);

// console.log(typeof personaje.id);
// console.log(typeof idPersonaje);

//Agregar la información en el DOM
//1. Capturando el elemento en el cual queremos mostrar esa información

const container = document.querySelector(".main");
const title = document.querySelector(".title");
console.log(title);

title.innerText = `Página de detalles de ${personaje.name}`;

//2. Insertar la información
container.innerHTML = `
        <figure class="main__figure">
            <img src="${personaje.image}" alt="${personaje.name}">
        </figure>
        <ol>              
            <li>Nombre:  ${personaje.name}</li>
            <li>Año Nacimiento:  ${personaje.birthYear} </li>
        </ol>
`;
