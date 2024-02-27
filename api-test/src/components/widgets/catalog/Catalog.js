import { useEffect, useState } from 'react';
import Item from '../item/Item';
import {Pagination} from '../../ui/pagination/pagination';
import MovieService from '../../../services/MovieService';
import ShowModal from '../showModal/ShowModal'
import Spinner from '../../spinner/Spinner'
import './catalog.scss'



const Catalog = ({ val, params, view,  terms}) => {

  
  const {getMovieAll} = MovieService();


  const[items, setItems] = useState([])

  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading(true)
    getMovieAll(val,params)
        .then(res =>  { 
        setItems(res)
        setLoading(false)
        setCurrentPage(1)
      }
    )    
}, [val,params,terms])


const searchMovies = (items, terms) => {
  if(terms.length === 0){
    return items
  }
  return items.filter(item => {
    return item.title.indexOf(terms) > -1
    
  //   return item.title.toLowerCase().includes(terms.toLowerCase())
  })
}


    const searchItems = searchMovies(items,terms)


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
    <>
        {loading ? <Spinner/> : 
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
}
        </>     
    )
}



export default Catalog
