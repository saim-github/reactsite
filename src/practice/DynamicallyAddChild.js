import React from 'react';

function Child() { // Example of dynamically add children content part 2
    return <small>This is children.</small>;
}
function Parent({ children }) { // Example of dynamically add children content part 1
    return (
        <div>
            <h5>Parent Component</h5>
            {children}
        </div>
    );
}

function DynamicallyAddChild() {

    return (
        <>
            {/* // Example of dynamically add children content part 1 */}
            <h4>VIIth Assignment : Dynamically add child component in parent.</h4>
            <Parent>
                <Child />
            </Parent>
        </>
    );
}

export default DynamicallyAddChild;