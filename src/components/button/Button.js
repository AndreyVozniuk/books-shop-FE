import PT from 'prop-types'
import './Button.scss'

export default function Button({children, onClick, width, height, padding, fontSize}) {
  return <button className='btn' onClick={onClick} style={{width, height, padding, fontSize}}>
    {children}
  </button>
}

Button.propTypes = {
  children: PT.any.isRequired,
  onClick: PT.func.isRequired,
  width: PT.string,
  height: PT.string,
  padding: PT.string,
  fontSize: PT.string
}