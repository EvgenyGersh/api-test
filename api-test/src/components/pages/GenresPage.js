import { useState } from 'react';
import Catalog from '../widgets/catalog/Catalog';
import Filter from '../widgets/filter/Filter';
import { filterList } from '../widgets/filter/filtersList';

const GenresPage = (props) => {

    const {genres} = filterList

    const[params, setParams] = useState('action')

    const onSelect = (selectedValue) => {
        setParams(selectedValue)
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
            <Filter onSelect={onSelect} name={genres} activeView={activeView} onInput={onInput}/>
            <Catalog  val={'get-by-genre'} params={params} view={view} terms={terms} searchMovies={searchMovies}/>
        </div>
       
    )
        
    
}
export default GenresPage