import { useCallback, useEffect, useState } from 'react';
import Catalog from '../catalog/Catalog';
import Filter from '../filter/Filter';

import './main.scss';

const Main = () => {

    const[val, setVal] = useState('top-250-movies')

    console.log(val)

     const onSelect = (selectedValue) => {
        setVal(selectedValue)
    }
    
    

    
    return (
        <div className='main_wrap'>
        <Filter onSelect={onSelect}/>
        <Catalog val={val}/>
        </div>
    )
}

export default Main