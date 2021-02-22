import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
      },
      {
        id: 3,
        text: "Shopping Groceries",
        day: "Feb 5th at 2:30pm",
        reminder: false
      }
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id,...task}; //add id to the task object
  setTasks([...tasks, newTask]); // add newTask to the existing tasks
  }

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>(task.id !== id)))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to display')}
      {/* if showAddTask is true then only call AddTask(another form of if else using ternary) */}
      {showAddTask && (<AddTask onAdd={addTask}/>)}
    </div>
  );
}

export default App;
