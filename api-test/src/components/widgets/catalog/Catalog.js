import { useEffect, useState } from 'react';
import Item from '../item/Item';
import MovieService from "../../../services/MovieService";

import './catalog.scss'



const Catalog = (props) => {

  
  const {getMovieAll} = MovieService();
  


  const[items, setItems] = useState([])

  useEffect(() => {
      
        getMovieAll().then(res =>  
          setItems(res.movies)
        )
          
  }, [])

  
 
    return (
         <div className='catalog_wrap'>
            
             {items.map(item => (
             <Item id={item.id} 
            img={item.img}
            text={item.text}
            link={item.link}
            key={item.id}
             />
           ))}  
           
      
        </div>
        
    )
}

export default Catalog