import React from 'react';

import './itemMenu.css';

const ItemMenu = props  => {
    return (
        <div className='itemMenu'>
            <div className='title'>{props.title}</div>
            <div className='item'>{props.item}</div>
        </div>
    )
}

export default ItemMenu;
