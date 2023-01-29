import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TaskContext = createContext({
    taskItems: [],
    addTaskToList: () => {},
    deleteTaskFromList: () => {},
});

const initialState = [
    {
        id: uuidv4(),
        taskInput:'',
    },
]

export function TaskProvider ({ children }) {
    const [taskItems, setTaskItems] = useState(initialState);
    
    const deleteTaskFromList = (id) => 
        setTaskItems((taskItems) => taskItems.filter((taskToDelete) => taskToDelete.id !== id));

    const addTaskToList = (taskToAdd) => setTaskItems((taskItems) => [...taskItems, taskToAdd]);

    const value = {
        deleteTaskFromList,
        addTaskToList,
        taskItems,
    };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );   
};