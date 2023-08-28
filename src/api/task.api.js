import axios from "axios";

const instance = axios.create({
    baseURL: 'https://task-page.onrender.com/task-api/task/'
})

export function getAllTask() {
    return instance.get('/');
}

export function createTask(task){
    return instance.post('/',task)
}

export function deleteTask(id) {
    return instance.delete(`/${id}/`, id)
}