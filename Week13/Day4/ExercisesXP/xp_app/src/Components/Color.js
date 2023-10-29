import React, { useState, useEffect } from 'react';


const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    //it works every time when component mounts or updates
    useEffect(() => {
        alert('UseEffect reached');
    });

    const changeFavoriteColorToBlue = () => {
        setFavoriteColor('blue');
    }

    return (
        <>
        <h1>My favorite Color is {favoriteColor}</h1>
        <button onClick={changeFavoriteColorToBlue}>Change Favorite Color</button>
        </>
    );
};

export default Color;