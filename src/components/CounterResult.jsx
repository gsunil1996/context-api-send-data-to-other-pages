import React, { useContext } from 'react'
import { GlobalContext } from '../context/store'
import { getCountAction } from '../context/actions/counterActions';

const CounterResult = () => {
    const { counterState, counterDispatch } = useContext(GlobalContext)
    const { count, setCount } = counterState;

    const handleIncrement = () => {
        getCountAction(count + 1)(counterDispatch)
    }

    const handleDecrement = () => {
        getCountAction(count - 1)(counterDispatch)
    }

    return (
        <div>
            <h1>Counter Result in another page</h1>
            <h2>Count Value from Context: {count}</h2>
            <div>
                <button onClick={() => setCount(5)}>setCountLocal to 5</button>
                <button onClick={() => setCount(10)}>setCountLocal to 10</button>
            </div>
            <div style={{ marginTop: "10px" }} >
                <button onClick={handleIncrement}>Increment Context</button>
                <button onClick={handleDecrement}>Decrement Context</button>
            </div>
        </div>
    )
}

export default CounterResult