import React from 'react';
import {useState} from "react";
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";


function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {createTask}= useContext(TaskContext)


    const showNew = (e) => {
        e.preventDefault()
        console.log(title, description)
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }

    return (
        <>
            <h1 className="text-yellow-100 text-lg text-center font-bold m-5 tracking-wide italic">Crea tu tarea</h1>
            <form onSubmit={showNew}
             className="bg-slate-800 flex flex-col p-5 rounded-md space-y-3 w-[450px] mx-auto">
                <input placeholder="Ingresa una tarea"
                       required
                       className="bg-gray-500 hover:bg-gray-500/90 px-3 py-1 rounded-md mx-auto w-96 placeholder-shown:text-white placeholder-gray-400 placeholder:text-sm"
                       onChange={(e)=> setTitle(e.target.value)}
                value={title}
                       autoFocus
                />
                <textarea placeholder="Escribe la tarea"
                          required
                          className="bg-gray-500 hover:bg-gray-500/90 px-3 py-1 rounded-md  mx-auto w-96 placeholder-shown:text-white placeholder-gray-400 placeholder:text-sm "
                          onChange={(e)=> setDescription(e.target.value)}
                          value={description}
                />
                <button className="bg-sky-500 hover:bg-sky-400 font-bold  mx-auto px-3 w-96 rounded-md">Guardar</button>
            </form>

        </>
    );
}

export default TaskForm;