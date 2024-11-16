import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button } from './Button';
import './ExperienceSlideshow.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ExperienceSlideshow() {
  const [activeRole, setActiveRole] = useState(0); // Track active Prep101 role

  const prep101Roles = [
    {
      title: "On Campus Operations Manager",
      date: "Jan 2024 – July 2024",
      details: [
        "Supervised operations staff to manage student sign-ins, ensuring smooth book pick-ups for over 100 students, while creating custom prep bundles and maintaining a master Excel sheet with updates from the student database.",
        "Coordinated supply deliveries and verified orders for quality assurance, supporting seamless book distribution and contributing to students' exam success.",
      ],
    },
    {
      title: "On Campus Operations Staff",
      date: "Aug 2022 – Jan 2024",
      details: [
        "Worked with Operations Managers to ensure smooth prep sessions by providing study materials, creating custom prep bundles, and preparing sign-in desks to assist hundreds of students.",
        "Assisted students by answering questions, helping them find session locations, and adapting communication styles to optimize message delivery.",
      ],
    },
    {
      title: "Online Marketer",
      date: "Aug 2022 – Jan 2023",
      details: [
        "Promoted upcoming prep sessions through Facebook, Discord, and Instagram by maintaining accurate and concise session information on all platforms, while consistently communicating updates to students, managers, and higher-ups to ensure alignment and address feedback effectively.",

      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const slides = [
    {
      image: "/images/Experience/Techstart.png",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <h2 className="role-title">
              UI/UX - Front End Developer | Tech Start, University of Calgary
            </h2>
            <h4 className="date">Oct 2024 - Present</h4>
            <ul className="circle-list">
              <li>
                Design intuitive UI/UX using FigJam and develop a React.js and CSS-based event hosting platform with features like personalized 
                QR profiles, itinerary management, and AI-driven networking tools.
              </li>
              <li>
                Streamline event management through tools for budgeting, inventory tracking, and attendee check-in logs, enhancing the 
                experience for organizers and participants.
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    {
        image: "/images/Experience/uofc.png",
        description: (
          <div className="text-container">
            <div className="experience-item">
              <h2 className="role-title">
                Client Services Analyst | University of Calgary, Web Services
              </h2>
              <h4 className="date">Oct 2024 - Present</h4>
  
              <ul className="circle-list">
                <li>Address client-reported issues efficiently by triaging ServiceNow tickets and collaborating with development 
                    teams using Jira for bug fixes and feature requests.</li>
                <li>Enhance system usability through quality assurance testing, creating user documentation, and supporting 
                    high-priority tasks for strategic initiatives.</li>
              </ul>
            </div>
          </div>
        ),
    },

    {
      image: "/images/Experience/prep101.png",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <div className="prep101-progress-bar">
              {["Operations Manager", "Operations Staff", "Online Marketer"].map((label, index) => (
                <Button
                  key={index}
                  buttonStyle="btn--outline-inverse"
                  buttonSize="btn--medium"
                  onClick={() => setActiveRole(index)}
                  external={false}
                >
                  {label}
                </Button>
              ))}
            </div>
            <div className="prep101-role-details">
              <h3 className="role-title">{prep101Roles[activeRole].title}</h3>
              <h4 className="date">{prep101Roles[activeRole].date}</h4>
              <ul className="circle-list">
                {prep101Roles[activeRole].details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      image: "/images/Experience/uofc.png",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <h2 className="role-title">
              Web Content Coordinator | University of Calgary, Digital Experience
            </h2>
            <h4 className="date">Nov 2023 - July 2024</h4>
            <ul className="circle-list">
                <li>Enhanced user experience by meticulously updating content and revising webpages, ensuring accuracy and aesthetic appeal, resulting in the creation of over 700 pages.</li>
                <li>Established an organized tracking system and consistently updated the master Excel list of content slated for migration, streamlining project management and progress monitoring within a scrum methodology.</li>
                <li>Conducted rigorous testing and quality assurance measures to ensure flawless functionality and performance of revamped web pages, contributing to an error-free user experience.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      image: "/images/Experience/glenbowconstruction.png",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <h2 className="role-title">
              Administrative & Marketing Assistant | Glenbow Construction
            </h2>
            <h4 className="date">Jan 2021 – Aug 2023</h4>
            <ul className="circle-list">
              <li>Provided administrative support by coordinating with clients, construction workers, and suppliers, managing the company’s expense account, and ensuring timely payment of bills and accurate transaction records.</li>
              <li>Promoted the company and secured new projects by maintaining a personable telemarketing and social media presence while liaising with suppliers to obtain quotes, ensure timely material deliveries, and support project schedules.</li>

            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
            <div className="slide-description">{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ExperienceSlideshow;
