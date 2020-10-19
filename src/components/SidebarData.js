import React from 'react';
import SidebarList from './SidebarList'
import Instore from './images/instore.svg';
import Online from './images/online.svg';
import History from './images/history.svg';
import Menu from './images/menu.svg';
import savedCart from './images/savecart.svg';
import Settings from './images/settings.svg';
import contactSupport from './images/contact.svg'

import './Sidebardata.css';

const SidebarData = () => {

    const icona = <img src={Instore} alt='instore' />;
    const iconb = <img src={Online} alt='instore' />;
    const iconc = <img src={History} alt='instore' />;
    const icond = <img src={Menu} alt='instore' />;
    const icone = <img src={savedCart} alt='instore' />;
    const icong = <img src={Settings} alt='instore' />;
    const iconh = <img src={contactSupport} alt='instore' />;

    return (
        <div>
            <div>
            <SidebarList svg={icona} title='Instore' />
            <SidebarList svg={iconb} title='Online' />
            <SidebarList svg={iconc} title='History' />
            <SidebarList svg={icond} title='Menu' />
            <SidebarList svg={icone} title='Saved Cart' />
            </div>
            <div className='second'>
            <SidebarList svg={icong} title='Settings' />
            <SidebarList svg={iconh} title='Contact Support' />
            </div>
        </div>

    )
}

export default SidebarData;
