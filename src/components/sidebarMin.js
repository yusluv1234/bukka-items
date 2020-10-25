import React from 'react';
import SidebarList from './SidebarList'
import Instore from './images/instore.svg';
import Online from './images/online.svg';
import History from './images/history.svg';
import Menu from './images/menu.svg';
import savedCart from './images/savecart.svg';
import Settings from './images/settings.svg';
import contactSupport from './images/contact.svg'
import BukkaLogo from './images/bukka-logo.svg';

import './sidebarMin.css';

const sidebarMin = () => {

    const icona = <img src={Instore} alt='instore' />
    const iconb = <img src={Online} alt='instore' />
    const iconc = <img src={History} alt='instore' />
    const icond = <img src={Menu} alt='instore' />
    const icone = <img src={savedCart} alt='instore' />
    const icong = <img src={Settings} alt='instore' />
    const iconh = <img src={contactSupport} alt='instore' />
 
    return (
        <div className='sidebar-min'>
            <div>
                <BukkaLogo />
            </div>
            <div>
            <SidebarList svg={icona} />
            <SidebarList svg={iconb} />
            <SidebarList svg={iconc} />
            <SidebarList svg={icond} />
            <SidebarList svg={icone} />
            </div>
            <div className='others'>
            <SidebarList svg={icong} />
            <SidebarList svg={iconh} />
            </div>
        </div>

    )
}

export default sidebarMin;
