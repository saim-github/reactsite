import React from "react";
import './all.css';

export default function Everything() {
    return (
        <>
            <h4>Hello Dear, Here is all the code from react.dev site.</h4>
            <MyButton />
        </>
    )
}

function MyButton() {
    return (
        <button>I'm a button.</button>
    )
}