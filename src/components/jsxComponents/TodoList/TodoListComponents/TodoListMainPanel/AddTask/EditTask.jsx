import { useState } from "react"
import styles from '/src/components/cssModules/TodoList/TodoListComponents/TodoListMainPanel/AddTask/EditTask.module.scss'

export default function EditTask({onEdit, setIsEdit, isEdit}) {
    const [newEditName, setNewEditName] = useState('')
    function saveEditedName(e) {
        e.preventDefault()
        onEdit(newEditName)
        setNewEditName('')
        setIsEdit(false)
    }
    function close() {
        setIsEdit(false)
    }
    return(
        <div className={styles.editNameForm}>
            <form action="#" onSubmit={saveEditedName} className={styles.formEdit}>
                <input className={styles.title} type="text" onChange={(e) => setNewEditName(e.target.value)} value={newEditName} placeholder="Введите новое имя для задачи" />
                <button className={styles.save} type="submit">Сохранить</button>
                <div onClick={close} className={styles.close}>
                    <p>Закрыть</p>
                </div>
            </form>
        </div>
    )
}