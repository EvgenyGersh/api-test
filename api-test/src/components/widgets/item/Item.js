import { Link } from 'react-router-dom'
import './item.scss'

const Item = ({img, link, text, title, id, posterImage, description,rating, year, view, modalShow}) => {

    return (
        // <Link to={`/single/${id}`} className={view ? `movie_item  active` : 'movie_item '}>
         <div className={view ? `movie_item  active` : 'movie_item '} onClick={() => modalShow({title,id, posterImage, description,rating, year, img })} > 
            
                <img src={img ? img: posterImage} alt=''/>
                <div className='text_box'>
                    <h4 className='movie_title'>{text}</h4> 
                        {description && <p className='description'>{description}</p> }
                    <p className='description height_auto'>
                        рейтинг: {rating }
                    </p>
                    <p className='description height_auto'>
                        год: {year }
                    </p>
                </div>
            
       </div>
            // </Link> 
    )
}
export default Item