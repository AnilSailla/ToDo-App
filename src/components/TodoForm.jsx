import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoConext';

export default function TodoForm() {
    const {addTodo}=useContext(TodoContext);
    const [todo,setTodo]= useState('');
    function handleSubmit(e){
        e.preventDefault()
        addTodo({id:Date.now(),todo:todo,completed:false});
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            />
            <button type='submit'>Add</button>
        </form>

    </div>
  )
}
