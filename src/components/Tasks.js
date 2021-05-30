import React, { useContext } from 'react'
import Task from './Task'
import taskDataContext from './ContextTask'

const Tasks = ({ onDelete, search }) => {

  const tasks = useContext(taskDataContext);

  return (

    <div className='tasks'>
      {search === undefined ? (tasks.map((eachTask) => (
        <Task key={eachTask.id}
              task={eachTask}
              onDelete={onDelete}
         />
      ))
      ) : ('')
      }

      {search !== undefined ? (
        tasks.filter((eachTask) => (
        eachTask.name.toLowerCase().includes(search.toLowerCase()))).map((eachTask) => (
          <Task key={eachTask.id}
                task={eachTask}
                onDelete={onDelete}
           />
        ))
      )
      : ('')
      }
    </div>

  )
}

export default Tasks
