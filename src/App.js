import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
    const tasksFromServer =  await fetchTasks()
    setTasks(tasksFromServer);
    }

    getTasks()
  }, [])

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  // Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json();
    //console.log(data);
    return data;
  }
  

//Add Task
const addTask = async(task) => {
   const response = await fetch('http://localhost:5000/tasks', {
     method: 'POST',
     headers: {
       'Content-type':'application/json'
     },
     body: JSON.stringify(task)
   })

   const newTaskData = await response.json();
   setTasks(...tasks, newTaskData)

  // const id = Math.floor(Math.random() * 10000) + 1;
  // const newTask = {id,...task}; //add id to the task object
  // setTasks([...tasks, newTask]); // add newTask to the existing tasks
  }

//Delete Task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })

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
