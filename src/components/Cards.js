import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
      <h1 className='lets_get_started'>Lets Get Started!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src="images/resumes-desk.jpg"
                text="Get a closer look at my skills, experiences, and qualifications. Your gateway to understanding my professional journey. Check out my resume for a comprehensive overview of what I bring to the table."
                label='Resume'
                path='/resume'
                openInNewTab={false}
                />
                <CardItem
                src="images/software-projects.jpg"
                text="Explore a collection of my software projects, where you can not only discover the code behind each creation but also try out the applications. Gain insights into my technical skills, problem-solving approach, and the tangible impact of my work."
                label='Software Projects'
                path='/projects'
                openInNewTab={false}
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src="images/experience.jpg"
                text="Embark on a journey through my career on the experience page. Dive into a timeline of my work experiences, credentials, and awards. Unearth the milestones, challenges, and triumphs that have defined my professional story. Gain a comprehensive view of my expertise and notable achievements."
                label='Experience'
                path='/experience'
                openInNewTab={false}
                />
                <CardItem
                src="images/contact.jpg"
                text="Ready to make a connection? The contact page is the place to reach out. Whether you have questions, opportunities, or just want to say hello, I'm just a message away. Connect with me on LinkedIn or shoot me an email. Don't forget to explore my projects on GitHub."
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