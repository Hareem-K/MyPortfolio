import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../Experience.css';
import Footer from '../Footer';
import { Button } from '../Button';

export default function Experience() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const [showSummer2024, setShowSummer2024] = useState(false);
    const [showSpring2024, setShowSpring2024] = useState(false);
    const [showWinter2024, setShowWinter2024] = useState(false);
    const [showFall2023, setShowFall2023] = useState(false);
    const [showSummer2023, setShowSummer2023] = useState(false);
    const [showSpring2023, setShowSpring2023] = useState(false);
    const [showWinter2023, setShowWinter2023] = useState(false);
    const [showSummer2022, setShowSummer2022] = useState(false);
    const [showSpring2022, setShowSpring2022] = useState(false);
    const [showFall2022, setShowFall2022] = useState(false);
    const [showWinter2022, setShowWinter2022] = useState(false);
    const [showFall2021, setShowFall2021] = useState(false);

    const toggleSummer2024 = () => {
        setShowSummer2024(!showSummer2024);
        // Close other periods if open
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleSpring2024 = () => {
        setShowSpring2024(!showSpring2024);
        // Close other periods if open
        setShowSummer2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleWinter2024 = () => {
        setShowWinter2024(!showWinter2024);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleFall2023 = () => {
        setShowFall2023(!showFall2023);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleSummer2023 = () => {
        setShowSummer2023(!showSummer2023);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleSpring2023 = () => {
        setShowSpring2023(!showSpring2023);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleWinter2023 = () => {
        setShowWinter2023(!showWinter2023);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleFall2022 = () => {
        setShowFall2022(!showFall2022);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleSummer2022 = () => {
        setShowSummer2022(!showSummer2022);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleSpring2022 = () => {
        setShowSpring2022(!showSpring2022);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowWinter2023(false);
        setShowFall2022(false);
        setShowSummer2022(false);
        setShowWinter2022(false);
        setShowFall2021(false);
    };

    const toggleWinter2022 = () => {
        setShowWinter2022(!showWinter2022);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowFall2022(false);
    };

    const toggleFall2021 = () => {
        setShowFall2021(!showFall2021);
        // Close other periods if open
        setShowSummer2024(false);
        setShowSpring2024(false);
        setShowWinter2024(false);
        setShowFall2023(false);
        setShowSummer2023(false);
        setShowSpring2023(false);
        setShowWinter2023(false);
        setShowSummer2022(false);
        setShowSpring2022(false);
        setShowWinter2022(false);
        setShowFall2022(false);
    };

    return (
        <>
            <h1 className='experience'>EXPERIENCE</h1>
            <div className='work'>
                <h1 style={{ marginTop: '10px', textDecoration: 'underline' }}> 📈Work Experience</h1>

                <div className="text-container">
                    <div className="experience-item">
                        <h2 className="role-title">Web Content Coordinator | The School of Public Policy, University of Calgary <span className="date">Nov 2023 - July 2024</span></h2>
                        <ul className="circle-list">
                            <li>Enhance user experience through meticulous content updates and page revisions, ensuring accuracy and aesthetic appeal of webpages, resulting in the creation of over 700 pages.</li>
                            <li>Establish an organized tracking system by consistently updating the master Excel list of all content slated for migration, facilitating seamless project management and progress monitoring.</li>
                            <li>Conduct rigorous testing and quality assurance measures to guarantee flawless functionality and performance of the revamped web pages, contributing to an error-free user experience.</li>
                            <li>Collaborate closely with the Web Specialist, providing versatile support and addressing various tasks associated with the web rebuilt project, showcasing adaptability and a collaborative sprite to achieve project goals.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-container">
                    <div className="experience-item">
                        <h2 className="role-title">Prep101 <span className="date">Aug 2022 – July 2024</span></h2>
                        <ul className="circle-list">
                        <h3 className="role-title">On Campus Operations Manager <span className="date">Jan 2024 – July 2024</span></h3>
                            <ul className="circle-list">
                                <li>Managed seamless book distribution by gathering appropriate supplies, organizing materials, and maintaining master Excel sheet through updates from the student database.</li>
                                <li>Coordinated with suppliers to ensure on time deliveries of prep session materials and verify orders for quality assurance purposes.</li>
                                <li>Supervised operations staff in managing student sign-ins to ensure smooth book pick-ups for over 100 students. Created custom prep bundles for each course, contributing to students’ exam success.</li>
                                <li>Acted as a key point of contact for student inquiries, providing detailed information and guidance to guarantee students were well-prepared for their exam prep sessions.</li>
                            </ul>

                            <h3 className="role-title">On Campus Operations Staff <span className="date">Aug 2022 – Jan 2024</span></h3>
                            <ul className="circle-list">
                                <li>Collaborated with Operations Managers to ensure prep sessions went smoothly by providing adequate study materials.</li>    
                                <li>Created custom bundles of prep session materials, ensuring students were fully prepared for their prep sessions and were successful in their exams.</li>
                                <li>Assisted students with finding session locations and answered any questions that arose during each session.</li>
                                <li>Prepared students for prep sessions by organizing sign-in desks, collecting payments, and handing out materials.</li>
                                <li>Adapted my communication style to suit the type of student I was speaking to in order to optimize the delivery of my message.</li>
                            </ul>

                            <h3 className="role-title">Online Marketer <span className="date">Aug 2022 – Jan 2023</span></h3>
                            <ul className="circle-list">
                                <li>Promoted upcoming prep sessions online through Facebook, Discord, and Instagram, while consistently updating and communicating session information to students.</li>
                                <li>Ensured accurate and concise prep session information was maintained on all social media platforms.</li>
                                <li>Maintained consistent communication with managers and higher-ups, ensuring that all relevant updates and feedback were promptly addressed.</li>
                            </ul>
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
                <h1 className='awards-title'>🏆Awards and Credentials</h1>
                <div>
                    <div className="text-container">
                    <h2 className="role-title">Artificial Intelligence Fundamentals | IBM SkillsBuild <span className="date">Jul 2024</span></h2>
                        <ul className="circle-list">
                            <li>Describe the history of AI development</li>
                            <li>Define and describe structured, unstructured, and semi-structured data, machine learning, and ways that AI makes predictions from data</li>
                            <li>Explain how AI understands human language</li>
                            <li>Explain how AI analyzes and creates images</li>
                            <li>Describe three ways that AI analyzes data</li>
                            <li>Describe how AI makes predictions using neural networks</li>
                            <li>Explain generative AI and the impact in today's world</li>
                            <li>Create an AI machine learning model using IBM Watson Studio</li>
                            <li>Describe ways that AI systems can be designed to minimize bias</li>
                            <li>Recognize the AI job market, responsibilities and skill sets of an AI professional, and provide resources and learning opportunities to explore</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '217px', margin: '0 auto', marginTop: '10px' }}>
                        <Button className='btns' buttonStyle='btn--credential' buttonSize='btn--large' linkTo={"https://www.ibm.com/training/badge/artificial-intelligence-fundamentals"} external>
                        In Progress <i className='fas fa-arrow-right' />
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="text-container">
                    <h2 className="role-title">Web Development Fundamentals Credential | IBM SkillsBuild <span className="date">Mar 2024</span></h2>
                        <ul className="circle-list">
                            <li>Identify basic computer functions, types of programming languages, the main steps to develop a website, and fundamentals about front-end and back-end development</li>
                            <li>Explain the features and functions of HTML, CSS, and JavaScript and how the languages interact</li>
                            <li>Identify the phases in the software development lifecycle, and the waterfall and agile approaches to web development</li>
                            <li>Identify common HTML elements, HTML attributes, coding organization techniques, the CSS box model, best practices for writing HTML and CSS, and key features of an IDE</li>
                            <li>Identify the basic structure of JavaScript code, techniques to include JavaScript in HTML, how JavaScript enables dynamic websites, and popular database functions to store and work with website data using MySQL</li>
                            <li>Identify different types of website testing, the value of automated testing, version control systems, the main steps to publish a website, continuous delivery and continuous deployment, DevOps, responsive design, cloud computing for web development and deployment, and the methods and tools used to test and automate the deployment of websites</li>
                            <li>Develop an interactive web page using HTML, CSS, and JavaScript, and perform a simple functional test on a web page</li>
                            <li>Recognize the job market, responsibilities and skill sets of web development professionals, and resources and learning opportunities to explore</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '217px', margin: '0 auto', marginTop: '10px' }}>
                        <Button className='btns' buttonStyle='btn--credential' buttonSize='btn--large' linkTo={"https://www.credly.com/badges/6a0adff7-21be-4060-8802-bc397cfef050/public_url"} external>
                        View Credential <i className='fas fa-arrow-right' />
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="text-container">
                    <h2 className="role-title">Jason Lang Scholarship | University of Calgary<span className="date">Oct 2023</span></h2>
                        <ul className="circle-list">
                            <li>Received the Jason Lang Scholarship due to outstanding academic achievements, and received $1000 in recognition of excellence in undergraduate studies.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="text-container">
                    <h2 className="role-title">Foundations Tier | Engineering Leadership Certificate | University of Calgary<span className="date">Apr 2022</span></h2>
                        <ul className="circle-list">
                            <li>Acquired foundational leadership skills, including self-awareness, effective communication, and teamwork, through engaging in core workshops and events.</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '217px', margin: '0 auto', marginTop: '10px' }}>
                        <Button className='btns' buttonStyle='btn--credential' buttonSize='btn--large' linkTo={"https://badges.ucalgary.ca/achievements/627d3efa0f59cdee9e664379320ec5d8"} external>
                        View Credential <i className='fas fa-arrow-right' />
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="text-container">
                    <h2 className="role-title">Innovation and Core Concepts of Engineering Entrepreneurship Certificate | University of Calgary<span className="date">Oct 2022</span></h2>
                        <ul className="circle-list">
                            <li>Immersed in core concepts of innovation and engineering entrepreneurship.</li>
                            <li>Gained an understanding of the engineering entrepreneurship journey, developed an entrepreneurial mindset, recognized opportunities, and developed competence in creating business models.</li>
                            <li>Built and developed key interpersonal skills, including forming a startup team, mastering project management essentials, and enhancing communication, teamwork, adaptability, and resilience.</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '217px', margin: '0 auto', marginTop: '10px' }}>
                        <Button className='btns' buttonStyle='btn--credential' buttonSize='btn--large' linkTo={"https://badges.ucalgary.ca/achievements/1786d1d78fac536b666e05d58dadbd00"} external>
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
                <h1 style={{ marginTop: '10px', textDecoration: 'underline' }}> 🏫Completed Courses</h1>
                <p style={{ marginLeft: '20px'}}>Click on a semester to view my completed courses</p>

                <div className="text-container">
                    <div className="experience-item">
                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSummer2024}>
                            Summer 2024
                        </h2>
                        {showSummer2024 && (
                            <>
                                {/* W24 Courses */}
                                <h2 className="role-title"> ENGG 209 | Engineering Economics</h2>
                                <ul className="circle-list">
                                    <li>The basic tools and methodology of engineering economic studies. Topics include investment decisions, theory of replacement, economies of scale, externalities, social decision making and government regulation. Examples are drawn from engineering projects.</li>
                                </ul>
                                <h2 className="role-title"> GRST 211 | Technical Terms of Medicine and the Life Sciences</h2>
                                <ul className="circle-list">
                                    <li>The Greek and Latin elements of modern medical and life-sciences terminology, with a brief introduction to their history and cultural background.</li>
                                </ul>
                            </>
                        )}
                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSpring2024}>
                            Spring 2024
                        </h2>
                        {showSpring2024 && (
                            <>
                                {/* W24 Courses */}
                                <h2 className="role-title"> COMS 363 | Professional and Technical Communication</h2>
                                <ul className="circle-list">
                                    <li>An introduction to professional and technical communication in diverse media. Students will learn the rhetorical dimensions of workplace settings as well as the process of planning, composing, and delivering professional and technical communication for various audiences.</li>
                                </ul>
                                <h2 className="role-title"> ENGG 513 |  	The Role and Responsibilities of the Professional Engineer in Society</h2>
                                <ul className="circle-list">
                                    <li>The professional duties and responsibilities of the engineer as they relate to society. Ethics and the engineering profession. Public and worker safety and health. Design for safety. Sustainable development. The engineer and the environment. Environmental stewardship. Essentials of leadership. Gender issues. Employment equity. Fundamentals of Engineering Law. Professional organizations. The Engineering Professions Act. Indigenous perspectives in engineering.</li>
                                </ul>
                            </>
                        )}

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
                                <h2 className="role-title"> MATH 375 | Differential Equations for Engineers and Scientists</h2>
                                <ul className="circle-list">
                                    <li>Definition, existence and uniqueness of solutions; first order and higher order equations and applications; Homogeneous systems; Laplace transform; partial differential equations of mathematical physics.</li>
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
                                    <li>Introduction to foundational data structures such as stacks, queues, lists, heaps, hash tables,trees, and graphs. Sorting and searching algorithms. Complexity analysis. Applications for software development.</li>
                                </ul>
                                <h2 className="role-title"> ENGG 481 | Technology and Society</h2>
                                <ul className="circle-list">
                                    <li>An interpretive course on the interrelationship between technology and society. The first part of the course surveys significant historical developments within disciplinary areas such as energy, materials, production processes, structures, transport, communications, and computation. Sequence within each area: discovery, development, application, impact, future. Social and economic consequences are also considered. Historical contributions of Indigenous Peoples in technology and contemporary considerations of impacts of technology on Indigenous rights. The latter part of the course explores contemporary problems of society and technology.</li>
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

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSummer2022}>
                            Summer 2022
                        </h2>
                        {showSummer2022 && (
                            <>
                                {/* SU23 Courses */}
                                <h2 className="role-title"> MATH 271 | Discrete Mathematics</h2>
                                <ul className="circle-list">
                                    <li>An introduction to proof techniques and abstract mathematical reasoning: sets, relations and functions; mathematical induction; integers, primes, divisibility and modular arithmetic; counting and combinatorics; elements of probability, discrete random variables and Bayes’ theorem.</li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSpring2022}>
                            Spring 2022
                        </h2>
                        {showSpring2022 && (
                            <>
                                {/* Sp23 Courses */}
                                <h2 className="role-title"> ARCH 201 | Architecture and the Future of Cities</h2>
                                <ul className="circle-list">
                                    <li>An introduction to architecture as a creative and technical endeavor that shapes the spaces and places in which we live. An examination of the purposes, intentions, processes, and products of architecture and how they can positively impact climate change, social equity, and quality of life. Students will develop an understanding of the social, cultural, historical, technological, economic, and natural contexts influencing the design of buildings and cities. </li>
                                </ul>
                            </>
                        )}

                        <h2 style={{ marginTop: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleWinter2022}>
                            Winter 2022
                        </h2>
                        {showWinter2022 && (
                            <>
                                {/* W24 Courses */}
                                <h2 className="role-title"> CHEM 209 | General Chemistry for Engineers</h2>
                                <ul className="circle-list">
                                    <li>Basic chemical concepts. Atomic and molecular structure. Chemical bonding. Chemical kinetics and equilibria. Acid-base and solubility equilibria. Oxidation-reduction phenomena and electrochemistry. The chemistry of water. The chemistry of energy sources. Basic environmental issues.</li>
                                </ul>
                                <h2 className="role-title"> ENGG 202 | Engineering Statics</h2>
                                <ul className="circle-list">
                                    <li>Force vectors; equilibrium of a particle in two and three dimensions; force system resultants; equilibrium of a rigid body in two and three dimensions; internal forces in trusses; frames, machines and beams; bending moment and shear force diagrams; friction; centre of gravity; centroids of areas; composite bodies.</li>
                                </ul>
                                <h2 className="role-title"> PHYS 259 | Electricity and Magnetism</h2>
                                <ul className="circle-list">
                                    <li>Electric and magnetic fields related to charges and current through Maxwell’s equations. Energy stored in fields, potential energy, and voltage. Conductors, insulators, and dielectrics. Resistance, capacitance, and inductance with applications to RC/RL circuits.</li>
                                </ul>
                                <h2 className="role-title"> MATH 277 | Multivariable Calculus for Engineers and Scientists </h2>
                                <ul className="circle-list">
                                    <li>An introduction to calculus of several real variables: curves and parametrizations, partial differentiation, the chain rule, implicit functions; integration in two and three variables and applications; optimization and Lagrange multipliers.</li>
                                </ul>
                                <h2 className="role-title"> ENGG 200 | Engineering Design, Innovation and Entrepreneurship</h2>
                                <ul className="circle-list">
                                    <li>Introduction to agile and iterative design; interdisciplinary application of engineering principles, digital technology, design, communications, leadership, entrepreneurship and project management concepts to a team-based design project with a focus on sustainability and social licences.</li>
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
                                <h2 className="role-title"> MATH 275 | Calculus for Engineers and Scientists</h2>
                                <ul className="circle-list">
                                    <li>An extensive treatment of differential and integral calculus in a single variable, with an emphasis on applications. Differentiation: derivative laws, the mean value theorem, optimization, curve sketching and other applications. Integral calculus: the fundamental theorem of calculus, techniques of integration, improper integrals, and areas of planar regions. Infinite series: power series, Taylor’s theorem and Taylor series. </li>
                                </ul>
                                <h2 className="role-title"> MATH 211 | Linear Methods I</h2>
                                <ul className="circle-list">
                                    <li>An introduction to systems of linear equations, vectors in Euclidean space and matrix algebra. Additional topics include linear transformations, determinants, complex numbers, eigenvalues, and applications.</li>
                                </ul>
                                <h2 className="role-title"> ENGG 225 | Fundamentals of Electrical Circuits and Machines</h2>
                                <ul className="circle-list">
                                    <li>Current, voltage and power; Kirchhoff's current and voltage laws; capacitors; electricity and magnetism fundamentals applied to circuit elements and machines; inductors; topics in electrical circuits and systems; instrumentation; circuit design, DC and AC circuit analysis methods; DC and AC machines; first order circuits and transient analysis.</li>
                                </ul>
                                <h2 className="role-title"> ENGG 201 | Behaviour of Liquids, Gases and Solids</h2>
                                <ul className="circle-list">
                                    <li>An introduction to the behaviour of fluids and solids; phase transformations, the phase rule and phase diagrams. Ideal and real gases; equations of state and their engineering applications; simple kinetic theory; transport properties of fluids. Liquid state; vapor pressure; shear behaviour; flow of fluids in pipelines. Solids; crystalline and non-crystalline structure; non-equilibrium solid phases; electrical and thermal conductivity; dislocations; stress and strain; creep; fracture.</li>
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
