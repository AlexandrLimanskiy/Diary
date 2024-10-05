import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import styles from '/src/components/cssModules/todoList/TodoListComponents/TodoListTopPanel/TodoListTopPanel.module.scss'

export default function TodoListTopPanel() {
    return(
        <>
            <div className={styles.topPanel}>
                <div className={styles.topPanelContainer}>
                    <div className={styles.topPanelTitle}>
                        <p>Todo</p>
                    </div>
                    <div className={styles.search}>
                        <form action="#">
                            <input type="text" placeholder='Введите задачу для поиска...' />
                        </form>
                    </div>
                    <div className={styles.exitButton}>
                        <p><Link to={'/'}>Exit</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}