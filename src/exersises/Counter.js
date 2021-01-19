import React from 'react';
const Counter = () => {
    const [counter, setCounter]  = React.useState(0);
    const increase = () => {
        setCounter((prevCounter) => prevCounter + 1)

    }
    const decrease = () => {
        setCounter((prevCounter) => prevCounter - 1)

    }

    return (
        <>
        <p>{counter}</p>
        <button onClick= {increase}> + </button>
        <button onClick= {decrease}> - </button>
        </>

    )

}
export default Counter;