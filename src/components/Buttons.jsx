import button from '../styles/button.module.scss'

const Buttons = (props) => {
  return (
    <div>
       

        <div className={button.button}>
          <h2> {props.title}</h2> 
        </div>
    </div>
  )
}

export default Buttons