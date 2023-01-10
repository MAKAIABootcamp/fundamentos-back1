//Método Fetch: Nos permite realizar las peticiones HTTP

//fetch(url, obj)
//obj: parametro opcional, donde se indica qué método https vamos a ejecutar
//Cuando este parámetro es omitido, se ejecuta por defecto el método GET.

//Método GET

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const getData = (url) => {
    fetch(url).then((response) => {
        response.json().then((resp) => {
            console.log(resp);
        });
        
  }).catch();
};

getData(url);


//Método POST

//Método PUT

//Método DELETE

//Método PATCH
