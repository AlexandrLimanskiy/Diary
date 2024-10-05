import styles from '/src/components/cssModules/TodoList/TodoListComponents/TodoListMainPanel/TodoListMainPanel.module.scss'

export default function TodoListMainPanel() {
    return(
        <>
            <div className={styles.mainPanel}>
                <div className={styles.mainPanelContainer}>
                    <div className={styles.addTaskForm}>
                        <form action="#">
                            <input type="text" placeholder='Введите название задачи' />
                            <button type='submit'>Добавить</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}