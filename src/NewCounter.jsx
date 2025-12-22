import { useState,useEffect } from "react";
function NewCounter(){
    const [count, setCount]=useState(0)
    const [color,setColor]=useState("green")
    useEffect(()=>{
        document.title=`Count: ${count} ${color}`
    },[count,color])
    function Addcount(){
        setCount(c=>c+1)
    }
    function Subractcount(){
        setCount(c=>c-1)
    }
    function addColor(){
        setColor(c=> c==="green"?"red":"green")
    }
    return (
        <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={Addcount}>Add</button>
        <button onClick={Subractcount}>Subtract</button><br />
        <button onClick={addColor}>Change Color</button>
        </div>
    )
}
export default NewCounter