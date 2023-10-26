import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ model }) => {
    const [color, setColor] = useState('red');
    return (
        <>
            <header>This car is {color} {model}</header>
            <Garage size="small"/>
        </>
    );
};

export default Car;