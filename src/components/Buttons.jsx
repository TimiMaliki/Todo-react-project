import { useState } from 'react'
import button from '../styles/button.module.scss'

const Buttons = (props) => {
  const newArray = {
    work : "wash Plates"
}
const [work , setWork] = useState(['sleep'])

const mytask = () => {
  setWork(current => [...current , "eat"])
}

  return (
    <div>
      <ul>
       {work.map((task , index) => {

          return <li  key={work.id}>{(work)}</li>
       })}
       </ul>
        <div className={button.button}>
          <button onClick={mytask}>  <h2> {props.title}</h2> </button>
       
        
        </div>
    </div>
  )
}

export default Buttons