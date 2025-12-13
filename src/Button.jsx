function Button(){
    let count=0;
    const handleClick=(name)=>{
        if(count<3){
            count++
            alert(`${name} You clicked Me ${count} Times`)
        }else{
            alert(`${name} Stop Clicking me!!`)
        }
    }
    return(<button onClick={()=>handleClick("Ram")}>Click Me 🤔</button>)
}
export default Button