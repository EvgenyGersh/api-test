import { useState } from 'react'
import './input.scss'

const Input = (props) => {

    const[value, setValue] = useState('');

    const onChange = (e) => {
        const value = e.target.value
        setValue(value);
        props.onInput(value)
    }

    return (
    <div className='input_wrap'>
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            value={value}
            onChange={onChange}/>
    </div>
    )
}
export default Input