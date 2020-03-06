import React, {useState} from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';


function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  

 let handleDetailsClick = (film) => {
    const url = `https//api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    fetch(url)
    .then(response => response.json())
    .then(json => setCurrent(json))
    .catch(err => console.log(`Error: ${err}`));
    

  }

  
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={films} 
          handleDetailsClick={handleDetailsClick}
          />
          <FilmDetails film={current}/>
        </div>
      </div>
    );
  
}

export default App;
