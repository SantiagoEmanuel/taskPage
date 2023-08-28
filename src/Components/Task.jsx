import { deleteTask } from "../api/task.api"
import { toast } from 'react-hot-toast'

export function Task(task) {

    async function taskDone(id){
        await deleteTask(id)

        document.getElementById(id).className += ' animate__backOutDown'
        setTimeout(() => {
            document.getElementById(id).style.display = 'none'
        }, 950)

        toast('¡¡Tarea realizada ✔️!!',{
            style: {
                border: '1px solid black',
                color: 'rgb(6, 173, 6)',
                fontSize: '1.3rem',
                fontWeight: '700'
              },
        })
    }

    async function taskDelete(id) {
        await deleteTask(id)

        document.getElementById(id).className += ' animate__hinge'
        setTimeout(() => {
            document.getElementById(id).style.display = 'none'
        }, 2000)

        toast('¡Tarea eliminada ❌!',{
            style: {
                border: '1px solid black',
                color: 'rgb(235, 30, 30)',
                fontSize: '1.3rem',
                fontWeight: '700'
              },
        })
    }


    return (
            <div className='taskContent animate__animated animate__rubberBand' key={task.id} id={task.id}>
                <div className="task">{task.task}</div>
                <button className="btn btnDone" onClick={() => taskDone(task.id)}>DONE</button>
                <button className="btn btnDelete" onClick={() => taskDelete(task.id)}>DELETE</button>
            </div>
    )
}