import { useContext } from "react";
import { TaskContext } from "../../contexts/task-context";
import { toast } from 'react-hot-toast';

import './taskItemLine-styles.scss'

import { RiDeleteBin2Line } from 'react-icons/ri';


export const TaskItemLine = ({ taskInput, id }) => {
    const { deleteTaskFromList } = useContext(TaskContext);

    return(
        <div className="taskItem-container">
            <div id="toDoLine">
                <input 
                    type="checkbox" 
                    id="checkboxInput"
                />
                <label>{taskInput}</label>
                <RiDeleteBin2Line className="delete-icon" onClick={() => {deleteTaskFromList(id); toast('Task Done!')}}>
                </RiDeleteBin2Line>
            </div>
        </div>
    )
};
