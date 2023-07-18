import { FaTimes } from 'react-icons/fa'
import React, { useState, useEffect } from "react";
import todo from '../styles/todo.module.scss'
import Buttons from './Buttons'




const Todo = () => {

    const url = "https://jsonplaceholder.typicode.com/users"

const [data, setData] = useState([])
const [task , tasks] = useState(
    [
        {
           id: 1,
           text: 'Going to code at IT plaza',
           day: ' jun 20, 9:00am',
           reminder: true,
        },
 
        {
           id: 2,
           text: 'Going to gym',
           day: ' jun 20, 5:30pm',
           reminder: true,
        },
 
        {
           id: 3,
           text: 'Going to code at home 9:30pm',
           day: ' jun 20, 9:00pm',
           reminder: false,
        }
 
     ]
  )



const fetchInfo = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
}

useEffect(() => {
    fetchInfo();
}, [])

// const removeElement =(index) => {
//   const newList = data.filter((i) => ( i.id != index))
//  console.log(newList);
//   setData(newList)

// }

const removeArrayList = (listOf) => {
      const remove = data.filter((i) => (i.id != listOf))
      setData(remove)
}

const addArrayList = (newArray) => {
   const add = data.push((i) => (i.index ))

console.log(add)

}

    return (
        <div>
            <div className={todo.todo}>
                <div className={todo.list}>
                    <ul>

                        {
                            data.map((todo, index) => {
                                return <li  key={todo.id}>{(todo.name)}

                                <FaTimes onClick={() => {removeArrayList(todo.id)}}></FaTimes>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <input type="text" placeholder='Add A Task Here'/>

                <div className={todo.button}>
                    <Buttons title='ADD' onClick={addArrayList(todo.id)}/>
                </div>



            </div>


        </div>
    )
}

export default Todo