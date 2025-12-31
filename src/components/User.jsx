import { useParams } from "react-router-dom";
function User(){
    const {name}=useParams()
    return(
        <h1>{name} Hii</h1>
    )
}
export default User