import { createContext } from "react";
const TodoContext =createContext({
    todos:[
            {
                id:Date.now(),
                todo: "new todo",
                completed: false
            }
        ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}

})

export default TodoContext;