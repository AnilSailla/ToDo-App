import { isEditable } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoConext';

export default function TodoItem({todo}) {
    const {updateTodo,deleteTodo,toggleComplete} = useContext(TodoContext);
    const [todoMsg, setTodoMsg]= useState(todo.todo);
    const [isEditable,setIsEditable]= useState(false);

    function handleEditable(){
        if(todo.completed === true) return;
        if(isEditable)updateTodo(todo.id,{id:todo.id,todo:todoMsg,completed:todo.completed})
        setIsEditable((prev) => !prev);
    }
  return (
    <div className='item'>
        <input type='checkbox' 
        onChange={()=> toggleComplete(todo.id)}
        />

        <input type='text'
        className={`display-box ${todo.completed ? 'done':'not-done'}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
        />


        <button onClick={handleEditable}>
            {isEditable?"📁" : "✏️"}
        </button>


        <button onClick={()=>deleteTodo(todo.id)}>
         ❌
        </button>

    </div>
  )
}
