import React,{useState} from 'react';

const Content = () => {

    const [displayText, setDisplayText] = useState('');
    const [disText, setDText] = useState('');

    const handleClick = () => {
        setDText(displayText);
    };

    const handleChange = (event) => {
        setDisplayText(event.target.value);
     };

    return (
        <div className='text-center bg-light'>
            <textarea onChange={handleChange} placeholder="Enter text"></textarea><br/>
            <button onClick={handleClick}>Display Text</button><br/>
            {<p>{disText}</p>}
        </div>
    );
};

export default Content;