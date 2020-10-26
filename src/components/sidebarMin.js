import React from 'react';
import Instore from './images/instore.svg';
import Online from './images/online.svg';
import History from './images/history.svg';
import Menu from './images/menu.svg';
import savedCart from './images/savecart.svg';
import Settings from './images/settings.svg';
import contactSupport from './images/contact.svg';
import Plus from './images/plus.svg';

import './sidebarMin.css';

const SidebarMin = () => {

    const icona = <img src={Instore} alt='instore' />;
    const iconb = <img src={Online} alt='instore' />;
    const iconc = <img src={History} alt='instore' />;
    const icond = <img src={Menu} alt='instore' />;
    const icone = <img src={savedCart} alt='instore' />;
    const icong = <img src={Settings} alt='instore' />;
    const iconh = <img src={contactSupport} alt='instore' />;
    const iconi = <img src={Plus} alt='instore' />;

    return (
        <div className='sidebar-min'>
                <p>{iconi}</p> <br />
                <p>{icona}</p><br />
                <p>{iconb}</p><br />
                <p>{iconc}</p><br />
                <p>{icond}</p><br />
                <p>{icone}</p><br />
                <p>{icong}</p><br />
                <p>{iconh}</p> 
        </div>
    )
}

export default SidebarMin;
