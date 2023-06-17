const myAPIKey = "yUYpnEro1XNdysZiZIXT70Cnz3wQuMf4"

export default function getGifs({ keyword = 'stitch' } = {}) {
    // keyword por defecto

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${myAPIKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    return fetch(apiURL)
        //FETCH: solicitudes a la API
        //devuelve una promesa
        .then(res => res.json())
        //primer .then para obtener los datos en json
        .then(response => {
            const { data } = response
            //desestructuracion = response.data
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.fixed_height
                return { title, id, url }
            }
            )   
            //mapeo de data, porque es un array de objetos
            //en el segundo .then trabajamos con los datos obtenidos
            return gifs
            //la promesa devuelve los gifs asignados en el mapeo
        })
}