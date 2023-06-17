`useEffect ( ()=> {
    return () => {
    }
}, [dependencias]
)`

si no tiene dependencias, solo se ejecuta la PRIMERA vez que se renderiza. (hay que poner [])



FETCH devuelve una promesa que se resuelve con un objeto Response: respuesta de la solicitud.
FETCH para realizar solicitudes de red y obtener recursos de forma asíncrona. 
(alternativa AXIOS)

`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Trabajar con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error(error);
  });`
