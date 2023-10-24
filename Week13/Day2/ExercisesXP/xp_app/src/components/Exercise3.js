import React from 'react';
import './Exercise3.css'
import cat from '../img/cat.jpg'

class Exercise extends React.Component {
    render(){
        return (
            <div>
                <h1 className='ex3'>h1 from ex3</h1>
                <p>Paragraph from ex3</p>
                <a href='#'>Link from ex3</a>
                <form>
                    <input type='text'/>
                    <input type='submit'/>
                </form>
                <img src={cat} width='200px'></img>
                <ul>List:
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
        )
    }
}

export default Exercise;
