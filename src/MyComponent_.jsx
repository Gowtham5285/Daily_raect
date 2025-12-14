import { useState } from "react";
function MyComponent_(){
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(0);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("");
    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handelCommentChange(event){
        setComment(event.target.value);
    }
    function handelPaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(
        <div>
        <input type="text"  value={name} onChange={handleNameChange}/>
        <p>Name:{name}</p>

        <input type="number"  value={quantity} onChange={handleQuantityChange}/>
        <p>Quantity:{quantity}</p>
        <textarea value={comment} onChange={handelCommentChange} placeholder="Enter Delivery Instructions"></textarea>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handelPaymentChange}>
            <option value="">Select an option</option>
            <option value="UPI">UPI</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment:{payment}</p>
        <label >
            <input type="radio" value="Pick-Up" checked={shipping==="Pick-Up"} onChange={handleShippingChange}/>
            Pick-Up
        </label>
        <br />
        <label >
            <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping:{shipping}</p>
        </div>
    )
}
export default MyComponent_