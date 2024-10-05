import { useEffect, useState } from 'react'
import styles from '/src/components/cssModules/TodoList/TodoList.module.scss'
import TodoListTopPanel from './TodoListComponents/TodoListTopPanel/TodoListTopPanel'
import TodoListMainPanel from './TodoListComponents/TodoListMainPanel/TodoListMainPanel'
import TodoListLeftPanel from './TodoListComponents/TodoListLeftPanel/TodoListLeftPanel'

export default function ToDoList() {
    return(
        <>
            <div className={styles.todoList}>
                <div className={styles.todoListContainer}>
                    <div className="todoListTopPanel">
                        <TodoListTopPanel/>
                    </div>
                    <div className={styles.todoListCentralMenu}>
                        <div className="todoListLeftPanel">
                            <TodoListLeftPanel/>
                        </div>
                        <div className="todoListMainPanel">
                            <TodoListMainPanel/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}