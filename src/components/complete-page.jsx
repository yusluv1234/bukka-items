import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar' ;
import MenuItem from './menu/menu-item/Menu-Item';
import Search from './search/Search';
import Items from './menu/items/Items';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './complete-page.css';

function Complete() {
  return (
    <div className='refill'>
    <div >
      <Sidebar />
      </div>
    <div >
       <Navbar className='nav' />
       <Search className='classes' />
      <div  className='menu'>
       <MenuItem />
       <Items />
       <div className='lines'></div>
      </div>
    </div>
    </div>
  )
}

export default Complete;