import React from 'react'

export const ColumnaDerecha = () => {
    return (
        <div className='col-5'>
            <h4>Agregar To do</h4>
            <hr/>
            <form>
                <input className='form-control'></input>
                <button className='btn btn-outline-primary mt-1 col-12'>Add</button>
            </form>

        </div>
    )
}
