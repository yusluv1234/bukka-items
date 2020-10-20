import React, { useState } from 'react';
import SidebarData from './SidebarData';
import { Link } from 'react-router-dom';

import './sidebar.css';

import Bukkalogo from '../components/images/bukka-logo.svg';
import Button from '../buttons/Button';


    function Sidebar() {

        const [sidebar, setSidebar] = useState(true);

        const showSidebar = () => setSidebar(!sidebar)

        return (
    <div className="side-bar">
        <img onClick={showSidebar} src={Bukkalogo} alt="Bukka" />       
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