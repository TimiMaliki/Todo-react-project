import { FaTimes } from 'react-icons/fa'
import todo from '../styles/todo.module.scss'
import Buttons from './Buttons'


const Todo = () => {
    const myTodo = [
        {
            name: "Purpose in life"

        },

        {
            name: "how to make money"
        },
        {
            name: "This Life"
        },
        {
            name: "Until Reality Dawn on You"
        },
        {
            name: "what will be ,will be"
        },
        {
            name: "How life work"
        },
        {
            name: "This Life ,have money"
        },

    ]
    return (
        <div>
            <div className={todo.todo}>
                <div className={todo.list}>
                    <ul>

                        {
                            myTodo.map((todo, index) => {
                                return <li>{(todo.name)}<FaTimes></FaTimes></li>
                            })
                        }
                    </ul>
                </div>

                <div className={todo.button}>
                    <Buttons title='ADD' />
                </div>



            </div>
        </div>
    )
}

export default Todo