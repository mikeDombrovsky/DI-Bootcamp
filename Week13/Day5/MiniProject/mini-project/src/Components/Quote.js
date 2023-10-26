import React from 'react';
import './Quote.css'

const Quote = ({ quote, author, setNewQuote, color, bg_color_card, bg_color_btn }) => {
    return (
        <div className='card' style={{
            backgroundColor: `${bg_color_card}`
        }}>
            <h1>"{quote}"</h1>
            <p className='author'>-{author}-</p>
            <button
                onClick={setNewQuote}
                style={{
                    backgroundColor: `${bg_color_btn}`,
                    color: `${color}` }}
            >New quote</button>
        </div>
    );
};

export default Quote;