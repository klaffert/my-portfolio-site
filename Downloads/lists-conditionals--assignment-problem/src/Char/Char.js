import React from 'react';


// Create another component (=> CharComponent) and style it as an inline box (
// => display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default char;