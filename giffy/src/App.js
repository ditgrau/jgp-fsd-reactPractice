import React, { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
      getGifs({keyword: 'lilo'}).then(gifs => setGifs(gifs))
  }, [] )
  // este useEffect se renderiza solo la primera vez, por el array de dependencias vacio

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
          //este mapeo de gifs es para darle un espacio en el front, darle una etiqueta 'img'
        }
      </section>
    </div>
  );
}

export default App;
