import React from 'react';
import ItemMenu from '../items-menu/itemMenu';

import './items.css';

function Items() {
    return (
        <div className='items'>
           <div>
           <ItemMenu title='Chichen Fries' item='32 ITEMS' />
           <ItemMenu title='Chichen Fries' item='32 ITEMS' />
           <ItemMenu title='Chichen Fries' item='32 ITEMS' />
           </div>
           <div>
           <ItemMenu title='Potato Chips' item='32 ITEMS' />
           <ItemMenu title='Potato Chips' item='32 ITEMS' />
           <ItemMenu title='Potato Chips' item='32 ITEMS' />
           </div>
           <div>
           <ItemMenu title='Amala' item='32 ITEMS' />
           <ItemMenu title='Amala' item='32 ITEMS' />
           <ItemMenu title='Amala' item='32 ITEMS' />
           </div>
           <div>
           <ItemMenu title='Amala' item='32 ITEMS' />
           <ItemMenu title='Amala' item='32 ITEMS' />
           <ItemMenu title='Amala' item='32 ITEMS' />
           </div>
        </div>
    )
}

export default Items;
