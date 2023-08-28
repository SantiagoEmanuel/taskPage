import './App.css'
import { useEffect, useState } from "react";
import { getAllTask, createTask } from './api/task.api'
import { useForm } from "react-hook-form";
import { Task } from './Components/Task';
import toast, { Toaster } from 'react-hot-toast';
import 'animate.css'


export default function App() {

  const [tasks, setTask] = useState()

  useEffect(()=>{
    // Get all task
    getTaskList()
  }, [])

  const { register, handleSubmit } = useForm();

  const newTask = handleSubmit((data) => {
    // Post function
    createTask(data)

    // Reload taskList, and save a new task
    getTaskList()
  })

  async function getTaskList() {
    // Get function
    const res = await getAllTask()
    // Save all tasks
    setTask(res.data)

    // set empty value in taskInput
    document.getElementById('taskInput').value = ''
  }

  // TEST TOAST
  const notify = () => toast(`Task was added successfully ✔️`, {
    style: {
      border: '1px solid black',
      fontSize: '1.3rem',
      fontWeight: '600'
    },
  })

  return (
    <main className='main'>
      <section className='mainSection'>
        <header className='header'>
          <h1 className='title'>Tasks</h1>
        </header>
        <div className='contentForm'>
          <form id='mainForm' onSubmit={newTask}>
            <input type="text" id="taskInput" placeholder='Write your task' {...register('task', {required: true})} autoFocus/>
            <input type="submit" className='btnAddTask' value="Add task" onClick={notify}/>
          </form>
        </div>
        <article className='mainArticleTaskContent'>
          {tasks?.map(task => (
            <Task key={task.id} task={task.task} id={task.id} />
          ))}
        </article>
      </section>
      <Toaster />
    </main>
  )
}