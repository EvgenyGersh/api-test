import { useCallback } from 'react';


import axios from 'axios';



const MovieService = () => {

	const  getMovieAll = useCallback( async ( val,params,singleId) => {
		
	const options = {
		method: 'GET',
		url: `https://moviesverse1.p.rapidapi.com/${val}`,
		params: {genre: `${params}`},
		headers: {
		  'X-RapidAPI-Key': '82e3a57359msh80e4efdeffe2e55p1db3ddjsn068acd23e2e2',
		  'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
		}
	  };
	  
	  try {
		  const response = await axios.request(options);
		  const res = response.data.movies
		  return res
	  } catch (error) {
		  console.error(error);
	  }
	
	},[]);

	return {getMovieAll}

}


export default MovieService