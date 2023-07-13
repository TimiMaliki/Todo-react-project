import todo from '../styles/todo.module.scss'
import Buttons from './Buttons'


const Todo = () => {
  return (
    <div>
<div className={todo.todo}>
<div className={todo.list}>
  <ul>
   <li>Read a book</li>
   <li>Take a nap</li>
   <li>Wash Plates</li>
   <li>Cook</li>
   <li>Eat</li>
   <li>Code</li>
   <li>Watch a Movie</li>
   <li>code</li>
   <li>Sleep</li>
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