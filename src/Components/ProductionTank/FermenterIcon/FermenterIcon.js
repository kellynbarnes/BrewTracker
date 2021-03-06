import React from 'react';

import '../../../App.css'

// Change color of background image
const fillColor = {
    fermenting: "#66bb6a",
    conditioning: "#29b6f6",
    empty: "#5c4925",
    dirty: "#8d6e63",
    clean: "#0093c4",
    sanitize: "#78909c"
}

const fermenterIcon = (props) => {
    const displayStatus = status => {
        const firstLetter = status[0];
        const firstLetterUpperCase = firstLetter.toUpperCase();
        const changeLetters = status.replace(firstLetter, firstLetterUpperCase);
        return changeLetters;
    };
    return  (  
    <svg fill={fillColor[props.componentStatus]} id={props.id} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox={props.view}  xmlSpace="preserve" width={props.width} height={props.height}>
        <circle cx={216} cy="271.3" r={4} />
        <polygon points="213.1,257.2 213.1,261.5 172.8,261.5 172.8,205.3 163.9,190.1 163.9,277.3 166.5,277.3 166.5,281.4 161.9,281.4   161.9,284.3 174.5,284.3 174.5,281.4 169.9,281.4 169.9,277.3 172.8,277.3 172.8,267.3 259.5,267.3 259.5,277.3 262.4,277.3   262.4,281.4 257.8,281.4 257.8,284.3 270.1,284.3 270.1,281.4 265.5,281.4 265.5,277.3 268.1,277.3 268.1,190.1 259.5,205.3   259.5,261.5 218.9,261.5 218.9,257.2 ">
        </polygon>
        <path fill="none" d="M174,11.5v9.7c8.9-2.8,20.5-4.6,33.4-5.1v-4.5H174V11.5z">
        </path>
        <path fill="none" d="M224.6,11.5V16c12.9,0.6,24.5,2.4,33.4,5.1v-9.7L224.6,11.5L224.6,11.5z">
        </path>
        <path d="M174,11.5h33.4V16c1.9-0.1,3.8-0.1,5.8-0.2v-4.3c0-3.2-2.6-5.8-5.8-5.8H174c-3.2,0-5.8,2.6-5.8,5.8v11.7  c1.8-0.7,3.7-1.4,5.8-2.1V11.5z">
        </path>
        <path d="M224.6,11.5H258v9.7c2.1,0.6,4,1.3,5.8,2.1V11.5c0-3.2-2.6-5.8-5.8-5.8h-33.4c-3.2,0-5.8,2.6-5.8,5.8v4.3  c1.9,0,3.9,0.1,5.8,0.2V11.5z">
        </path>
        <path d="M159.5,85.2v68.9l54.7,93.9h3.7l54.5-94.1V85.2c0,0-20.4-3-56.5-3S159.5,85.2,159.5,85.2z">
        </path>
        <path d="M282.2,40.3v116.3l-58.7,101.1h-15l-58.8-101.1V40.3c0,0,6.3-4.3,6.3-5.2c0-4.6,4.5-8.7,12.1-11.9c1.8-0.7,3.7-1.4,5.8-2.1  c8.9-2.8,20.5-4.6,33.4-5.1c1.9-0.1,3.8-0.1,5.8-0.2c1,0,1.9,0,2.9,0s1.9,0,2.9,0c1.9,0,3.9,0.1,5.8,0.2c12.9,0.6,24.5,2.4,33.4,5.1  c2.1,0.6,4,1.3,5.8,2.1c7.6,3.2,12.1,7.3,12.1,11.9C275.9,36,282.2,40.3,282.2,40.3z M276.5,154.9V43.2c-4.9-3.5-6.3-5.5-6.3-8.1  c0-1.6-2.2-3.7-6.5-5.7c-1.6-0.8-3.4-1.5-5.6-2.2c-7.7-2.6-18.9-4.8-33.4-5.4c-1.9-0.1-3.8-0.1-5.8-0.2c-1,0-1.9,0-2.9,0  s-1.9,0-2.9,0c-2,0-3.9,0.1-5.8,0.2c-14.5,0.6-25.7,2.9-33.4,5.4c-2.1,0.7-4,1.4-5.6,2.2c-4.3,2-6.5,4-6.5,5.5  c0,2.9-1.2,4.6-6.3,8.4v112L212,252h8.4L276.5,154.9z">
        </path>
        <text x="215" y ="100" writingMode="lr" fill='white' textAnchor="middle" fontSize="12px">{props.tank}</text>
        <text x="215" y ="120" writingMode="lr" fill='white' textAnchor="middle" fontSize="12px">{props.tank ? displayStatus(props.componentStatus) : null}</text>
        <text x="215" y ="140" writingMode="lr" fill='white' textAnchor="middle" fontSize="12px">{props.batch ? `Batch ${props.batch}` : null}</text>
      </svg>
    )
}

export default fermenterIcon