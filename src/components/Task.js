import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete }) => {

  return (

    <div className='task'>
      <h5>{task.name}  <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}} /></h5>
      <hr />
      <small>Birthday: {task.birthday}</small>
      <hr />
      <small>Phone: {task.phone}</small>
      <hr />
      <small>Address: {task.address}</small>
    </div>

  )
}

export default Task
