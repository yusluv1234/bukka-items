import React, { useState } from 'react';
import Bars from './images/bars.svg';
import bukkaLogo from './images/bukka-logo.svg';
import sideImage from './images/sideImage.svg';
import SidebarData from './SidebarData';
import Arrow from './images/arrow.svg';

// import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='bars'>
        <div className="navbar">
        <img src={Bars} alt='bar' onClick={showSidebar} />            
        </div>
        <div className='side-image'>
            <div>
        <img src={sideImage} alt='in' />
            </div>
            <div>
        <img src={Arrow} alt='arrow' />
            </div>
        </div>
        </div>
    )     
}
 
export default Navbar;
