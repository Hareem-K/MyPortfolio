import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src="images/resume1.jpg"
                text="Get a closer look at my skills, experiences, and qualifications. Your gateway to understanding my professional journey. 
                      Check out my resume for a comprehensive overview of what I bring to the table."
                label='Resume'
                path='/resume'
                openInNewTab={false}
                />
                <CardItem
                src="images/software-projects1.jpg"
                text="Explore my software projects to uncover the code behind each creation and try out the applications firsthand. Gain valuable 
                      insights into my technical skills, problem-solving approach, and the meaningful impact of my work."
                label='Software Projects'
                path='/projects'
                openInNewTab={false}
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src="images/experience2.jpg"
                text="Explore my career journey on the experience page, featuring a timeline of my work, credentials, and awards. Discover 
                      the milestones and challenges that have shaped my story, offering a clear view of my expertise and achievements."
                label='Experience'
                path='/experience'
                openInNewTab={false}
                />
                <CardItem
                src="images/contact1.jpg"
                text="Ready to make a connection? The contact page is the place to reach out. Whether you have questions, opportunities, 
                      or just want to say hello, I'm just a message away. Connect with me on LinkedIn, email, or explore my projects on GitHub."
                label='Contact'
                path='/contact'
                openInNewTab={false}
                />
            </ul>
        </div>
      </div>

    </div>
  )
}
export default Cards