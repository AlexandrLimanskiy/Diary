import styles from '/src/components/cssModules/TodoList/TodoListComponents/TodoListMainPanel/AddTask/TaskItem.module.scss'

export default function TaskItem({taskName}) {
    return(
        <>
            <div className={styles.taskItem}>
                <div className={styles.taskItemContainer}>
                    <div className="taskTitle">
                        <p>{taskName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}