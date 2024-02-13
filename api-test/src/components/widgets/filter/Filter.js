import Select from '../../ui/select/Select';
import Input from '../../ui/input/Input'
import { filterList } from './filtersList';


import './filter.scss'

function Filter(props) {

    const {categorys} = filterList
   
    return (
    <div className='filter_wrap'>
        
        <Select filterList={categorys} name='categorys' onSelect={(e)  => props.onSelect(e.target.value)}/>
        
        <Input value={'search'} type={'text'} placeholder={'search...'}/>

    </div>
    )
    
}
export default Filter