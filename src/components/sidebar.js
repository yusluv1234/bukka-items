import React from 'react';
import SidebarData from './SidebarData';
import SidebarMin from './sidebarMin';

import './sidebar.css';

import Bukkalogo from '../components/images/bukka-logo.svg';
import Button from '../buttons/Button';


    const Sidebar = props => {
        let sidebarComp = (
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

        if (props.sidebar) {
            sidebarComp = <div className="side-bar" setSidebar={props.setSidebar} sidebar={props.sidebar}>
                
                <div className='sidebarlist'>
                <SidebarData />
                </div>
            </div>
        }   
        return  sidebarComp
    }

export default Sidebar;