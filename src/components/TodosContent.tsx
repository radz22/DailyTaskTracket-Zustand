import React, { useState } from 'react';
import { todoStore } from '../state/Todos';
import { MdDeleteOutline } from "react-icons/md";

const TodosContent = () => {


    const [inputUser, setInputUser] = useState("");
    const todoState = todoStore()
    
    
    
    
    
    const  handleSubmit = (event:React.FormEvent) => {
    
      event.preventDefault();
      if(inputUser.length > 0){
        todoState.addTodo({
          id: Date.now(),
          todo:inputUser,
          isDone:false
        })
      }
    
      setInputUser("")
    }
    console.log(todoState.todos.map((item) => item.todo))

  return (
    <div>
  <div className='h-auto mt-10 w-screen flex justify-center items-center'>
         
    <div className='w-[600px] p-2 rounded-md shadow-lg bg-[#242424]'>
   <h1 className='font-bold text-3xl'>Study Tracker</h1>
   <p>Add your Daily Task</p>

   <form onSubmit={handleSubmit}>
<div className='mt-5'>
<input type='text' className='w-full h-10 p-2 rounded-lg bg-[#282828]  
outline-red-400  border border-slate-600	'
placeholder='Enter your todo'
value={inputUser}
onChange={(e) => setInputUser(e.target.value)}
/>
</div>
</form>

<div className='mt-5'>
{
todoState.todos.length > 0 && todoState.todos.map((item) => (
<div className={`w-full rounded-lg p-2 border  mb-2 flex  justify-between items-center ${item.isDone ? "border-red-400" : "border-green-400"}`}>
 <p className={item.isDone ? "line-through" : "none"}>{item.todo}</p>
<div className='flex gap-2'>
    
<input type='checkbox'
onChange={() => todoState.toggleTodo(item.id)}
/>
<h1 onClick={() => todoState.handeDelete(item.id)}><MdDeleteOutline /></h1>
    </div>
</div>
))
}
</div>
    </div>
  </div></div>
  )
}

export default TodosContent