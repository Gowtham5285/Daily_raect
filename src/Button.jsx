function Button() {

    const handleClick = (e) =>{
        e.target.textContent="Click😣 "
    }

    return (<button onDoubleClick={(e) => handleClick(e)}>Click Me 🤔</button>)
}
export default Button 