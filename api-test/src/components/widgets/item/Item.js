import './item.scss'

const Item = ({img, link, text, id}) => {

    return (
        
        <div className='movie_item' >
            <img src={img} alt=''/>
            <a href="img.link">{link}</a>
            <p className='movie_title'>{text}</p> 
        </div> 
    )
}
export default Item