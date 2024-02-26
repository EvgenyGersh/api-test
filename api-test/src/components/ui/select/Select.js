
import './select.scss';


const Select = (props) => {
   
    const opt = props.optList

    return (
        <div className='select_wrap'>
            <select name={props.name} 
            onChange={props.onSelect}
            >
                {opt.map(o =>(
                    <option key={o.id}
                     value={o.value}
                    params={o.params}
                    >{o.name}</option>
                ))    
                }
                
            </select>
           
        </div>
       
    )
}
export default Select
