import { useState } from 'react';
import Catalog from '../widgets/catalog/Catalog';
import Filter from '../widgets/filter/Filter';
import { filterList } from '../widgets/filter/filtersList';

const CatalogPage = () => {

    const {categorys} = filterList

    const[val, setVal] = useState('top-250-movies')

     const onSelect = (selectedValue) => {
        setVal(selectedValue)
    }

    const[view, setView] = useState(false)

    const activeView = (view) =>{
        setView(view)
    }

    
    const[terms, setTerms] = useState('')

    const onInput = (search) =>{
      setTerms(search)
    }

    
  const searchMovies = (items, terms) => {
    if(terms.length === 0){
      return items
    }
    return items.filter(item => {
      return item.title.indexOf(terms) > -1
    //   return item.title.toLowerCase().includes(terms.toLowerCase())
    })
  }

    

    return (
        <div className='main_wrap'>
            <Filter onSelect={onSelect} name={categorys} activeView={activeView} onInput={onInput}/>
            <Catalog  val={val} view={view} terms={terms} searchMovies={searchMovies}/>
        </div>
       
    )
        
    
}
export default CatalogPage