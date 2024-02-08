import Select from '../../ui/select/Select';
import Input from '../../ui/input/Input'
import { filterList } from './filtersList';

import './filter.scss'

function Filter() {
    const {years, genres, categorys} = filterList
    return (
    <div className='filter_wrap'>
        <Select filterList={years} name='years'/>
        <Select filterList={genres} name='genres'/>
        <Select filterList={categorys} name='categorys'/>
        
        <Input value={'gfgff'} type={'text'} placeholder={'search...'}/>

    </div>
    )
}
export default Filter