import React, { useState } from 'react'

const AddTask = ({taskList, setTaskList,task,setTask}) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(task.id){
      const date = new Date();
      const updateTask = taskList.map((todo)=>(
        todo.id===task.id ? {id:task.id,name:task.name,date:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: todo
      ));
      setTaskList(updateTask);
      setTask({})
    }
    else{

      if(e.target.task.value){
        const date = new Date();
      console.log("Hello world");

      console.log(e.target.task.value);
    
      const newTask ={
        id: date.getTime(),
        name: e.target.task.value,
        date:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }

      console.log("newTask" , newTask);

      setTaskList([...taskList,newTask]); 
      e.target.task.value =""
      setTask({})
      }else{
        alert('Please enter a valid Task')
      }
    }
  }
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name || ''}  placeholder='add task here.....' autoComplete='off' onChange={e => setTask({...task,name:e.target.value})} maxLength={30}/>
        <button  type='submit'>{task.id ? "Update": "Add"}</button>
      </form>
    </section>
  )
}

export default AddTask