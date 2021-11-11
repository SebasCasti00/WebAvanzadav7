import { useState } from 'react';
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Task } from "./interfaces/Task";

interface Props {
  title?: string;
}

export function App({ title }: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false
    }
  ]);

  //dar id con fecha actual
  const getCurrentTimeStap = (): number => new Date().getTime();

  const addANewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimeStap(), completed: false}])

  const deleteATask = (id: number) => setTasks(tasks.filter(task => task.id !== id));
  

  return (
    <div className="App">
      {title && <h1>{title}</h1>}

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask}/>
          </div>

          <div className="col-md-8" >
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
