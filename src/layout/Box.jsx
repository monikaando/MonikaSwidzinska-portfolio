import React from 'react';
import "../styles/Box.scss"
const Box = (props) => {
    debugger
    return (
        <div className="box">
            {props.children}
        </div>
    );
}

export default Box;