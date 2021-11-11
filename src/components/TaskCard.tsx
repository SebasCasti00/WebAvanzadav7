import { Task } from "../interfaces/Task";

interface Props {
    task: Task;
    deleteATask: (id:number) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
    return (
        <div className='card card-body bg-secondary rounder-0' >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button className="btn btn-danger" onClick={()=> task.id && deleteATask(task.id)}>
                Delete
            </button>
        </div>
    )
}
