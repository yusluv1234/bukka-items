import React from 'react';
import MenuList from '../menu-list/Menu-List';

import './Menu-Item.css';

function MenuItem() {
    return (
        <div className='menu-item'>
            <MenuList name='Chicken' value='32 ITEMS' />
            <MenuList name='Soup' value='32 ITEMS' />
            <MenuList name='Chips' value='32 ITEMS' />
            <MenuList name='Fries' value='32 ITEMS' />
            <MenuList name='Swallow' value='32 ITEMS' />
            <MenuList name='Soup' value='32 ITEMS' />
            <MenuList name='Chicken' value='32 ITEMS' />
        </div>
    )
}

export default MenuItem;
