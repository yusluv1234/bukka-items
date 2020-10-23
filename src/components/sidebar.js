import React, { useState } from 'react';
import SidebarData from './SidebarData';

import './sidebar.css';

import Bukkalogo from '../components/images/bukka-logo.svg';
import Button from '../buttons/Button';


    const Sidebar = props => {
        
        const [sidebar, setSidebar] = useState(false);


        return (
            <div className="side-bar" setSidebar={props.setSidebar} sidebar={props.sidebar}>
                <img src={Bukkalogo} alt="Bukka" />       
                    <div className='sidebar-button'>
                <Button /> 
                </div>
                <div className='sidebarlist'>
                <SidebarData />
                </div>
            </div>
        )
    }

export default Sidebar;