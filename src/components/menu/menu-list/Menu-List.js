import React from 'react';

import './Menu-List.css';

const MenuList = props  => {
    return (
        <div className='menu-list'>
            <div className='name'>{props.name}</div>
            <div className='value'>{props.value}</div>
        </div>
    )
}

export default MenuList;
