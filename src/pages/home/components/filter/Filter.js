import { useState } from 'react'
import alertify from 'alertifyjs'
import Button from '@shared/button/Button'
import FilterItem from './FilterItem'
import styles from './Filter.module.scss'

const categories = [
  'Dystopian Fiction', 'Popular Science', 'Philosophical Fiction',
  'Classic Literature', 'Detective Fiction', 'Science Fiction'
]

export default function Filter(){
  const [filterByPrice, setFilterByPrice] = useState('')
  const [filterByCategories, setFilterByCategories] = useState('')

  function filterBooks() {
    if(!filterByPrice && !filterByCategories){
      return alertify.notify('Please select filter options 🙂', 'error', 1.5)
    }

    alert('Filter!')
    console.log('Filter', filterByPrice, filterByCategories)
  }

  function categoriesHandler(e) {
    const value = e.target.value

    if(filterByCategories.includes(value)){
      setFilterByCategories(prev => prev.replace(value, ''))
    }else{
      setFilterByCategories(prev => prev + value)
    }
  }

  function resetOptions() {
    setFilterByPrice('')
    setFilterByCategories('')
  }

  return  <div className={styles.wrapper}>
    <div className={styles.filterTitle}>Filter</div>
    <hr />
    <div className={styles.categories}>Filter by categories</div>
    {
      categories.map((el, i) => {
        return <FilterItem text={el} value={'_' + el} key={`${el}_${i}`} type='checkbox' name='FilterByCategories'
        onChange={categoriesHandler}
        checked={filterByCategories.includes('_' + el)}
        />
      })
    }

    <div className={styles.categories}>Filter by price</div>
    <FilterItem text='Expensive at first' value='expensive' type='radio' name='filterByPrice'
    onChange={e => setFilterByPrice(e.target.value)}
    checked={filterByPrice === 'expensive'}
    />
    <FilterItem text='Cheap at first' value='cheap' type='radio' name='filterByPrice'
     onChange={e => setFilterByPrice(e.target.value)}
     checked={filterByPrice === 'cheap'}
     />

    <div className={styles.filterBtns}>
      <Button width='43%' padding='5px 0px' fontSize='16px' onClick={filterBooks}>Filter</Button>
      <Button width='43%' padding='5px 0px' fontSize='16px' onClick={resetOptions}>Reset options</Button>
    </div>
  </div>
}
