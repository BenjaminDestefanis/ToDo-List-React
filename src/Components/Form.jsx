import React from "react";
import './Form.css'

import { useState } from "react";


const Form = (props) => {

    const [input , setInput] = useState('')

    /* Control de Cambios */

    const handleChange = (event) => {

/*         console.log(event.target.value)
 */        setInput(event.target.value)
    }


    /* Control de envios */

    const handleShipping = (event) => {
        event.preventDefault() // evita el renderizado de la pagina

        console.log("Agregando tarea...")

        const newTask = {
            id: 45,
            text: input,
            complete: false
        }

        props.onSubmitAgrega(newTask)


    }



    return (
        <form className="task-form" onSubmit={ handleShipping }>



            <input 
            /* Despues agregar onChange */
                onChange={ handleChange }
                type="text"
                className="task-input"
                name="franco"
                placeholder="Escribe una tarea"
            />

            <button className="task-button">
                Agregar Tarea
            </button>
        </form>
    )
}

export default Form;