import { useEffect, useState } from 'react';
import Item from '../item/Item';
import {Pagination} from '../../ui/pagination/pagination';
import MovieService from './../../../services/MovieService';

import './catalog.scss'


const Catalog = (props) => {

  const {getMovieAll} = MovieService();
  
  
  const[items, setItems] = useState([])

  console.log(props.val)
  const val = props.val
  console.log(val)

  useEffect(() => {
      
        getMovieAll(val).then(res =>  
          setItems(res.movies)
        )
          
  }, [val])

  
 
    return (
         <div className='catalog_wrap'>
             <div className='items_wrap'>
             {items.map((item, i) => (
             <Item id={item.id} 
            img={item.image}
            text={item.title}
            link={item.link}
            title={item.title}
            key={item.i}
             />

            
           ))} 
            </div>
            <Pagination/>
      
        </div>
        
    )
}



export default Catalog
