
import Select from '../../ui/select/Select';
import Input from '../../ui/input/Input'
import Icon_1 from '../../../assets/icons/icon1.svg'
import Icon_2 from '../../../assets/icons/icon2.svg'

import './filter.scss'

const Filter = (props) => {


    return (
    <div className='filter_wrap'>
        
        <Select optList={props.name} name={props.name}
         onSelect={(e)  => props.onSelect(e.target.value)}
         />
        
        <Input value={'search'} type={'text'} placeholder={'search...'} onInput={props.onInput}
        />

        <div className='view_filter'>
            <img src={Icon_1} alt='' onClick={(e) => props.activeView(false)}/>
            <img src={Icon_2} alt='' onClick={(e) =>props.activeView(true)}/>
        </div>

    </div>
    )
    
}
export default Filter
