import React from 'react'
import icon from '../img/icon.png'

const TodoItem = (props) => {
    return (
        <>
        <div className='container mx-auto flex bg-white rounded-md my-3 border-2 border-sky-400'>
            <h2 className='grow text-md p-3 text-left ml-2'>{props.title}</h2>
            <img className='flex-none p-2 h-12 w-12' src={icon} alt="delete" onClick={()=>props.onDelete(props.title)}/>
        </div>
        </>
    )
}

export default TodoItem
