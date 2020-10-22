import React from 'react';
import "./Button.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
let classList = ``;

let types = ['primary', 'danger', 'success', 'warning']

if(types.includes(props.type)){
    classList+= `button-${props.type}`
}
console.log(props.large);
if(props.large){
    classList+= ` button-large`
}

    return (
    <button className={`button-${props.type}`}>
        {props.label}
    </button>
    )

}




export default Button; 