import { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/task-context';
import { v4 as uuidv4 } from 'uuid';

import './taskForm-styles.css'
import { toast } from 'react-hot-toast';

export function TaskForm () {
    const [taskInput, setTaskInput] = useState('');
    const { addTaskToList} = useContext(TaskContext);

    const updateTaskInput = (e) => {
        setTaskInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addTaskToList({
            taskInput: taskInput,
            id: uuidv4()
        });
        toast('Successfully Added Task!')
        setTaskInput('');
    }


    return (
        <form className='taskFormContainer' onSubmit={submitHandler}>
        <input
            id='addTaskInput'
            type='text'
            value={taskInput}
            onChange={updateTaskInput}
            placeholder='Add a new task'
        />
        <button>Add</button>
        </form>
    )
}