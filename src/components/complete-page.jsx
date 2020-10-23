import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar' ;
import MenuItem from './menu/menu-item/Menu-Item';
import Search from './search/Search';
import Items from './menu/items/Items';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './complete-page.css';

function Complete(props) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='refill'>
    <div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    <div >
       <Navbar setSidebar={setSidebar} sidebar={sidebar} />
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