import TaskItem from "./TaskItem";

export default function TaskList({taskName, onDelete, onEdit}) {
    return(
        <>
            <TaskItem taskName={taskName} onDelete={onDelete} onEdit={onEdit}/>
        </>
    )
}