const apikey = '8nU3xUFM2sHKYFlOb20NXVdcc8gA1cLX'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

peticion
    .then( respuesta => respuesta.json())
    .then( ({data}) => {

        console.log(data.images.original.url)

        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);