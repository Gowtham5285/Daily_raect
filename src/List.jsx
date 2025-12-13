
function List() {
    // console.log(props,"abc")
    // const category = props.category;
    // const itemList = props.items;
    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); // Alphabetical sort
    // fruits.sort((a,b)=>b.name.localeCompare(a.name)); // Reverse Alphabetical sort
    // fruits.sort((a,b)=> a.calories-b.calories) // Nunerical Calories based
    // fruits.sort((a,b)=> b.calories-a.calories) // Nunerical Calories based
    // const lowCalFruits=fruits.filter(fruit=> fruit.calories<=50);

    return (
        <>
        <h2>{List.defaultProps.category}</h2>
            <ul className="list-items">{List.defaultProps.items.map((x)=>{
                return(
                    < div key={""}> 
                    <p>{x}</p>
                    </div>
                )
            })}</ul>
        </>
    );
}

List.defaultProps = {
    category: "Category",
    items: ["apple","banana","citrus"],
}
// console.log(List.defaultProps)
// 
export default List 