import React from 'react';
import { TodoContext } from '../TodoContext';
import './todoCounter.css'

function TodoCounter(){
    const{  completedTodos,totalTodos } = React.useContext(TodoContext)
    const message = totalTodos === completedTodos
                    ? "¡Felicidades! Has comppletado todas tus tareas."
                    : `Has completado ${completedTodos} de ${totalTodos} TODOS`
    return (
        <h1 className='TodoCounter'>
            {message}
        </h1>
    );
}

export { TodoCounter };