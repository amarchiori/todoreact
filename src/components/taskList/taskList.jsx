import { useContext} from 'react';
import { TaskItemLine } from '../taskItem/taskItemLine'
import { TaskContext } from '../../contexts/task-context';

import './taskList-styles.css'



export function TaskList () {
  const { taskItems } = useContext(TaskContext)

  return (
    <>
      <div className='task-list-container'>
        {taskItems.map(taskItem => (
          <TaskItemLine 
            key={taskItem.id}
            id={taskItem.id}
            taskInput={taskItem.taskInput}
          />
        ))}
      </div>
    </>
  );
};