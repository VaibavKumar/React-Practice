import react, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const decrement = ()=>{
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    const reset = ()=>{
        setCount(0)
    }
    // #f2074e #code for color
    return(<div className="counter-container">
        <p className="counter-display">{count}</p>
        <div className="b1">
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    </div>);
}
export default Counter