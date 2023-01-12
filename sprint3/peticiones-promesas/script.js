//Ejemplo de una operación asíncrona
// const simulateAsyncOperation = () => {
//     console.log('Empezando la operación asíncrona');
//     setTimeout(() => {
//         console.log('Operación Asíncrona completada');
//     },20000)
// }

// console.log('Antes de la ejecución de la operación asíncrona');
// simulateAsyncOperation();
// console.log('Después de la ejecución de la operación asíncrona');

//Para que las frases nos aparezcan en consola en el orden esperado, debemos trabajar con promesa

const simulateAsyncOperations = () => {
    return new Promise((resolve, reject) => {
        console.log("Empezando la operación asíncrona");
        setTimeout(() => {
            console.log("Operación Asíncrona completada");
            resolve();
        },20000);
    })
}

console.log('Antes de la segunda operación asíncrona');
simulateAsyncOperations().then(() => {
    console.log('Ha finalizado la ejecución de la segunda operación');    
}).catch(() => {
    console.log('La promesa ha sido rechazada')
});



//Método Fetch: Nos permite realizar las peticiones HTTP

//fetch(url, options)
//options: parametro opcional, donde se indica qué método https vamos a ejecutar
//Cuando este parámetro es omitido, se ejecuta por defecto el método GET.

//Método GET

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const containerImages = document.getElementById("contenedor");

// const getData = (url) => {
//   fetch(url)
//     .then((response) => {
//       response.json().then((resp) => {
//         console.log(resp);
//       });
//     })
//       .catch((error) => {
//         console.log(error)
//     });
// };


const getData = (url) => {
    const data = fetch(url).then((response) => {
        const resp = response.json().then((respuesta) => {
            console.log(respuesta)
            return respuesta
        })
        return resp
    }).catch((error) => {
        console.log(error) 
        return error
    })

    return data;
};

getData(url);

//Segundo ejemplo método GET

const apiKey = 'SU4jFL5xJBA1lYuYelWPcCx5XVVJFmfC';

const urlApiGifphy = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

// getData(urlApiGifphy)
//     .then((resp) => printImage(containerImages, resp.data))
//     .catch((error) => {
//     console.log(`Ocurrió un error, ${error}`)
// })


//Construir la función que no permite pintar las imágenes en el cuerpo de la página

const printImage = (contenedor, arrayData) => {
    contenedor.innerHTML = '';
    arrayData.forEach(gif => {
        const { images: { original }, title } = gif; console.log(original.url);
        contenedor.innerHTML += `<figure>
            <img src=${original.url} alt=${title}>
        </figure>`;
        
    });
}

//Funcionalidad de buscado de gif por categoría
//Utilizando el endopoint disponible para la búsqueda
const urlBase = "https://api.giphy.com/v1/gifs/search";

const searchForm = document.getElementById('search');
console.log(searchForm);
const searchInput = document.querySelector('input');

//-----Búsqueda con un endpoint-----

//Debemos escuchar el evento submit
searchForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    // console.log(searchInput.value);
    if (searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        console.log(searchTerm);
      const urlSearch = `${urlBase}?api_key=${apiKey}&q=${searchTerm}`;

      console.log(urlSearch);
      getData(urlSearch)
        .then((resp) => printImage(containerImages, resp.data))
        .catch((error) => {
          console.log(`Ocurrió un error, ${error}`);
        });
    }
})

searchForm.addEventListener('search', () => {
  getData(urlApiGifphy)
      .then((resp) => printImage(containerImages, resp.data))
      .catch((error) => {
      console.log(`Ocurrió un error, ${error}`)
  })
})


 
