import { FaTimes } from 'react-icons/fa'
import todo from '../styles/todo.module.scss'
import Buttons from './Buttons'


const Todo = () => {
  return (
    <div>
<div className={todo.todo}>
<div className={todo.list}>
  <ul>
   <li>Read a book<FaTimes></FaTimes></li> 
   <li>Take a nap <FaTimes></FaTimes></li>
   <li>Wash Plates <FaTimes></FaTimes></li>
   <li>Cook <FaTimes></FaTimes></li>
   <li>Eat<FaTimes></FaTimes></li>
   <li>Code<FaTimes></FaTimes></li>
   <li>Watch a Movie<FaTimes></FaTimes></li>
   <li>code<FaTimes></FaTimes></li>
   <li>Sleep<FaTimes></FaTimes></li>
  </ul>
</div>

<div className={todo.button}>
<Buttons title='ADD'/>
</div>



</div>
    </div>
  )
}

export default Todo