import Catalog from '../catalog/Catalog';
import Filter from '../filter/Filter';

import './main.scss';

function Main () {
    return (
        <div className='main_wrap'>
        <Filter/>
        <Catalog/>
        </div>
    )
}

export default Main