import { useState,useEffect,useRef } from "react"
function StopWatch(){
    const [isRunning,setIsRunning]=useState(false);
    const [elapsedTime,setElapsedTime]=useState(0)
    const intervalIdRef=useRef(null)
    const startTimeRef=useRef(0)
    useEffect(()=>{
        if(isRunning){
            setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)
            })
        }
    },[isRunning])
    function start(){
        setIsRunning(true)
        startTimeRef.current=Date.now()-elapsedTime
        console.log(startTimeRef)
    }
    function stop(){
        setIsRunning(false)
    }
    function reset(){
        setIsRunning(false)
        setElapsedTime(0)

    }
    function formatTime(){
        return `00:00:00`
    }
    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls"> 
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatch