import React, {useState} from "react";

function TodoList(){
    const [task,setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    function handelAddtask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t,newTask])
            setNewTask("");
        }

    }
    function handelRemovetask(index){
        setTask(c => c.filter((_,i)=> i !== index))
    }
    function handelInput(event){
        setNewTask(event.target.value);
    }
    function moveTaskup(index){
        if(index>0){
            const d = [...task];
            [d[index],d[index-1]] = [d[index -1],d[index]]
            setTask(d);
        }
    }
    function moveTaskdown(index){
        if(index<task.length-1){
            const d = [...task];
            [d[index],d[index+1]] = [d[index +1],d[index]]
            setTask(d);
        }
    }

    return(<div className="todolist-container">
        <h1> To-Do List</h1>
        <div>
            <input type="text" placeholder="enter a task" value={newTask} onChange={handelInput }/>
            <button className="add-button" onClick={handelAddtask}>Add Task</button>
        </div>

        <ol><br />
            {task.map((tasks,index) => 
            <li key={index}> 
            <span className="span-text">{tasks} </span>
            <button className="delete-button" onClick={() => handelRemovetask(index)}>Delete</button>
            <button className="move-button" onClick={() => moveTaskup(index)}> Move Up</button>
            <button className="move-button" onClick={() => moveTaskdown(index)}>Move Down</button>

            </li>  )}
        </ol>
    </div>);
}

export default TodoList