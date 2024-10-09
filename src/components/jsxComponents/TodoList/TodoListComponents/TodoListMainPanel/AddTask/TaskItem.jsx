import { useState } from 'react'
import styles from '/src/components/cssModules/TodoList/TodoListComponents/TodoListMainPanel/AddTask/TaskItem.module.scss'
import EditTask from './EditTask'

export default function TaskItem({taskName, onDelete, onEdit}) {
    const [isEdit, setIsEdit] = useState(false)
    function openEdit() {
        setIsEdit(true)
    }
    return(
        <>
            <div className={styles.taskItem}>
                <div className={styles.taskItemContainer}>
                    <div className={styles.taskTitle}>
                        <p>{taskName}</p>
                    </div>
                    {isEdit ? <EditTask onEdit={onEdit} isEdit={isEdit} setIsEdit={setIsEdit}/> : 
                        <div className={styles.taskButtons}>
                            <div onClick={openEdit} className={styles.buttons}>
                                <p>Редактировать</p>
                            </div>
                            <div onClick={onDelete} className={styles.buttons}>
                                <p>Удалить</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}