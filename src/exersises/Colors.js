import React from 'react';

const Colors = () => {
    const colors = ['red', 'green' , 'blue'];
    const [bgColor, setBgColor] = React.useState('white');
    const bgStyle = {
        height: 100,
        width: 200,
        backgroundColor: bgColor
    }

    const changeBgColor = (color) => {
        setBgColor(color)
    }

    return (
        <div style ={bgStyle} >
        {colors.map(el => {
            return <button onClick = {() => changeBgColor(el)}>{el}</button>
        })}
        </div>

    )
}
export default Colors;