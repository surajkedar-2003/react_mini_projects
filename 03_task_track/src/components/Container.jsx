import './Container.css';
import Tracker from './Tracker';
import Tag from './Tag';
import TaskColumn from './TaskColumn';
import { useState } from 'react';

function Container() {
  const [taskData, setTaskData] = useState({
    task: "",
    tags:[]
  });

  const [tasks, setTasks] = useState([])

  function handleChange(e){
    const {name, value} = e.target;
    setTaskData((prev)=>{
      return {...prev , [name]:value}
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(taskData);
    setTasks((prev)=>{
      return [...prev, {...taskData, completed:false}]
    });
    setTaskData({task:"", tags : []})
  }

  function selectTag(tag){
    if(taskData.tags.some((item)=> item===tag)){
      const filterTags = taskData.tags.filter(item => item!==tag)
      setTaskData(prev =>{
        return {...prev, tags: filterTags}
      })
    }else{
      setTaskData(prev=>{
        return {...prev, tags: [...prev.tags, tag]};
      })
    }
  }

  function toggleComplete(index) {
    setTasks(prev => {
      const newTasks = prev.map((task, idx) => {
        // console.log(task);
        if (idx === index) {
          console.log(task.completed);
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      return newTasks;
    });
  }

  return (
    <>
        
       <section className="bg-[#041E42]  flex flex-row min-h-screen">
            <section className="w-3/5 border">

                <div id="input" className="border">
                  <form onSubmit={handleSubmit}>
                    <div className = "ml-10 my-5">
                    <input type="text" placeholder="enter your tasks" name='task' className="inputbox" onChange={handleChange} value={taskData.task}/>
                    <button className="bg-blue-700 px-6 py-3 m-4 rounded-md">+Add Task</button>
                    </div>
                    <div className="ml-20 mb-5">
                        <Tag tagName ="Health" selectTag={selectTag}></Tag>
                        <Tag tagName ="Study" selectTag={selectTag}></Tag>
                        <Tag tagName="Job" selectTag={selectTag}></Tag>
                        <Tag tagName="Family" selectTag={selectTag}></Tag>
                        <Tag tagName="Personal Development" selectTag={selectTag}></Tag>
                    </div>
                  </form>
                </div>
                <TaskColumn title="Uncomplete Tasks" tasks = {tasks.filter(task => !task.completed)} toggleComplete={toggleComplete}>
                  
                </TaskColumn>
                <TaskColumn title="Completed Tasks" tasks={tasks.filter(task => task.completed)} toggleComplete={toggleComplete}></TaskColumn>
            </section>

            <Tracker></Tracker>
       </section>
    </>
  )
}

export default Container