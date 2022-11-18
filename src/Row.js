import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube'; 
import movieTrailer from 'movie-trailer';
import axios from './axios';
import './Row.css';


const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer( movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"))
        })
        .catch((error) => console.log(error));
    }
  }



  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results)
      return request;
    }
     
    fetchData();
   
  }, [props.fetchUrl]);

  // console.log(props.isLargeRow)
  

  return (
    <div className='row'>
     
      <h1>{props.title}</h1>

      <div className='row-posters'>
       
        {movies.map((movie) =>(
          <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row-poster ${props.isLargeRow && 'row-posterLarge'} `}
            src={`${baseUrl}${ props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
          />
        ))}
        
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }   

    </div>
  )
}

export default Row