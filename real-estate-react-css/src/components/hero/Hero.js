import React from 'react';
import './Hero.css'

import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="content">
                <h1>Find the project place</h1>
                <p className='search-text'> search the largest selection of luxury high-ris apartment , multi-family homes , and luxury homes</p>
                <form className='search'>
                    <div>
                        <input type="text" placeholder='Enter keyword' />
                    </div>
                    <div className="radio">
                    <input type='radio' checked />
                        <label>Buy</label>
                        <input type='radio'  />
                        <label>Rent</label>
                        <button type="submit"><AiOutlineSearch className="icon"></AiOutlineSearch></button>
                    </div>
                </form>
            
            </div>
            
        </div>
    );
};

export default Hero;