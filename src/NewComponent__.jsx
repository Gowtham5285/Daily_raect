import { useRef, useEffect } from "react";
function NewComponent__() {
    const inputRef = useRef(null);
    useEffect(() => {
        console.log("COMPONENT RENDERED")
    });
    function handleClick() {
        inputRef.current.focus();
        
    }
    return (
        <div>
            <button onClick={handleClick}>
                Click Me!
            </button><br />
            <input type="text" ref={inputRef}/>
        </div>
    )
}
export default NewComponent__