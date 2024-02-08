import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import MovieService from './services/MovieService'

import './styles/style.scss';

// const movieService = new MovieService();

// movieService.getMovieAll().then(res => console.log(res))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


