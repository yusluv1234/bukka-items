import React from 'react';
import ItemMenu from '../items-menu/itemMenu';

import './items.css';

function Items() {
    return (
        <div className='items'>
           <div>
           <ItemMenu titles='Chichen Fries' item='32 ITEMS' />
           <ItemMenu titles='Chichen Fries' item='32 ITEMS' />
           <ItemMenu titles='Chichen Fries' item='32 ITEMS' />
           </div>
           <div>
           <ItemMenu titles='Potato Chips' item='32 ITEMS' />
           <ItemMenu titles='Potato Chips' item='32 ITEMS' />
           <ItemMenu titles='Potato Chips' item='32 ITEMS' />
           </div>
           <div>
           <ItemMenu titles='Amala' item='32 ITEMS' />
           <ItemMenu titles='Amala' item='32 ITEMS' />
           <ItemMenu titles='Amala' item='32 ITEMS' />
           </div>
           <div>
           <ItemMenu titles='Amala' item='32 ITEMS' />
           <ItemMenu titles='Amala' item='32 ITEMS' />
           <ItemMenu titles='Amala' item='32 ITEMS' />
           </div>
        </div>
    )
}

export default Items;
