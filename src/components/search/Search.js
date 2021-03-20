import {useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import alertify from 'alertifyjs'
import {searchBooks} from '../../store/actions/booksActions'
import Button from '../button/Button'
import searchIcon from '@image/icon-search.svg'
import './Search.scss'

export default function Search() {
  const dispatch = useDispatch()
  const $input = useRef(null)
  const [searchBy, setSearchBy] = useState('byTitle')
  const [inputFocus, setInputFocus] = useState(false)

  alertify.set('notifier','position', 'top-right')

  function searchHandler() {
    if($input.current.value.replaceAll(' ', '') === ''){
      return alertify.notify('Input field is empty 🙁', 'error', 1.5)
    }

    dispatch( searchBooks($input.current.value.trim(), searchBy) )
    $input.current.blur()
  }

  function enterPressHandler(event) {
    if (event.keyCode === 13) {
      searchHandler()
    }
  }

  return <div className='search'>
    <div className='search-block'>
      <input className='search-input' placeholder='search books here...'
      style={{boxShadow: `${inputFocus ? '0 0 10px rgba(0,0,0,0.5)' : '0 0 0px rgba(0,0,0,0.5)'}`}}
      onKeyUp={enterPressHandler}
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
      ref={$input}
      />
      <Button  width='12%' height='35px' fontSize='18px' onClick={searchHandler}>
        <img src={searchIcon} alt='search-icon' className='search-icon'/>
        <span>Search</span>
      </Button>
    </div>

    <div style={{display: 'flex'}}>
      <div className='search-item' style={{marginRight:'10px'}}>
        <label>
          <input type='radio' name='searchBy' value='byTitle'
          onChange={e => setSearchBy(e.target.value)}
          checked={searchBy === 'byTitle'}
          /> By title
        </label>
      </div>
      <div className='search-item'>
        <label>
          <input type='radio' name='searchBy' value='byAuthor'
          onChange={e => setSearchBy(e.target.value)}
          checked={searchBy === 'byAuthor'}
          /> By author
        </label>
      </div>
    </div>
</div>
}
