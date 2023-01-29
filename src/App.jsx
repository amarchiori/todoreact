import './App.css';
import { Toaster } from 'react-hot-toast';
import { TaskList } from './components/taskList/taskList';
import Clock from 'react-live-clock';
import { TaskForm } from './components/taskForm/taskForm';


function App () {
  return (
    <>
      <Toaster
        position='bottom-center'
        toastOptions= {{
          style: {
            background: 'black',
            color: 'white',
            fontSize: '1rem',
            border: '1px solid black',
          },
        }}
      />
      <div className='container'>

            <Clock 
              date=''
              format={'dddd MMMM Do, YYYY, h:mm:ss A'} 
              ticking={true} 
              timezone={'US/Eastern'}
              className='clock' 
            />
            <TaskForm />
            <TaskList />
      </div>
    </>
  );
}

export default App;
