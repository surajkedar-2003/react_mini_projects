import React from 'react'
import Taskitems from './Taskitems'
function TaskColumn({title, tasks, toggleComplete}) {
  return (
    <section className='bg-pink-400 m-10 p-4 rounded-2xl min-h-96'>
        <div className='text-white text-3xl ml-8'><h2>{title}</h2></div>

        {tasks.map((task, index) => (

          <Taskitems key={index} taskname={task.task} completed={task.completed} toggleComplete ={()=>toggleComplete(index)} />

        ))}
    </section>
    
  )
}

export default TaskColumn