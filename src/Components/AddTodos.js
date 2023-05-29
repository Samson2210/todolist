import React, { useState } from 'react'

const AddTodos = ({addTodo}) => {
    const [title, setTitle] = useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        if(!title){
            alert('There is not data to add')
        }
        else{
            addTodo(title);
            setTitle("");
        }
    }


  return (
    <div className='my-8'>
      <form onSubmit={onSubmit}>
        <input type="text" className='p-3 mr-8  md:w-8/12 border-2 border-sky-400 rounded-2xl outline-none' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button type='submit' className='bg-sky-400 p-3 w-20 rounded-2xl shadow-2xl text-white font-bold mt-3 active:bg-white active:text-sky-500'>Add</button>
      </form>
    </div>
  )
}

export default AddTodos
