import React from 'react';
import Instore from './images/instore.svg';
import Online from './images/online.svg';
import History from './images/history.svg';
import Menu from './images/menu.svg';
import savedCart from './images/savecart.svg';
import Settings from './images/settings.svg';
import contactSupport from './images/contact.svg'

import './sidebarMin.css';

const SidebarMin = () => {
    return (
        <div className='sidebar-min'>
            <div className='first'>
            <img src={Instore} alt='instore' />;
            <img src={Online} alt='instore' />;
            <img src={History} alt='instore' />;
            <img src={Menu} alt='instore' />;
            <img src={savedCart} alt='instore' />;
            <img src={Settings} alt='instore' />;
            <img src={contactSupport} alt='instore' />;
            </div>
        </div>
    )
}

export default SidebarMin;
