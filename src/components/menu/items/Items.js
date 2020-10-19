import React from 'react';
import MenuList from '../menu-list/Menu-List';

import './items.css';

function Items() {
    return (
        <div className='items'>
           <div>
           <MenuList />
            <MenuList />
            <MenuList />
            <MenuList />
           </div>
           <div>
           <MenuList />
            <MenuList />
            <MenuList />
            <MenuList />
           </div>
           <div>
           <MenuList />
            <MenuList />
            <MenuList />
            <MenuList />
           </div>
        </div>
    )
}

export default Items;
