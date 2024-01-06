import React from 'react';
import '../../App.css';
import '../Experience.css';
import Footer from '../Footer';
import { Button } from '../Button';

export default function Experience() {
    return (
        <>
            <h1 className='experience'>EXPERIENCE</h1>
            <div className='work'>
                <h1 style={{ marginTop: '10px', textDecoration: 'underline' }}> 📊 Work Experience</h1>

                <div className="text-container">
                    <div className="experience-item">
                        <h2 className="role-title">Web Content Coordinator | The School of Public Policy <span className="date">Nov 2023 - Current</span></h2>
                        <ul className="circle-list">
                            <li>Deliver an optimal user experience by executing comprehensive content updates and page revisions, and ensuring accuracy and aesthetic appeal of webpages.</li>
                            <li>Implement an organized tracking system by consistently updating the master Excel list of all content slated for migration, facilitating efficient project management and progress monitoring.</li>
                            <li>Conduct thorough testing and quality assurance measures, ensuring the seamless functionality and performance of the revamped web pages, contributing to an error-free user experience.</li>
                            <li>Collaborate closely with the Web Specialist, providing versatile support and addressing various tasks associated with the web rebuilt project, showcasing adaptability and a collaborative sprite to achieve project goals.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-container">
                    <div className="experience-item">
                        <h2 className="role-title">Operations Staff & Online Marketer | Prep 101, University of Calgary <span className="date">Aug 2022 – Current</span></h2>
                        <ul className="circle-list">
                            <li>Collaborate with Operations Managers to ensure prep sessions go smoothly by ensuring adequate materials, assisting students with finding session locations, and answering any questions that arise during each session.</li>
                            <li>Prepare students for prep sessions by organizing sign-in desks, collecting payments, and handing out materials.</li>
                            <li>Promote upcoming prep sessions online through Facebook, Discord, and Instagram, while consistently updating and communicating session information to students.</li>
                            <li>Ensure accurate and concise prep session information is maintained on all social media platforms.</li>
                            <li>Adapt my communication style to pertain to the type of student I am speaking to in order to optimize the delivery of my message.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-container">
                    <div className="experience-item">
                        <h2 className="role-title">Administrative & Marketing Assistant | Glenbow Construction <span className="date">Jan 2021 – Aug 2023</span></h2>
                        <ul className="circle-list">
                            <li>Provide consistent administrative support to the company by coordinating with clients, construction workers and suppliers.</li>
                            <li>Promote the company by maintaining a personable telemarketing and social media presence to win new projects.</li>
                            <li>Manage the company’s expense account by preparing and processing invoices, recording all transactions, and ensuring all bills are paid in a timely manner.</li>
                            <li>Communicate with different suppliers in order to get quotes for various construction materials with delivery timelines and present them to higher management for approval.</li>
                            <li>Ensure on time delivery of approved supplies and material for projects as per the schedule by consistently checking in with suppliers.</li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className='credentials'>
                {/* Credentials */}
                <h1 style={{ marginTop: '10px', textDecoration: 'underline' }}>🏆 Awards and Credentials</h1>
                <div>
                    <div className="text-container">
                    <h2 className="role-title">Web Development Fundamentals Credential | IBM SkillsBuild <span className="date">Jan 2024</span></h2>
                        <ul className="circle-list">
                            <li>Identify basic computer functions, types of programming languages, the main steps to develop a website, and fundamentals about front-end and back-end development</li>
                            <li>Explain the features and functions of HTML, CSS, and JavaScript and how the languages interact</li>
                            <li>Identify the phases in the software development lifecycle, and the waterfall and agile approaches to web development</li>
                            <li>Identify common HTML elements, HTML attributes, coding organization techniques, the CSS box model, best practices for writing HTML and CSS, and key features of an integrated development environment (IDE)</li>
                            <li>Identify the basic structure of JavaScript code, techniques to include JavaScript in HTML, how JavaScript enables dynamic websites, and popular database functions to store and work with website data using MySQL</li>
                            <li>Identify different types of website testing, the value of automated testing, version control systems, the main steps to publish a website, continuous delivery and continuous deployment, DevOps, responsive design, cloud computing for web development and deployment, and the methods and tools used to test and automate the deployment of websites</li>
                            <li>Develop an interactive web page using HTML, CSS, and JavaScript, and perform a simple functional test on a web page</li>
                            <li>Recognize the job market, responsibilities and skill sets of web development professionals, and resources and learning opportunities to explore</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '217px', margin: '0 auto', marginTop: '10px' }}>
                        <Button className='btns' buttonStyle='btn--download' buttonSize='btn--large' linkTo={"/"} external>
                        View Credential <i className='fas fa-arrow-right' />
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="text-container">
                    <h2 className="role-title">Foundations Tier | Engineering Leadership Certificate <span className="date">Apr 2022</span></h2>
                        <ul className="circle-list">
                            <li>Through engaging in core workshops and events, students learned foundational leadership skills including self awareness, effective communication, and teamwork.</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '217px', margin: '0 auto', marginTop: '10px' }}>
                        <Button className='btns' buttonStyle='btn--download' buttonSize='btn--large' linkTo={"https://badges.ucalgary.ca/achievements/627d3efa0f59cdee9e664379320ec5d8"} external>
                        View Credential <i className='fas fa-arrow-right' />
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="text-container">
                    <h2 className="role-title">Innovation and Core Concepts of Engineering Entrepreneurship Certificate | University of Calgary<span className="date">Oct 2022</span></h2>
                        <ul className="circle-list">
                            <li>Students will be introduced to core concepts of innovation and engineering entrepreneurship</li>
                            <li>Students will understand the engineering entrepreneurship journey, understand the entrepreneurial mindset and opportunity recognizing mind, and develop competence in developing business models</li>
                            <li>Students will also build and develop key interpersonal skills including building a startup team, project management essentials, communication, teamwork, adaptability and resilience</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '217px', margin: '0 auto', marginTop: '10px' }}>
                        <Button className='btns' buttonStyle='btn--download' buttonSize='btn--large' linkTo={"https://badges.ucalgary.ca/achievements/1786d1d78fac536b666e05d58dadbd00"} external>
                        View Credential <i className='fas fa-arrow-right' />
                        </Button>
                    </div>
                </div>

                {/* Awards */}
                <div>
                    <div className="text-container">
                    <h2 className="role-title">Diversity Champions in Engineering Award | University of Calgary<span className="date">Sept 2021</span></h2>
                        <ul className="circle-list">
                            <li>Promoted diversity and inclusivity in engineering within the University of Calgary community and received a monetary award of $4000 in recognition of contributions.</li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <div className="text-container">
                    <h2 className="role-title">Recognition award | Glenbow Construction Company<span className="date">Sept 2021</span></h2>
                        <ul className="circle-list">
                            <li>Received a recognition award from Glenbow Construction Company in acknowledgement of “high performance, versatility, adaptability and multitasking”.</li>
                        </ul>
                    </div>
                </div>
            </div>

                

            <Footer />
        </>
    );
}
