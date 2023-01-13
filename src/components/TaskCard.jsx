import React from 'react';
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";

function TaskCard({tare}) {

   const {deleteTask}= useContext(TaskContext)

    return (
        <div className="text-white bg-gray-800 hover:bg-gray-800/60 p-3 rounded-md shadow-lg shadow-amber-900">
            <h1 className="font-bold text-lg text-amber-200 uppercase text-base"> {tare.title}</h1>
            <div className="flex justify-between">
                <p className="text-sm text-amber-500 my-auto"> {tare.description}</p>
                <div className="italic text-white text-lg bg-slate-900 m-1 px-3 rounded-full">{tare.id+1}</div>
            </div>

            <button className="text-white text-sm hover:bg-teal-700 bg-teal-600 rounded-md px-2 py-1.5 mt-3 w-full"
                    onClick={() => deleteTask(tare.id)}>
                Eliminar tarea</button>

        </div>
    );
}

export default TaskCard;





