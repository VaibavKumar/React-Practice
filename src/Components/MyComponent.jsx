import react, {useState} from 'react';

function MyComponent(){
    const [name,setName] = useState("guest");

    const [age,setAge] = useState(0);
    const [isEmployed,setIsemployed] = useState(false);
    const updateName = () => {
        setName("VK");
    }
    const incrementAge = () => {
        setAge(age +1);
    }
    const toggleemp = () => {
        setIsemployed(!isEmployed);
    }

    return(<> 
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Setname</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increase Your Age</button>
        <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleemp}>Toggle Employee</button>
    </div>
            </>);
}
export default MyComponent 