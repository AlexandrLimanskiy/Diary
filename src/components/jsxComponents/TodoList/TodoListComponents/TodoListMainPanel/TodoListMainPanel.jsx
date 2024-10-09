import { useState } from 'react'
import styles from '/src/components/cssModules/TodoList/TodoListComponents/TodoListMainPanel/TodoListMainPanel.module.scss'
import TaskList from './AddTask/TaskList'

export default function TodoListMainPanel() {
    const [nameTask, setNameTask] = useState('') //имя созданной задачи
    const [taskList, setTaskList] = useState([]) //массив хранения задач
    function addTaskFn(event) {
        event.preventDefault()
        const newTask = {
            id: Date.now(), //уникальный ID задачи
            name: nameTask //имя задачи
        }
        setTaskList([...taskList, newTask])
        setNameTask('')
    }
    function editTaskFn(taskId, newName) {
        setTaskList(taskList.map(task => 
            task.id === taskId ? {...task, name: newName} : task
        ))
    }
    function deleteTaskFn(taskId) {
        setTaskList(taskList.filter(task => task.id !== taskId))
    }
    return(
        <>
            <div className={styles.mainPanel}>
                <div className={styles.mainPanelContainer}>
                    <div className={styles.addTaskForm}>
                        <form action="#" onSubmit={addTaskFn}>
                            <input onChange={(e) => setNameTask(e.target.value)} type="text" placeholder='Введите название задачи' value={nameTask} />
                            <button type='submit'>Добавить</button>
                        </form>
                    </div>
                    <div className={styles.listTask}>
                        {taskList.map((task) => (<TaskList key={task.id} taskName={task.name} onDelete={() => deleteTaskFn(task.id)} onEdit={(newName) => editTaskFn(task.id, newName)} />))}
                    </div>
                </div>
            </div>
        </>
    )
}