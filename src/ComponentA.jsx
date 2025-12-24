import ComponentB from "./ComponentB.jsx";
import { useState,createContext } from "react";
export const UserContext=createContext();
function ComponentA(){
    const [user,setUser]=useState("Ram")
    return(
        <div className="box">
            <h2>ComponentA</h2>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
                
            </UserContext.Provider>
        </div>
    )
}
export default ComponentA