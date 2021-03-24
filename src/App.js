import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));  
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? 
      {...task, reminder: !task.reminder}
      : task
    ))
  }

  return (
    <div className="App">
      <div className="container">
        <Header title="Task Tracker"/>
        { tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          : 'No tasks'
        }
      </div>
    </div>
  );
}

export default App;
