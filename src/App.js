import React from 'react';
import Row from './Row';
import Banner from './Banner';
import requests from './request';
import Navbar from './Navbar'
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />  
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
        />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumantaries} />


    </div>
  );
}

export default App;
