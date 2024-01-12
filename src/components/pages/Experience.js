import React, { useState } from 'react';
import '../../App.css';
import '../Experience.css';
import Footer from '../Footer';
import { Button } from '../Button';

export default function Experience() {
    const [showWinter2024, setShowWinter2024] = useState(false);
    const [showFall2023, setShowFall2023] = useState(false);
    const [showSummer2023, setShowSummer2023] = useState(false);
    const [showSpring2023, setShowSpring2023] = useState(false);
    const [showWinter2023, setShowWinter2023] = useState(false);
    const [showFall2022, setShowFall2022] = useState(false);
    const [showFall2021, setShowFall2021] = useState(false);

    const toggleWinter2024 = () => {
        setShowWinter2024(!showWinter2024);
        // Close other periods if open
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowFall2021(false);
    };

    const toggleFall2023 = () => {
        setShowFall2023(!showFall2023);
        // Close other periods if open
        setShowWinter2024(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowFall2021(false);
    };

    const toggleSummer2023 = () => {
        setShowSummer2023(!showSummer2023);
        // Close other periods if open
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowFall2021(false);
    };

    const toggleSpring2023 = () => {
        setShowSpring2023(!showSpring2023);
        // Close other periods if open
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowFall2021(false);
    };

    const toggleWinter2023 = () => {
        setShowWinter2023(!showWinter2023);
        // Close other periods if open
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowFall2022(false);
        setShowFall2021(false);
    };

    const toggleFall2022 = () => {
        setShowFall2022(!showFall2022);
        // Close other periods if open
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2021(false);
    };

    const toggleFall2021 = () => {
        setShowFall2021(!showFall2021);
        // Close other periods if open
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
    };

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
                        Credential in Progress <i className='fas fa-arrow-right' />
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

            <div className='courses'>
                <h1 style={{ marginTop: '10px', textDecoration: 'underline' }}> 📚 Completed Software Courses</h1>
                <p style={{ marginLeft: '20px'}}>Click on the semester to view my completed software courses</p>

                <div className="text-container">
                    <div className="experience-item">
                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleWinter2024}>
                            Winter 2024
                        </h2>
                        {showWinter2024 && (
                            <>
                                {/* W24 Courses */}
                                <h2 className="role-title"> ENSF 400 | Software Engineering Industry Practices and Communication</h2>
                                <ul className="circle-list">
                                    <li>Continuation of professional skills within the field of software engineering. Application of common tools for efficient software practice, cloud, continuous integration, and deployment. Introduction to innovation and ethics in design and entrepreneurial mindset. Licensing, legal, and internationalization issues.</li>
                                </ul>
                                <h2 className="role-title"> SENG 401 | Software Architecture</h2>
                                <ul className="circle-list">
                                    <li>Software architectures and design for non-functional software properties. Introduction to program comprehension skills including analysis of existing architectures.</li>
                                </ul>
                                <h2 className="role-title"> ENSF 444 | Machine Learning Systems</h2>
                                <ul className="circle-list">
                                    <li>Techniques for extracting, cleaning, and visualizing data from engineering applications. Basic numerical computation techniques underlying learning algorithms. Fundamental supervised and unsupervised learning algorithms. Emphasis will be on leveraging existing software libraries and frameworks to solve problems in various engineering disciplines.</li>
                                </ul>
                                <h2 className="role-title"> SENG 438 | Software Testing, Reliability, and Quality</h2>
                                <ul className="circle-list">
                                    <li>Concepts, methods, techniques, processes, and tools for software testing. The principles, processes, and applications of software reliability and software quality assurance.</li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleFall2023}>
                            Fall 2023
                        </h2>
                        {showFall2023 && (
                            <>
                                {/* F23 Courses */}
                                <h2 className="role-title"> ENSF 480 | Principles of Software Design</h2>
                                <ul className="circle-list">
                                    <li>Brief overview of typical software development lifecycles. Systematic methods for designing large-scale, quality software. Concepts such as abstraction, modularity, and software modelling will be covered. Designing for non-functional properties of software will be introduced. Emphasis on individual skills.</li>
                                </ul>
                                <h2 className="role-title"> ENSF 462 | Networked Systems</h2>
                                <ul className="circle-list">
                                    <li>Fundamental principles of computer networks including layered protocol stacks. Socket programming. Programming frameworks for developing secure distributed systems. Introduction to principles of software-defined networks.</li>
                                </ul>
                                <h2 className="role-title"> ENSF 461 | Applied Operating Systems</h2>
                                <ul className="circle-list">
                                    <li>Fundamental principles of operating systems. Virtual memory and input/output. Processes, threads and CPU scheduling. Persistent storage. Concurrent programming techniques to address inter-process communication and synchronization. Discussion of security elements.</li>
                                </ul>
                                <h2 className="role-title"> ENSF 460 | Embedded Software and Hardware Systems</h2>
                                <ul className="circle-list">
                                    <li>Embedded real-time applications and operations. Computer architecture, microcontrollers and their instruction sets. Control and interfacing for robotics applications using common input/output devices, debugging and other software engineering practices. Strategies for interrupt handling and exception handling</li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSummer2023}>
                            Summer 2023
                        </h2>
                        {showSummer2023 && (
                            <>
                                {/* SU23 Courses */}
                                <h2 className="role-title"> ENCM 369 | Computer organization</h2>
                                <ul className="circle-list">
                                    <li>Organization of a simple stored-program computer: CPU, busses and memory. Instruction sets, machine code, and assembly language. Conventions for assembly language generated by compilers. Floating-point number representation. Hardware organization. Address translation and virtual memory. Input/output devices, computer interfacing, interrupt handling and multi-tasking systems.</li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSpring2023}>
                            Spring 2023
                        </h2>
                        {showSpring2023 && (
                            <>
                                {/* Sp23 Courses */}
                                <h2 className="role-title"> ENSF 337 | Programming Fundamentals for Software and Computer</h2>
                                <ul className="circle-list">
                                    <li>Key features of the C programming language. Pointers, memory models and memory management. Manipulation of text files and binary files. Introduction to recursion. Introduction to a modern object-oriented language. Development of basic program design skills with small projects.</li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleWinter2023}>
                            Winter 2023
                        </h2>
                        {showWinter2023 && (
                            <>
                                {/* W23 Courses */}
                                <h2 className="role-title"> ENSF 381 | Full Stack Web Development</h2>
                                <ul className="circle-list">
                                    <li>A practical survey of fullstack software development including front-end and back-end design and development, relevant libraries and framework, principles of devOps and cloud integration, in the context of agile software development. Introduction to Continuous Integration and Continuous Delivery (CI/CD).</li>
                                </ul>
                                <h2 className="role-title"> ENSF 380 | Object Oriented Principles for Software Development</h2>
                                <ul className="circle-list">
                                    <li>Fundamental object-oriented software design and development topics for software engineering. Object-oriented analysis, design and development. Inheritance, polymorphism, and application of common data structures. Best practices for tools for testing, debugging, and documentation.</li>
                                </ul>
                                <h2 className="role-title"> ENSF 338 | Practical Data Structures and Algorithms</h2>
                                <ul className="circle-list">
                                    <li>Introduction to foundational data structures such as stacks, queues, lists, heaps, hash tables,trees, and graphs. Sorting and searching algorithms. Complexity analysis. Applications for software development</li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleFall2022}>
                            Fall 2022
                        </h2>
                        {showFall2022 && (
                            <>
                                {/* F22 Courses */}
                                <h2 className="role-title"> ENSF 300 | Software Engineering Practices for Data Management</h2>
                                <ul className="circle-list">
                                    <li>Introduction to professional skills practices within software engineering. Individual software processes and reflection, resiliency and debugging skills, command line navigation, revision control. Foundations of database management systems. Types of data models, relational and entity-relationship models, integrity constraints, normalization, Structured Query Language (SQL). Data privacy, security, and ethical considerations.</li>
                                </ul>
                                <h2 className="role-title"> ENEL 353 | Digital Circuits</h2>
                                <ul className="circle-list">
                                    <li>Number systems and simple codes. Combinational logic: Boolean algebra, truth tables, minterms, maxterms, Karnaugh maps; gates, buffers, multiplexers and decoders; combinational circuit timing. Sequential circuits: latches and D flip flops; timing considerations; analysis and synthesis techniques; Mealy and Moore machine models; counters and registers. Introduction to memory arrays.</li>
                                </ul>
                                <h2 className="role-title"> ENDG 319 | Probability, Statistics, and Machine Learning</h2>
                                <ul className="circle-list">
                                    <li>Presentation and description of data, introduction to probability theory, Bayes' theorem, discrete and continuous probability distributions, estimation, sampling distributions, tests of hypotheses on means, variances and proportions; Introduction to fundamental machine learning including linear regression, classification and correlation. Applications are chosen from engineering practice from all disciplines.</li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleFall2021}>
                            Fall 2021
                        </h2>
                        {showFall2021 && (
                            <>
                                {/* F21 Courses */}
                                <h2 className="role-title"> ENDG 233 | Programming with Data</h2>
                                <ul className="circle-list">
                                    <li>Fundamental programming constructs and data structures. Algorithm development and problem solving. Programming techniques to facilitate data analysis. Obtaining and cleaning data. Data validation. Data manipulation. Data visualization. Introduction to decision making using machine learning. Applications chosen from all engineering disciplines.</li>
                                </ul>
                            </>
                        )}

 
                    </div>
                </div>
            </div>

                

            <Footer />
        </>
    );
}
