import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1 className='bg-dark text-center text-white p-2'>{props.title}</h1>
        </div>
    );
};

export default Header;