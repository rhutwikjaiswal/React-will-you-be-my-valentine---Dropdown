import React from 'react';

const Selects = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.id.toUpperCase()} : </label>
            <select id={props.id} onChange={props.handleChange}>
                {props.data.map((ele, index)=>(
                    <option value={index}>{ele.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Selects;