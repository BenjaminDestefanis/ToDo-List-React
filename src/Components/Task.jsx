import React from "react";
import './Task.css';

import { TbCrosshair } from 'react-icons/tb'

const Task = ( {id , text, complete, taskComplete, deleteTask} ) => {
    return(
        <div  className={complete ? 'task-container complete' : 'task-container'}>

                <div className="task-text">
                    { text }
                </div>

                
            

            <div className="task-icon-container" onClick={ () => deleteTask(id)}>
                <TbCrosshair className="task-icon" />
            </div>
        </div>
    )
}
export default Task;