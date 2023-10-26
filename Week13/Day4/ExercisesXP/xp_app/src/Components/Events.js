import React, { useState } from "react";

const Events = () => {

    const clickMe = () => {
        alert('I was clicked');
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            alert('The Enter key was pressed, your input is', event.target.value);
        }
    }

    const [isToggleOn, setToggle] = useState(true);

    const onClickHandler = () => {
        setToggle(!isToggleOn);
    }

    return (
        <div>
            <button onClick={clickMe}>Click me</button>
            <input
                type="text"
                placeholder="Press the enter key"
                onKeyDown={handleKeyDown}
            />
            <button onClick={onClickHandler}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    )
};

export default Events;