export const printCardsPersonajes = (contenedor, arrayPersonajes) => {
    contenedor.innerHTML = "";

    arrayPersonajes.forEach(personaje => {
        const article = document.createElement("article");
        article.classList.add("main__card");
        article.innerHTML = `
        <figure class="card__image">
                    <img id=${personaje.id} src=${personaje.image} alt="${personaje.name}" class="card__img">
                </figure>
                <button class="card__delete" name='${personaje.id}'>❌</button>
                <button class="card__edit" name='${personaje.id}'>✏</button>
                <button class="card__favorite" name='${personaje.id}'>❤</button>
                <h4 class="card__name">${personaje.name}</h4>
        `;

        contenedor.appendChild(article);
    });
};