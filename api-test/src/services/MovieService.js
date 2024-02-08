import { useEffect, useState } from 'react';

import axios from 'axios';



const MovieService = () => {
	
const [value, setValue] = useState(1)


 const options = {
		method: 'GET',
		url: `https://moviesverse1.p.rapidapi.com/movies/${value}`,
		headers: {
		  'X-RapidAPI-Key': '82e3a57359msh80e4efdeffe2e55p1db3ddjsn068acd23e2e2',
		  'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
		}
	  };

	const getResource = async(url) => {
		
		try {
			const response = await axios.request(options);
			return response.data
		} catch (error) {
			console.error(error);
		}

		
	}

	const  getMovieAll = async (val) => {
		setValue(val)
		return await getResource(options)
			
			
		
	}

	return {getMovieAll}
}

export default MovieService