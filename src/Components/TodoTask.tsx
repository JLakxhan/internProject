import React from 'react';
import { Itask } from '../Interface'
import "bootstrap/dist/css/bootstrap.min.css";

interface Props{
    task:Itask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}:Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <span>{task.deadLine}</span>
        </div>
        <button className="btn btn-danger"  onClick={()=>{
            completeTask(task.taskName)
        }}>Delete</button>
    </div>
  );
};

export default TodoTask