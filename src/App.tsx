import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import {Itask} from "./Interface"
import TodoTask from "./Components/TodoTask";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => {

  const [task,setTask] = useState<string>("");
  const [deadline,setDeadline] = useState<number>(0);
  const [todoList,setTodoList] = useState<Itask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void=>{
    if(event.target.name === "task"){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
    
  };

  const addTask = ():void =>{
    const newTask = {taskName:task, deadline:deadline};
    setTodoList([...todoList,newTask]);
    setTask("");
    setDeadline(0);
  
  };

  const completeTask = (taskNameToDelete:string): void =>{
    setTodoList(todoList.filter((task)=>{
        return task.taskName != taskNameToDelete
    }))
  }


  return (
    <>
      <div className="App">
        <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Add your task...." 
            name="task" 
            value={task}
            onChange={handleChange}/>

            <input type="date" 
            placeholder="Deadline (in days)...."
             name="deadline" 
             value={deadline}
             onChange={handleChange}/>
            </div>
            <button onClick={addTask}>Add task</button>
          
        </div>
        <div className="todolist">
          {todoList.map((task: Itask, key: number)=>{
            return <TodoTask task={task} key={key} completeTask={completeTask}/>
          })}
        </div>
      </div>
    </>
  );
};

export default App;
