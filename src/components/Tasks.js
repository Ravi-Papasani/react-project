import { useState } from "react";

const Tasks = () => {


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
    //to add a new task using useState 
    setTasks([...tasks, {
        id: 4,
        text: "Work outs",
        day: "Feb 6th at 6:30pm",
        reminder: true
      }])

    return (
        
        <>
          {tasks.map((task) => (
          <h2 key={task.id}>{task.text}</h2>
          ))}  
        </>
    )
}

export default Tasks
