import {useState} from 'react';
function Arrayupdate(){
    const [food,setFood]=useState(["Kiwi","Dragon Fruit","Lichi"])
    function handleAddFood(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFood(f=>[...f,newFood])

    }
    function handleRemoveFood(index){
        setFood(food.filter((_,i)=>i!==index))
    }
    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {food.map((food,index)=>
                <li key={index} onClick={()=>handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter food Name'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}
export default Arrayupdate