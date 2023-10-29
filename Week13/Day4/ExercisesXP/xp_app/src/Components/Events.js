import React, { useState } from "react";

const Events = () => {
    const [isToggleOn, setToggle] = useState(true);

    const clickMe = () => {
        alert('I was clicked');
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            alert('The Enter key was pressed, your input is ' + event.target.value);
        }
    }

    const onClickHandler = () => {
        setToggle(!isToggleOn);
    }

    return (
        <div>
            {/*ex2 part1 */}
            <button onClick={clickMe}>Click me</button>
            {/*ex2 part2 */}
            <input
                type="text"
                placeholder="Press the enter key"
                onKeyDown={handleKeyDown}
            />
            {/*ex2 part3 */}
            <button onClick={onClickHandler}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    )
};

export default Events;