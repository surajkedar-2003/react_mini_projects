import React from 'react'
import Tag from './Tag';
import non_tick from "../assets/non-tick.png"
import check_mark from "../assets/check-mark.png";
import delete_icon from "../assets/delete.png"
import edit_icon from "../assets/edit.png"

function Taskitems(props) {
  return (
    <>
        <div className='flex flex-row items-center justify-evenly my-3 gap-32 bg-blue-500 w-4/5 m-auto h-16 rounded-2xl' >
           <div className='flex flex-row' >
            <img src={props.completed?check_mark : non_tick} alt="" className={`w-8 h-8 mr-4`} onClick={props.toggleComplete} />
            <p className={`text-2xl ${props.completed ? 'line-through' : ' '}`}>{props.taskname}</p>
           </div>
          
            <div className='flex flex-row'>
              <img src={edit_icon} alt="" className='w-8 h-8 mr-10'/>
              <img src={delete_icon} alt="" className='w-8 h-8'/>
           </div>
        </div>
    </>
  )
}

export default Taskitems;