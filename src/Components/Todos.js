import React from 'react'
import TodoItem from './TodoItem'
import AddTodos from './AddTodos'

const Todos = (props) => {
  return (
    <>
    <div className='container w-80  sm:w-2/6 my-10 bg-blue-300  rounded-3xl mx-auto p-5 shadow-xl'>
      <AddTodos addTodo={props.addTodo}/>
     {props.todos.map((todo)=>{return(<TodoItem title={todo.title} key ={todo.sno} onDelete={props.onDelete}/>)})}
    </div>
    </>
  )
}

export default Todos
