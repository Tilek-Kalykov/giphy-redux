import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { get_all_giphy } from '../../actions';
import './Form.css'

export default function Form() {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const search = (e) => {
        e.preventDefault()
        dispatch(get_all_giphy(value))
      }

  return (
      <div>
          <form onSubmit={(e)=>search(e)} className='form'>
        <input
        onChange={(e)=>
          setValue(e.target.value)}
        value={value}
        type='text'
        className='input'
        placeholder='Search your Giphy'/>

        <button className='button'>Search</button>

      </form>

      </div>
  )
}