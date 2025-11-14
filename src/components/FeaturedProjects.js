import React from 'react'
import './FeaturedProjects.css';
import FeaturedCardItem from './FeaturedCardItem';

function FeaturedProjects() {
  return (
    <div className='featured_cards'>
      <div className='featured'>
        <h1 className='featured_text'>Featured Projects</h1>
        <div className='featured_cards__container'>
            <div className='featured_cards__wrapper'>
                <ul className='featured_cards__items'>
                    <FeaturedCardItem
                    src="images/lalalu.png"
                    text="A full-stack spa and laser treatment website built with React, TypeScript, and Tailwind CSS. It features a..."
                    label='Lalalu Skin & Laser'
                    path='https://lalaluskinlaser.com/'
                    openInNewTab={true}
                    />
                    
                    <FeaturedCardItem
                    src="images/ObituaryMaker.png"
                    text="Developed an innovative obituary maker application, empowering users to create personalized tributes..."
                    label='Obituary Maker Application'
                    path='https://github.com/Hareem-K/Obituary-Maker'
                    openInNewTab={true}
                    />

                    <FeaturedCardItem
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
