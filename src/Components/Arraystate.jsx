import { useState } from "react";


function Arraystate(){
    const [foods,setFoods] = useState(["Apple" , "Orange" , "Banana"]);


    function handelAddfood(){

        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods(f => [...f,newFood])
    }




    function handelRemovefood(index){
        setFoods(foods.filter((_,i)=> i!== index))
    }


    return(<div>
        <h2>List of the Food</h2>
        <ul>
            {foods.map((food,index) => <li onClick={() => handelRemovefood(index)} key={index}>{food}</li>)}
        </ul>
        <input  type="text" id="foodinput"/>
        <button  onClick={handelAddfood}>Add Food</button>
    </div>);
}

export default Arraystate