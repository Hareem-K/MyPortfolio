import React from 'react'
import './FeaturedProjects.css';
import Featured_Card_Item from './Featured_Card_Item';

function FeaturedProjects() {
  return (
    <div className='featured_cards'>
      <div className='featured'>
        <h1 className='featured_text'>Featured Projects</h1>
        <div className='featured_cards__container'>
            <div className='featured_cards__wrapper'>
                <ul className='featured_cards__items'>
                    <Featured_Card_Item
                    src="images/airline.jpg"
                    text="Collaborated with a team via GitHub to design and implement a dynamic airline booking system..."
                    label='Airline Booking System'
                    path='https://github.com/Hareem-K/Airline-Booking-System'
                    openInNewTab={true}
                    />
                    
                    <Featured_Card_Item
                    src="images/ObituaryMaker.png"
                    text="Developed an innovative obituary maker application, empowering users to create personalized tributes..."
                    label='Obituary Maker Application'
                    path='https://github.com/Hareem-K/Obituary-Maker'
                    openInNewTab={true}
                    />

                    <Featured_Card_Item
                    src="images/wordle.png"
                    text="Revitalized the classic game Wordle through the implementation of Vanilla JavaScript, HTML, and CSS..."
                    label='Wordle'
                    path='https://github.com/Hareem-K/Wordle-Application'
                    openInNewTab={true}
                    />
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
