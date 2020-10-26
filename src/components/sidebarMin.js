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

    const icona = <img src={Instore} alt='instore' />;
    const iconb = <img src={Online} alt='instore' />;
    const iconc = <img src={History} alt='instore' />;
    const icond = <img src={Menu} alt='instore' />;
    const icone = <img src={savedCart} alt='instore' />;
    const icong = <img src={Settings} alt='instore' />;
    const iconh = <img src={contactSupport} alt='instore' />;

    return (
        <div className='sidebar-min'>
                <p>{icona}</p>
                <p>{iconb}</p>
                <p>{iconc}</p>
                <p>{icond}</p>
                <p>{icone}</p>
                <p>{icong}</p>
                <p>{iconh}</p>
        </div>
    )
}

export default SidebarMin;
