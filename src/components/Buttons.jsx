// import { FaTimes } from 'react-icons/fa'
import button from '../styles/button.module.scss'

const Buttons = (props) => {
  return (
    <div>
        {/* <FaTimes>Buttons</FaTimes> */}

        <div className={button.button}>
          <h2> {props.title}</h2> 
        </div>
    </div>
  )
}

export default Buttons