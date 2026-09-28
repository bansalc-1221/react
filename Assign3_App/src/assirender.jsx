import Assi from "./assi3";
import { useState } from "react";
import "./from.css"

export default function Render(){
    let [info,setinfo]=useState([{username:"XYZ",email:"xyz@gmail.com",mob:"91XXXXXXXX",tech:"AI/ML",text:"The AI Course Is Phenomenal."}])
    let newinfo =(data) =>{
        setinfo((currdata)=>[...currdata,data])
    }
    return <>
        <h1>Workshop Registration</h1>
        <div className="container">
            <div className="left">
                <Assi addnewinfo={newinfo}/>
            </div>
            <div className="right">
                {info.map((info,idx)=>(
                    <div key={idx} className="card">
                        <h3>Name: {info.username}</h3>
                        <h3>Email: {info.email}</h3>
                        <h3>Mob. No.: {info.mob}</h3>
                        <h3>Tech Stack: {info.tech}</h3>
                        <p>Reason To Join: {info.text}</p>
                    </div>
                ))}    
            </div>    
        </div>    
    </>
}