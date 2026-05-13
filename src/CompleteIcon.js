import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


function CompleteIcon(props) {
    return (
        <span>
            <IoMdCheckmarkCircleOutline
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} 
                onClick={props.onComplete} />
        </span>
    )
}

export { CompleteIcon }