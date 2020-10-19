import React from 'react';
import Great from '../images/greater.svg';
// import Searc from '../images/search.svg';

import './Search.css';

const Search = () => {
    return (
            <div className='food-item'>
                {/* <span><Searc /></span> */}
                <input className='input' type='' placeholder='Search for Menu, Food Item' size="50" />
                <span className='great'><img src={Great} alt='great' /></span>
            </div>
    )
}

export default Search
