import ComponentD from "./ComponentD.jsx"
import { UserContext } from "./ComponentA.jsx";
import { useContext } from "react";
function ComponentC(s){
    const user=useContext(UserContext);
    return(
        <div className="box">
            <h2>ComponentC</h2>
            <h2>{`Hello Again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}
export default ComponentC