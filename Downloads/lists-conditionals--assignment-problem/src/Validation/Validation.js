import React from 'react';


// Create a new component (=> ValidationComponent) which receives the text length as a prop
// Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short'
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;