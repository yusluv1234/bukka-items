import React from 'react';

import './sidebarlist.css';

const sidebarList = props =>{
    return (
        <div className='list'>
            <div className='svg'>{props.svg}</div>
            <div className='title'>{props.title}</div>
        </div>
    )
}

export default sidebarList;
