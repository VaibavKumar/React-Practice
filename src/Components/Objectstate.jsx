import { useState } from "react"


function Objectstate(){
    const [car , setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

        function onchangeyear(event){
            setCar(c => ({...c ,year: event.target.value}))
        }
        function onchangemake(event){
            setCar(c => ({...c ,make: event.target.value}))
        }
        function onchangemodel(event){
            setCar( c => ({...c ,model: event.target.value}))
        }

    return(
        <>
            <p>Your Favorite car is {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={onchangeyear}/> <br /><br />
            <input type="text" value={car.make} onChange={onchangemake}/> <br /><br />
            <input type="text" value={car.model} onChange={onchangemodel}/><br />

        </>
    )
}
export default Objectstate