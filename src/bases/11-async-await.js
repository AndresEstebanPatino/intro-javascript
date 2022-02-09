const getImagen = async() => {

    try{

        const apikey = '8nU3xUFM2sHKYFlOb20NXVdcc8gA1cLX'
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
        const {data} = await respuesta.json()
        console.log(data)
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    } catch(error){
console.log(error)
    }

}

getImagen()

