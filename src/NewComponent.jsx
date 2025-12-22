import { useState,useEffect } from "react";
function NewComponent(){
    const [width, setWidth]=useState(window.innerWidth)
    const [height, setHeight]=useState(window.innerHeight)
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    window.addEventListener("resize",handleResize)
    return(
        <>
        <p>The Width is {width}px</p>
        <p>The height is {height}px</p>
        </>
    )
}
export default NewComponent