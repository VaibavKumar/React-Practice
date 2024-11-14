import React,{useState} from "react";


function ONChange(){
    const [name,setName] = useState();
    const [quantity,setQuantity] =useState();
    const [comment,setComment] = useState();
    const [payment,setPayment] = useState();
    const [shipping,setShipping] =useState();

    function Onchangehandler(event){
        setName(event.target.value)
    }

    function Onchangenumber(event){
        setQuantity(event.target.value)
    }

    function Onchangecomment(event){
        setComment(event.target.value)
    }

    function Onchangepayment(event){
        setPayment(event.target.value)
    }

    function Onchangeshipping(event){
        setShipping(event.target.value)
    }

    return(<div>
        <input placeholder="Enter your Name" value={name} onChange={Onchangehandler} />
        <p>Name: {name}</p>

        <input type="number" placeholder="Enter your value" value={quantity} onChange={Onchangenumber} />
        <p>Number: {quantity}</p>

        <textarea placeholder="Enter your comments here" onChange={Onchangecomment}/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={Onchangepayment}>
            <option value="">Select Option</option>
            <option value="MasterCard">MasterCard</option>
            <option value="VisaCard">VisaCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>

        <label > <input type="radio" value="Pick Up"
                    checked = {shipping === "Pick Up"}
                    onChange={Onchangeshipping}/> Pick Up
         </label> <br />
         <label > <input type="radio" value="Delivey"
                    checked = {shipping === "Delivey"}
                    onChange={Onchangeshipping}/> Delivey
         </label>
         <p>Shipping: {shipping}</p>
    </div>)
}

export default ONChange