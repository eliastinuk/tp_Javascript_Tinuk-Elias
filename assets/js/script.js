// conseguimos la url de nuestra api que elegimos, en mi caso fue una de memes
const url = "https://api.imgflip.com/get_memes";

// esta es la vadilacion del url.
async function procesarPromesa(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data.memes; 
    } catch (error) {
        console.error("Error: ", error);
        return [];
    }
}

// obtenemos nuestro container del html mediante una Id
const container = document.getElementById('container');
let c = 1;


// utilize un contador para que me muestre los memes hasta un cierto punto, y agregue las cartas.
procesarPromesa(url)
    .then((data) => {
        data.forEach((elemento) => {
            if (c > 15) {
                return;
            } else {
                container.innerHTML += `
                <div class="card">
                    <img src="${elemento.url}" class="card-img-top" alt="${elemento.name}">
                    <div class="card-body">
                        <h1>nombre: ${elemento.name}</h1>
                    </div>
                </div>
                `;
            }
            c++;
        });
    });