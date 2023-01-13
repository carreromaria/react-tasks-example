import React from 'react';
import TaskCard from "./TaskCard.jsx";
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";

function TaskList() {
    const {tarea}= useContext(TaskContext)



    return (
        <>
            <h1 className="text-yellow-100 text-lg text-center font-bold m-5 tracking-wide italic">{(tarea.length >=1)  ? 'Estas son las tareas' : 'No hay tareas aun'}</h1>

            <div className="grid grid-cols-4 gap-2">
                {tarea.map((tare) =>(
                    <TaskCard key={tare.id} tare={tare} />
                ))}
            </div>
        </>
    );
}

export default TaskList;