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
        "Supervised operations staff to manage student sign-ins, ensuring smooth book pick-ups for over 100 students, while creating custom prep bundles and maintaining a master Excel sheet with updates from the student database. Coordinated supply deliveries and verified orders for quality assurance, supporting seamless book distribution and contributing to students' exam success.",
      ],
    },
    {
      title: "On Campus Operations Staff",
      date: "Aug 2022 – Jan 2024",
      details: [
        "Worked with Operations Managers to ensure smooth prep sessions by providing study materials, creating custom prep bundles, and preparing sign-in desks to assist hundreds of students. Assisted students by answering questions, helping them find session locations, and adapting communication styles to optimize message delivery.",
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
      image: "/images/Experience/campusbuddy.png",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <h2 className="role-title">
              UI/UX Designer & Front End Developer Intern | Campus Buddy
            </h2>
            <h4 className="date">June 2025 - Present</h4>
            <div className="description">
              <p>
                Designing wireframes, prototypes, and design systems in Figma while developing reusable React/TypeScript 
                components for web and mobile platforms. Collaborating with developers and stakeholders to enhance usability, 
                optimize performance, and ensure accessible, consistent user experiences.
              </p>
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
                Client Services Analyst | University of Calgary, Web Services
              </h2>
              <h4 className="date">Oct 2024 - Present</h4>
  
              <div className="description">
                <p>Address client-reported issues efficiently by triaging ServiceNow tickets and collaborating with development 
                    teams using Jira for bug fixes and feature requests. Enhance system usability through quality assurance 
                    testing, user documentation, and support for high-priority strategic initiatives.
                </p>
              </div>
            </div>
          </div>
        ),
    },

    {
      image: "/images/Experience/Techstart.png",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <h2 className="role-title">
              UI/UX Designer & Front End Developer | Tech Start, University of Calgary
            </h2>
            <h4 className="date">Oct 2024 - May 2025</h4>
            <div className="description">
              <p>
                Design intuitive UI/UX using FigJam and develop a React.js and CSS-based event hosting platform with features like personalized 
                QR profiles, itinerary management, and AI-driven networking tools. Streamline event management through budgeting tools, 
                inventory tracking, and attendee check-in logs to enhance the experience for organizers and participants.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      image: "/images/Experience/prep101.jpg",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <div className="prep101-progress-bar">
              {["Operations Manager", "Operations Staff", "Online Marketer"].map((label, index) => (
                <Button
                  key={index}
                  buttonStyle="btn--download"
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
              <div className="description">
                {prep101Roles[activeRole].details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
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
            <div className="description">
                <p>
                Enhanced user experience by updating and refining web content to ensure accuracy, aesthetic appeal, and the successful creation of over 700 pages. 
                Streamlined project management and progress tracking through an organized system and updated master Excel list, working seamlessly within a scrum 
                methodology. Conducted thorough testing and quality assurance to deliver flawless functionality and a seamless user experience across revamped web 
                pages.
                </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      image: "/images/Experience/glenbow.png",
      description: (
        <div className="text-container">
          <div className="experience-item">
            <h2 className="role-title">
              Administrative & Marketing Assistant | Glenbow Construction
            </h2>
            <h4 className="date">Jan 2021 – Aug 2023</h4>
            <div className="description">
              <p>
              Provided administrative support by coordinating with clients, construction workers, and suppliers, while managing the company’s expense account to
               ensure accurate records and timely payments. Promoted the company and secured new projects through a personable telemarketing and social media 
               presence, effectively liaising with suppliers to obtain quotes, ensure timely deliveries, and maintain project schedules.
              </p>

            </div>
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
