import React from 'react';
import TaskList from './components/TaskList.jsx'
import TaskForm from "./components/TaskForm.jsx";

function App( ) {
    return (
        <main className=" h-screen bg-zinc-900">
            <div className=" p-10">
                <TaskForm />
                <TaskList />
            </div>
        </main>
    );
}

export default App;