import { useState } from "react";
function ToDoList(){
    const [tasks, setTasks]=useState(["brush Teeth","Eat Breakfast","Hit the Gym"])
    const [newTask, setNewTask]=useState("")
    function inputHandleChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function movetaskDown(index){

    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a Task..." value={newTask} onChange={inputHandleChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className="move-button" onClick={()=>movetaskDown(index)}>👇</button>
                </li>)}
            </ol>
        </div>
    )
}
export default ToDoList