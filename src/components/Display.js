import React from 'react';

const Display = ({id, data}) => {
    return (
        <div>
            <div id={id+"-name"}>{data[0]}</div>
            <div id={id+"-description"}>{data[1]}</div>
        </div>
    );
};

export default Display;