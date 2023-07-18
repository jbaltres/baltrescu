import React from 'react'
import "./HeroSection.css"

function HeroSection() {
    return(
        <div className='hero-container'>
            <h1>Travel More</h1>
            <p>Plan your next trip today</p>
            <div className='hero-btns'>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default HeroSection