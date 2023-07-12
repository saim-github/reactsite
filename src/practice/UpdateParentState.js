import React from 'react';

function Child({ setpValue }) {
    return (
        <>
            <div>Child : &nbsp;
                <button
                    onClick={() => setpValue("Parent has been updated.")}>
                    Click to change the parent value.
                </button>
            </div>
        </>
    )
}
function UpdateParentState() { // Using QA as a parent.

    const [pValue, setpValue] = React.useState("I need to updated by Child.");

    return (
        <>
            <h4>VIIIth Assignment : Update parent state using child component.</h4>
            <h5>Parent : <small>{pValue}</small></h5>
            <h5>
                <Child setpValue={setpValue} />
            </h5>

        </>
    );
}

export default UpdateParentState;