import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { persist } from 'zustand/middleware';

export type TodoType = {
    id:number;
    todo:string;
    isDone:boolean
}

type State = {
todos:Array<TodoType> | []
}

type Action = {
    addTodo: (todo:TodoType) => void
    toggleTodo:(id:number, ) => void
    handeDelete:(id:number) => void
}


export const todoStore  = create<State & Action>()(
    devtools(
       persist(
        (set) => ({

            todos:[],
            addTodo:(parameter:TodoType) => set((state) => ({todos: [...state.todos, parameter ]})),
            toggleTodo:(id:number) =>  set((state) => (
                {
                    todos:state.todos.map((item) => {
                        if(item.id == id){
                           return {...item, isDone:!item.isDone}
                        }
                        return item
                    })
                }
            )),
            handeDelete:(id:number) => set((state) => (
                {
                 todos:state.todos.filter((item) => item.id !== id)
    }
            ))
            }),

     {name: "todoStore"}
       )
        
        
        
)   
)
