import React from 'react';
import ReactDOM from 'react-dom';
let count = 0;
const handleClick = () =>
{
    setButtonText('Loading...');

    setTimeout(() =>
    {
        setButtonText('Submit');
    }, 2000); // Reverts back to 'Submit' after 2 seconds
};
const Element = () => <h1>Hello I am the count is {count}</h1>;
const Element2 = () => (
    <div>
        {Element()}
        <h2>Nested Element</h2>
        <p>This is a nested element</p>
        <button onClick={handleClick}>submit</button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element2 />);