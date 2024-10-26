import TodoContext from './TodoConext';
import { useEffect, useState } from 'react';

function TodoProvider({children}){
    const [todos, setTodos]=useState([]);

    const addTodo = (todo)=>{
        setTodos((prevTodos) =>{
            return [...prevTodos,todo]
        })
    }

    function deleteTodo(id){
        setTodos((prevTodos)=>{
            return prevTodos.filter((prevtodo)=> prevtodo.id !==id)
        })
    }

    function updateTodo(id, todo){
        setTodos((prevTodos) => prevTodos.map((prevtodo) =>prevtodo.id === id ? todo:prevtodo))
    }

    function toggleComplete(id){
        setTodos((prevTodos) => prevTodos.map((prevtodo) => prevtodo.id === id ? {...prevtodo, completed:!prevtodo.completed}:prevtodo))
    }

    useEffect(()=>{
        const storedTodos=JSON.parse(localStorage.getItem('todos'));
        if(storedTodos && storedTodos.length >0)
        setTodos(storedTodos);
    },[])
    
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    return(
        <TodoContext.Provider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;