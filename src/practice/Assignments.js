import React from 'react';
import DynamicallyAddChild from './DynamicallyAddChild';
import UpdateParentState from './UpdateParentState';


// Ist Assignment : Container/Parent of all the assignments.
export default function Assignments() {

    const [counter, setCounter] = React.useState(0); //Counter Assignment

    return (
        <>
            <div className='grid-c m2 p2'>
                <div className="col1 m2 p2 brdr">
                    <h4>Ist Assignment : Container/Parent of all the assignments.</h4>
                    <label>Counter: {counter} </label>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                    <button onClick={() => setCounter(counter - 1)}>-</button>

                    <DisableButtton /> {/** Disable/Enable submit button on input. */}
                    <DisplayArray /> {/** Display array items in the list. */}
                    <ShowHide /> {/** Show/Hide toggle button on click. */}
                    <Sum /> {/** Vth Assignment : Sum of two numbers using input. */}
                    <TwoWayBind /> {/** VIth Assignment : Two Way binding representation using input field. */}
                </div>
                <div className="col2 m2 p2 brdr">
                    <DynamicallyAddChild /> {/** VIIth Assignment : Dynamically add child component in parent. */}
                    <UpdateParentState /> {/**VIIIth Assignment : Update parent state using child component. */}
                </div>
            </div>
        </>
    );
}
// IInd Assignment : Disable/Enable submit button on input.
function DisableButtton() {

    const [value, setValue] = React.useState("");

    return (
        <>
            <h4>IInd Assignment : Disable/Enable submit button on input.</h4>
            <input
                type="text"
                placeholder="Enter the text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button disabled={value.length < 1} >Submit</button>

        </>
    );
}
// IIIrd Assignment : Display array items in the list.
function DisplayArray() {

    const users = [
        { name: "one", id: 1 },
        { name: "two", id: 2 },
        { name: "three", id: 3 }
    ];
    const userData = users.map((user) => <li key={user.id}>{user.name}</li>);

    return (
        <>
            <h4>IIIrd Assignment : Display array items in the list.</h4>
            <ul>{userData}</ul> {/**Printing list items */}
        </>
    );
}
// IVth Assignment : Show/Hide toggle button on Click.
function ShowHide() {

    const [show, setShow] = React.useState(true); // Using this for toggle, Show & hide element.

    return (
        <>
            <h4>IVth Assignment : Show/Hide toggle button on Click.</h4>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide the Element' : 'Show the Element'}
            </button>
            {show && <span>Element to Hide & Show.</span>}

        </>
    );
}
// Vth Assignment : Sum of two numbers using input.
function Sum() {

    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [total, setTotal] = React.useState(0);

    function calculateSum() {
        setTotal(number1 + number2);
    }

    return (
        <>
            <h4>Vth Assignment : Sum of two numbers using input.</h4>
            <input type="number" placeholder="First Number" value={number1} onChange={(e) => setNumber1(+e.target.value)} />
            <input type="number" placeholder="Second Number" value={number2} onChange={(e) => setNumber2(+e.target.value)} />
            <button onClick={calculateSum}>Add Two number</button>
            <p>Total: {total || ""}</p>
        </>
    );
}
// VIth Assignment : Two Way binding representation using input field.
function TwoWayBind() { // Using QA as a parent.

    const [value, setValue] = React.useState("");

    return (
        <>
            <h4>VIth Assignment : Two Way binding representation using input field.</h4>
            <lebel>Enter text to see the binding..</lebel>
            <input
                type="text"
                placeholder="Enter the text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <p>Input text: {value}</p>


        </>
    );
}
