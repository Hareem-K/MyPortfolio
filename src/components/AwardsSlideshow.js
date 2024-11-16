import React from 'react';
import Slider from 'react-slick';
import { Button } from './Button';
import './ExperienceSlideshow.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AwardsSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const awards = [
    {
      image: "/images/Experience/AIFundamentals.png",
      title: "Artificial Intelligence Fundamentals | IBM SkillsBuild",
      date: "Sept 2024",
      details: [ "Explores the evolution of AI, from its historical milestones to modern advancements, emphasizing machine learning and data analysis techniques that drive predictions and decisions.", "Demonstrates expertise in natural language processing, image analysis, and generative AI, showcasing how neural networks power innovative applications in today's technological landscape.", "Designs ethical AI models in IBM Watson Studio, ensuring minimal bias and aligning solutions with responsible AI principles while identifying career opportunities and key skills in the AI field." ],
      button: {
        text: "View Credential",
        link: "https://www.credly.com/badges/9f4cba7a-6446-40f1-9122-e0bcc3fe6df4/public_url"
      }
    },
    {
      image: "/images/Experience/WebDevFundamentals.png",
      title: "Web Development Fundamentals Credential | IBM SkillsBuild",
      date: "Mar 2024",
      details: [ "Demonstrates proficiency in front-end and back-end development, understanding the software development lifecycle, agile methodologies, and the interplay of HTML, CSS, and JavaScript in creating dynamic web applications.", "Explores techniques for integrating JavaScript into HTML, managing data with MySQL, and applying robust testing strategies, including automated testing, version control, and responsive design principles to ensure quality.", "Applies advanced practices like DevOps and continuous delivery for seamless web deployment while identifying key career opportunities and skill sets for professional development in web development." ],
      button: {
        text: "View Credential",
        link: "https://www.credly.com/badges/6a0adff7-21be-4060-8802-bc397cfef050/public_url"
      }
    },
    {
      image: "/images/Experience/AB.png",
      title: "Jason Lang Scholarship | University of Calgary",
      date: "Oct 2023",
      details: [
        "Received the Jason Lang Scholarship due to outstanding academic achievements and received $1000 in recognition of excellence in undergraduate studies."
      ]
    },
    {
      image: "/images/Experience/leadership.png",
      title: "Foundations Tier | Engineering Leadership Certificate | University of Calgary",
      date: "Apr 2022",
      details: [
        "Acquired foundational leadership skills, including self-awareness, effective communication, and teamwork, through engaging in core workshops and events."
      ],
      button: {
        text: "View Credential",
        link: "https://badges.ucalgary.ca/achievements/627d3efa0f59cdee9e664379320ec5d8"
      }
    },
    {
      image: "/images/Experience/Entrepreneurship.png",
      title: "Innovation and Core Concepts of Engineering Entrepreneurship Certificate | University of Calgary",
      date: "Oct 2022",
      details: [
        "Immersed in core concepts of innovation and engineering entrepreneurship.",
        "Gained an understanding of the engineering entrepreneurship journey, developed an entrepreneurial mindset, recognized opportunities, and developed competence in creating business models.",
        "Built and developed key interpersonal skills, including forming a startup team, mastering project management essentials, and enhancing communication, teamwork, adaptability, and resilience."
      ],
      button: {
        text: "View Credential",
        link: "https://badges.ucalgary.ca/achievements/1786d1d78fac536b666e05d58dadbd00"
      }
    },
    {
      image: "/images/Experience/Schulich.png",
      title: "Diversity Champions in Engineering Award | Schulich School of Engineering",
      date: "Sept 2021",
      details: [
        "Promoted diversity and inclusivity in engineering within the University of Calgary community and received a monetary award of $4000 in recognition of contributions."
      ]
    },
    {
      image: "/images/Experience/glenbow.png",
      title: "Recognition Award | Glenbow Construction Company",
      date: "Sept 2021",
      details: [
        "Received a recognition award from Glenbow Construction Company in acknowledgement of “high performance, versatility, adaptability and multitasking”"
      ]
    }
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {awards.map((award, index) => (
          <div key={index} className="slide">
            {award.image && (
              <img
                src={award.image}
                alt={award.title}
                className="slide-image"
              />
            )}
            <div className="slide-description">
                <div className="text-container">
                    <h2 className="role-title">{award.title}</h2>
                    <div className="awardDate">{award.date}</div>
                    <ul className="circle-list">
                    {award.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                    </ul>
                    {award.button && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <Button
                        className='btns'
                        buttonStyle='btn--credential'
                        buttonSize='btn--large'
                        linkTo={award.button.link}
                        external
                        >
                        {award.button.text} <i className='fas fa-arrow-right' />
                        </Button>
                    </div>
                    )}
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AwardsSlideshow;
