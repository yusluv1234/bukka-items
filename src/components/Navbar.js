import React from 'react';
import Bars from './images/bars.svg';
import sideImage from './images/sideImage.svg';
import Arrow from './images/arrow.svg';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='bars'>
        <div className="navbar">
            <img src={Bars} alt='bar' onClick={() => props.setSidebar(!props.sidebar)} />         
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
