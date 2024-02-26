import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import  MovieService from './../../services/MovieService';
import './singlePage.scss'

// export const getSingleId = (singleId) => {
//         const getSingleItem = item[singleId]
//     }
const SinglePage = () => {

    

    const {singleId} = useParams()
    console.log(singleId)


    return (
       
        <div className={ 'movie_item '} >
            
                {/* <img src={img ? img: posterImage} alt=''/> */}
                <div className='text_box'>
                <h4 className='movie_title'>text</h4> 
                    {/* <h4 className='movie_title'>{text}</h4> 
                        {description && <p className='description'>{description}</p> }
                    <p className='description height_auto'>
                        рейтинг: {rating }
                    </p>
                    <p className='description height_auto'>
                        год: {year }
                    </p> */}
                </div> 
             
         </div>
         
    )
}
export default SinglePage