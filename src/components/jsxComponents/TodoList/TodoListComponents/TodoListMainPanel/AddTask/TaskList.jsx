import TaskItem from "./TaskItem";

export default function TaskList({taskName}) {
    return(
        <>
            <TaskItem taskName={taskName}/>
        </>
    )
}