import { useEffect, useState } from 'react';
import Item from '../item/Item';
import {Pagination} from '../../ui/pagination/pagination';
import MovieService from './../../../services/MovieService';
import ShowModal from '../showModal/ShowModal'

import './catalog.scss'


const Catalog = ({ val, params, view, searchMovies, terms}) => {

  
  const {getMovieAll} = MovieService();


  const[items, setItems] = useState([])

  useEffect(() => {
    getMovieAll(val,params)
        .then(res =>  { 
        setItems(res)
        setCurrentPage(1)
      }
    )    
}, [val,params])


    const searchItems = searchMovies(items, terms)


    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 15;

    const totalProducts = searchItems.length;

    const lastItemIndex = currentPage * productsPerPage;

    const firstProductIndex = lastItemIndex - productsPerPage;

    const currentItems = searchItems.slice(firstProductIndex, lastItemIndex);


  const paginate = (number) => setCurrentPage(number);

  
  const [modal, setModal] = useState(false)
  const [modalItem, setModalItem] = useState(null)

  const modalShow = (item) => {
    setModal(!modal)
    setModalItem({item})
  }
  
  return (
         <div className='catalog_wrap'>
             <div className='items_wrap' >
             { 
             currentItems.map((item, id) => (
             <Item 
                id={id} 
                img={item.image}
                text={item.title}
                link={item.link}
                title={item.title}
                key={id}
                posterImage={item.posterImage}
                description={item.description}
                year={item.year}
                rating={item.rating}
                view={view}
                modalShow={modalShow}
              />
           ))} 
            </div>
            <Pagination items={items}
              paginate={paginate}
              totalProducts={totalProducts}
              productsPerPage={productsPerPage}
              currentPage={currentPage}
            
            />
          {modal && <ShowModal modalItem={modalItem} modalShow={modalShow}/>}
        </div>
        
    )
}



export default Catalog
