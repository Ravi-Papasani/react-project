import { FaTimes } from "react-icons/fa";

const Task = ({task}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={faStyle}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

const faStyle = {color:'red', cursor:'pointer'}

export default Task
