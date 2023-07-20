import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import button from '../styles/button.module.scss'

const Buttons = (props) => {
  const newArray = {
    work : "wash Plates"
}
const [work , setWork] = useState(['sleep'])
 
const mytask = () => {
  setWork(current => [...current , "eat" , 'beans'])
}

const removeAdd = (newlyAdded) =>{
   const removeAddedArray = work.filter((i) => (i.id !== newlyAdded))

 setWork(removeAddedArray)
}
  return (
    <div>
      <ul>
       {work.map((work , index) => {

          return <li  key={work.id}>{(work)}<FaTimes onClick={() => {removeAdd(work.id)}}></FaTimes></li>
       })}
       </ul> 
        <div className={button.button}>
          <button onClick={mytask}>  <h2> {props.title}</h2> </button>
       
        
        </div>
    </div>
  )
}

export default Buttons








