import { AiOutlinePlus } from "react-icons/ai"
import { ChangeEvent, FormEvent, useState, useRef } from "react"
import { Task } from "../interfaces/Task"

interface Props {
    addANewTask: (task: Task) => void;
}

type handleInputChange = (ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)

const initialState = {
    title: '',
    description: '',
}

export default function TaskForm({ addANewTask }: Props) {

    const [task, setTask] = useState(initialState);
    const inputTitle = useRef<HTMLInputElement>(null)

    const handleInputChange = ({
        target: { name, value },
    }: handleInputChange) => {
        setTask({ ...task, [name]: value });
    };

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addANewTask(task);
        setTask(initialState);
        inputTitle.current?.focus()
    }

    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Add Task</h1>

            <form onSubmit={handleNewTask}>

                <input
                    type="text"
                    placeholder="Write a task"
                    name="title"
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.title}
                    autoFocus
                    ref={inputTitle}
                />
                <textarea
                    name="description"
                    rows={2}
                    className="form-control mb-3 shadow-none border-0"
                    onChange={handleInputChange}
                    placeholder="Write a name"
                    value={task.description}
                ></textarea>

                <button className="btn btn-primary">
                    Save
                    <AiOutlinePlus />
                </button>
            </form>
        </div>
    )
}
