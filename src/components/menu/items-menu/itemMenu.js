import React from 'react';

import './itemMenu.css';

const itemMenu = props  => {
    return (
        <div className='itemMenu'>
            <div className='title'>{props.name}</div>
            <div className='item'>{props.value}</div>
        </div>
    )
}

export default itemMenu;
