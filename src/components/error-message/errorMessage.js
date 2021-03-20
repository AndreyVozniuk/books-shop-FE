import './errorMessage.css'
import repairIcon from '@image/repair-expert.svg'

export default function ErrorMessage() {
  return <div className='error'>
    <div className='error-message'>Oops, something went wrong, but our team fix it now, don`t care</div>
    <div className='error-icon'>
      <img src={repairIcon} alt='repair-icon' />
    </div>
  </div>
}
