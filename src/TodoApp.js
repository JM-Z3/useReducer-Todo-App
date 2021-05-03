import React, { useEffect, useReducer, useState } from 'react'
import { reducer } from './reducer'

const init = () => {
    return JSON.parse(localStorage.getItem('state')) || [];
}


export const TodoApp = () => {
    
    const [state, dispatch] = useReducer(reducer, [], init);

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
        
    }, [state])

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
    }

    const newState = {
        id: new Date().getTime(),
        desc: inputValue,
        done: false 
    }
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const action = {
            type: 'add',
            payload: newState
        }
        dispatch(action);
        setInputValue('');
    }

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload:todoId
        }
        dispatch(action)
    }


    return (
        <div>
            <h1>Aplicacion Testing... {new Date().getDay}</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            state.map( (todo, i) => {
                                return <li key={todo.id} className='list-group-item'>
                                            <p className={ `${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>{i+1}. {todo.desc}</p>
                                            <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button>
                                    </li>
                            })
                        }
                    </ul>

                </div>

                <div className='col-5'>
                    <h4>Agregar To do</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input 
                            className='form-control' 
                            onChange={handleInputChange}
                            value={inputValue}>
                        </input>

                        <button className='btn btn-outline-primary mt-1 col-12'>Add</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
