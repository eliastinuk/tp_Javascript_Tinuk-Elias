const url = "https://api.imgflip.com/get_memes";

async function procesarPromesa(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data.memes; //
    } catch (error) {
        console.error("Error: ", error);
        return [];
    }
}

const container = document.getElementById('container');

let c=1;

procesarPromesa(url)
    .then((data) => {
    data.forEach((elemento) => {
    if(c>10){
        return;
    }
    else{
        container.innerHTML += `
        <div class="card">
            <img src="${elemento.url}" alt="${elemento.name}">
            <h1>nombre: ${elemento.name}</h1>
            </div>`;

    }
     c++;   
    });
});
