import './showModal.scss'

const ShowModal = (props) => {

    return (
       <div className='modal' onClick={() =>props.modalShow()}>
        <div className='modal_item'>
         <img src={props.modalItem.item.img ? props.modalItem.item.img: props.modalItem.item.posterImage} alt=''/>
                <div className='text_box'>
                    <h4 className='movie_title'>{props.modalItem.item.title}</h4> 
                        {props.modalItem.item.description && <p className='description'>{props.modalItem.item.description}</p> }
                    <p className='description height_auto'>
                        рейтинг: {props.modalItem.item.rating }
                    </p>
                    <p className='description height_auto'>
                        год: {props.modalItem.item.year }
                    </p>
                </div> 
       </div>
       </div>
    )
}
export default ShowModal