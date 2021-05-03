<div>
            <h1>Todo App</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                    {/* {
                        todos.map( (todo, i) => {
                            return <li 
                                        key={todo.id} 
                                        className='list-group-item'>
                                        <p className={`${todo.done && 'complete'}`} >{i+1}. {todo.todo}</p>
                                        <button
                                            onClick= { () => handleDelete(todo.id)}
                                            className='btn btn-danger'>
                                            Borrar
                                        </button>
                                    </li>
                        })
                    } */}
                    </ul>
                </div>



                <div className='col-5'>
                    <h4> Agregar ToDo</h4>
                    <hr />

                    <form>
                        <input
                            // value={inputValue}
                           
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'>
                        
                        </input>
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1 col-12'>
                                Agregar
                        </button>
                    </form>
                </div>

            </div>
            
        </div>









return (
    <div>
        <h1>Aplicacion Testing</h1>
        <hr />
        <div className='row'>
            <div className='col-7'>
                <ul className='list-group list-group-flush'>
                    <li>Hola</li>
                </ul>

            </div>

        </div>
        <div className='col-5'>
            <h4>Agregar To do</h4>
            <hr/>
            <form>
                <input className='form-control'></input>
                <button className='btn btn-outline-primary mt-1 col-12'>Add</button>
            </form>

        </div>

    </div>
)