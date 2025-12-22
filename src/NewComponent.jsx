import { useState,useEffect } from "react";
function NewComponent(){
    const [width, setWidth]=useState(window.innerWidth)
    const [height, setHeight]=useState(window.innerHeight)
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect(()=>{
    window.addEventListener("resize",handleResize)
    console.log("Event listener Added")
    return ()=>{
        window.removeEventListener("resize",handleResize)
        console.log("Event listener removed")
    }
    },[])
    useEffect(()=>{
        document.title=`Size: ${width} X ${height}`
    },[width,height])
    return(
        <>
        <p>The Width is {width}px</p>
        <p>The height is {height}px</p>
        </>
    )
}
export default NewComponent