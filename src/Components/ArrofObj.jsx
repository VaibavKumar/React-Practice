import React, {useState} from "react";

function ArrofObj(){
    const [cars,setCars] = useState([]);
    const [caryear,setYear] = useState(new Date().getFullYear())
    const [carmake , setMake] = useState("");
    const [carmodel , setModel] = useState("");

    function handelAddcar(){
        const newCar = {
            year: caryear,
            make : carmake,
            model: carmodel
        }
        setCars(c => [...c , newCar])
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handelRemovecar(index){
        setCars(c => c.filter((_,i)=> i !== index))
    }

    function handelYear(event){
        setYear(event.target.value)
    }

    function handelMake(event){
        setMake(event.target.value)
    }

    function handelModel(event){
        setModel(event.target.value)
    }


    return(<div>
        <h2>List of the Cars</h2>
        <ul>
            {cars.map((car, index)=>
                 <li key={index} onClick={() => handelRemovecar(index)}>
                    { car.year } { car.make } { car.model } 
                    
                </li>)}
        </ul>
        <input type="number" value={caryear} onChange={handelYear} /><br /> <br />
        <input type="text" value={ carmake} onChange={handelMake} placeholder="Enter Car Make"/><br /><br />
        <input type="text" value={ carmodel} onChange={handelModel} placeholder="Enter Car Model" /><br /><br />
        <button onClick={handelAddcar}>Add Car</button>
    </div>);
}

export default ArrofObj