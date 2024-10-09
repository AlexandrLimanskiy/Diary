import styles from '/src/components/cssModules/TodoList/TodoListComponents/TodoListMainPanel/AddTask/TaskItem.module.scss'

export default function TaskItem({taskName}) {
    return(
        <>
            <div className={styles.taskItem}>
                <div className={styles.taskItemContainer}>
                    <div className={styles.taskTitle}>
                        <p>{taskName}</p>
                    </div>
                    <div className={styles.taskButtons}>
                        <div className={styles.buttons}>
                            <p>Edit</p>
                        </div>
                        <div className={styles.buttons}>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}