
import './pagination.scss'


export function Pagination({ paginate, totalProducts, productsPerPage, currentPage}) {

    const pageNumber = [];

    

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumber.push(i);
    }
     
  

  return (
    <div className='paginations_box'>
      
      <ul className='paginations'>
        {pageNumber.map((number) => (
          <li 
          className={currentPage === number ? (`paginat_item active`) : 'paginat_item'}
          key={number}
           onClick={() => paginate(number)}
           >
            <span className='paginat_link'>{number} </span>
          </li>
        ))}
      </ul>
      
    </div>
  );

}