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
       <Navbar />
       <Search  />
       <div className='associate'>
      <div >
      <div  className='menu'>
       <MenuItem />
       <Items />
      </div>
      </div>
      <div className='lines'></div>
       </div>
    </div>
    </div>
  )
}

export default Complete;