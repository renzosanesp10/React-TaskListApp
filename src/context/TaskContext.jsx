import { createContext, useState, useEffect } from "react"
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTask] = useState([])

    function createTasks(task) {
        setTask([...tasks, {
            title: task.title,
            id: tasks.length + 1,
            description: task.description
        }])
    }

    function deleteTask(taskId) {
        setTask(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTask(data)
    }, [])


    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTasks
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext
