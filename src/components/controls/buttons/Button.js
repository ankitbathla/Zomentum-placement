import React from 'react';

import './Button.scss';

const Button = ({children}) => {
    return (
        <>
            <button className="secondary-button">{ children }</button>
        </>
    );
}

export default Button;