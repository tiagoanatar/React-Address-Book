//import './App.css'
import React, { useState, useContext } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Search from './components/Search'
import taskDataContext from './components/ContextTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [taskData, setTasks] = useState([
      {
        id: 1,
        name: 'Cathy',
        birthday: '9-14-1996',
        phone:'200-910-8132',
        address: 'Street Name, 123'
      },
      {
        id: 2,
        name: 'Peter',
        birthday: '1-22-1980',
        phone:'567-777-3245',
        address: 'Street Name, 123'
      }
  ])

  // delete tasks
  const deleteTask = (id) => {
    setTasks(
      taskData.filter((task) =>
        task.id !== id)
      )
  }

  // add task information
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}
    setTasks([...taskData, newTask])
  }

  // search
  const [search, setSearch] = useState(undefined)

  return (
    <div className='bk'>
      <div className='container'>

            <Header addForm={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />

            {showAddTask ? (<AddTask onAdd={addTask} />) : ('')}

            {showAddTask === false ? (<Search search={search} setSearch={setSearch} />) : ('')}

            <taskDataContext.Provider value={taskData}>
            {taskData.length > 0 ? (
              <Tasks onDelete={deleteTask} search={search} />
              ) : (
                'No Tasks Avalible'
              )
            }
            </taskDataContext.Provider>

      </div>
    </div>
  );
}

export default App;
