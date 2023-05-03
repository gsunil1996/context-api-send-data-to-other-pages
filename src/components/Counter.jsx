import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/store';
import { getCountAction, setCountAction } from '../context/actions/counterActions';

const Counter = () => {
    const [count, setCountLocal] = useState(0);
    const { counterState, counterDispatch } = useContext(GlobalContext);
    const { count: countFromContext } = counterState;

    console.log("counterState", counterState);

    const setCountGlobal = (payload) => {
        setCountLocal(payload);
        getCountAction(payload)(counterDispatch)
    }

    useEffect(() => {
        setCountAction(setCountLocal)(counterDispatch)
    }, [counterDispatch]);

    return (
        <div style={{ marginTop: "20px" }} >
            <h1>Counter</h1>
            <h2> Local count: {count}</h2>
            <h2>Context count: {countFromContext}</h2>
            <button onClick={() => setCountGlobal(count + 1)}>Increment Local + Context</button>
            <button onClick={() => setCountGlobal(count - 1)}>Decrement Local + Context</button>
        </div>
    )
}

export default Counter