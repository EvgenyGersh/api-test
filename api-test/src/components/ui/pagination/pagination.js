
import './pagination.scss'


export function Pagination() {

    const pageNumber = [];
    const productsPerPage = 15;
    const totalProducts = 90;

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className='paginations_box'>
      <div className='arrow_prev'>
        {/* <Icon width={15} height={15}>
          <ArrowLeft />
        </Icon> */}
      </div>
      <ul className='paginations'>
        {pageNumber.map((number) => (
          <li className='paginat_item' key={number}
          //  onClick={() => paginate(number)}
           >
            <span className='paginat_link'>{number} </span>
          </li>
        ))}
      </ul>
      {/* <div className={style.slide_arrow_prev}>
        <Icon width={15} height={15}>
          <ArrowRight />
        </Icon>
      </div> */}
    </div>
  );

}