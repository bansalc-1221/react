import { useState } from "react"
import { v4 as uuidv4 } from  'uuid'
import  "./tracker.css"
export default function Tracker(){
    let[task,setTask]=useState([{ta:"Solve Puzzle",id:uuidv4(),isdone:false}])
    let [newtask,setnewTask]=useState("")

let addtask = (event) =>{
    setTask([...task,{ta:newtask,id:uuidv4(),isdone:false}])
    setnewTask("")
    console.log(event.target.value)
}
let delTask=(id)=>{
    setTask(task.filter((tasks)=>(tasks.id != id)))

}
let markall=()=>{
    setTask(task.map((tasks)=>{
        return{...tasks,isdone:true}
    }))
}
let mark=(id)=>{
    setTask(task.map((tasks)=>{
        if(tasks.id == id){
            return{...tasks,isdone:true}
        }
        else{
            return tasks
        }
    }))
}

    return <div className="container">
        <h1>Interview Prepration Tracker</h1>
        <hr></hr>
        <h3>Add Task To Crack The Interview</h3>
        
        <input placeholder="Enter Your Task" type="text" value={newtask} onChange={(e)=> setnewTask(e.target.value)}></input>
        <button className="add-btn" onClick={addtask}>Add A Task</button>
        <hr></hr>
        <ul>
            {task.map((tasks) => (
        <li key={tasks.id}>
            <span style={tasks.isdone ? { textDecoration: "line-through" } : null}>{tasks.ta}</span>
            <button className="delete-btn" onClick={() => delTask(tasks.id)}>Remove Task</button>
            <button className="add-btn" onClick={() => mark(tasks.id)}> Mark As Done</button>
        </li>
            ))}
        </ul>
    <button className="all-btn" onClick={markall}>Mark As All Done</button>
    </div>
}
