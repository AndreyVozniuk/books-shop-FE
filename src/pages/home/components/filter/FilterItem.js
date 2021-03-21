import PT from 'prop-types'
import styles from './Filter.module.scss'

export default function FilterItem({text, type, value, name, onChange, checked}) {
  return <div className={styles.filterItem}>
    <label>
      <input type={type} value={value} name={name} onChange={onChange} checked={checked}/>
      {text}
    </label>
  </div>
}

FilterItem.propTypes = {
  text: PT.string.isRequired,
  type: PT.string.isRequired,
  value: PT.string.isRequired,
  name: PT.string.isRequired,
  checked: PT.bool,
  onChange: PT.func,
}
