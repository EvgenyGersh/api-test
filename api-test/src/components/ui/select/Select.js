

import './select.scss';


const Select = (props) => {
    
    
    
    const opt = props.filterList

    return (
        <div className='select_wrap'>
            <select name={props.name}>
                {opt.map(o =>(
                    <option key={o.id} value={o.value}>{o.value}</option>
                ))    
                }
                
            </select>
        </div>
    )
}
export default Select
