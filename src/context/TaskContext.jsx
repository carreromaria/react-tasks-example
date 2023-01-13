import React, {createContext, useEffect, useState} from 'react';
import {tasks} from "../data/tasks.js";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tarea, setTarea] = useState([]);

    function createTask(tar) {
        setTarea([...tarea,{
            title: tar.title,
            id: tarea.length,
            description: tar.description
        }])
    }
    function deleteTask(tareass){
        setTarea(tarea.filter(asas => asas.id !==tareass))
    }
    useEffect(() => {
        setTarea(tasks)
    }, []);

    return (
        <TaskContext.Provider value={{
            tarea,
            createTask,
            deleteTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}

