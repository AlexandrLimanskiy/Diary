import styles from '/src/components/cssModules/TodoList/TodoListComponents/TodoListLeftPanel/TodoListLeftPanel.module.scss'

export default function TodoListLeftPanel() {
    return(
        <>
            <div className={styles.leftPanel}>
                <div className={styles.leftPanelContainer}>
                    <div className={styles.myDay}>
                    <img src="/diary/img/myday.svg" alt="" className={styles.myDaySvg} />
                        <p className={styles.myDayText}>Задачи на день</p>
                    </div>
                </div>
            </div>
        </>
    )
}