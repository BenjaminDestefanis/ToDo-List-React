import React from "react";
import './TaskList.css'


import { useState } from "react";
import Form from "./Form";
import Task from "./Task";

const TaskList = () => {

    const [tasks, setTasks] = useState([]) //Esto a futuro sea un arreglo de objetos js


    /* Agrega Tarea */


    const addTask = task =>{

        console.log(task)
        if(task.text.trim()){   //Averiagua si es o no una tarea vacia
            task.text = task.text.trim();

            setTasks( [task, ...tasks ] )
        }
    }

    /* Borra tarea */


    const deleteTask = id => {
        console.log("Tarea eliminda" )

    }

    /* COMPLETA tarea */

    const taskComplete = id => {

    }




    return(
        <div>
            <Form onSubmitAgrega={ addTask } />

            <div className="taskList-container">

                { tasks.map( (task) => 
                    <Task 
                    text={task.text}
                    complete={task.complete} 
                    deleteTask={ deleteTask }
                    key={task.id} // Este Key reacst lo exige, no podemos acceder a el como prop
                    id={task.id}
                    taskComplete= { taskComplete }

                    />
                ) }

            </div>
        </div>
    )
}

export default TaskList