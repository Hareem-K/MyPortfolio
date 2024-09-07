import React from 'react'
import './ProjectCards.css';
import ProjectCardItem from './ProjectCardItem';

function ProjectCards() {
  return (
    <div className='project_cards'>
      <h1>Click on a Project to View it's Description and GitHub Repository </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
                <ProjectCardItem
                src="images/PDFFusion.png"
                text="PDF Fusion is a simple PDF maniplulation application that allows users to merge, split, and manipulate PDF files. While still in development, the front-end will be developed using React.js, CSS, and Bootstrap, to ensure a responsive and user-friendly interface. For back-end development, Python and AWS will be utilized to handle file processing and storage. Additionally, Jest will be used for testing, ensuring the application's functionality and reliability."
                label='PDF Fusion'
                path='https://github.com/Hareem-K/PDF_Fusion'
                openInNewTab={true}
                />
                <ProjectCardItem
                src="images/HabitCircle.jpg"
                text="During the Alberta Health Hack in Summer 2024, my team and I developed 'HabitCircle', a responsive habit tracker web application designed to support families of youth undergoing rehabilitation and dealing with depression and mental illness. Our project won 3rd place, and we were awarded $150 and donated $150 to the Alberta Children's Hospital Foundation in recognition of our contributions. The application featured a gamified approach to habit tracking, helping users stay engaged in their recovery journey. We utilized React.js and CSS/HTML for front-end development, and employed Figma for UI/UX design planning."
                label='HabitCircle | Alberta Health Hack Winner'
                path='https://github.com/Hareem-K/HabitCircle_albertahealthhack'
                openInNewTab={true}
                />
            </ul>
          <ul className='cards__items'>
                <ProjectCardItem
                src="images/PlotPonder.png"
                text="Created a book management application called 'PlotPonder' with a team through GitHub. Our web application, utilizing MVC and Microservices architectures, aims to create a user-friendly book recommendation and community platform. Built using React.js, SQL, Java, Firebase (user authentication), and the ChatGPT OpenAI API for the chatbot, users can search, read, and review books. The user bookshelf highlights the books and ratings, allowing users to easily add books to their library from the explore books page. The integration of the chatbot enables users to seek quick recommendations by inputting a book title and receiving a list of suggested books and TV shows. Our application addresses the need for a comprehensive and interactive platform for book enthusiasts to discover, share, and discuss their favorite books via the book clubs. Users can join an existing community or create their own to interact with other users and discuss their selected books."
                label='Book Management Application'
                path='https://github.com/Hareem-K/SENG401FinalProject'
                openInNewTab={true}
                />
                <ProjectCardItem
                src="images/project.png"
                text="This website was developed using React.js and CSS to showcase a compilation of my projects, experiences, and achievements in one place. A rebrand was implemented to improve UI design, interactivity, and the overall user experience. Explore the GitHub repository to gain insights into the development process."
                label='Portfolio Website'
                path='https://github.com/Hareem-K/MyPortfolio'
                openInNewTab={true}
                />
            </ul>
            <ul className='cards__items'>
                <ProjectCardItem
                src="images/airline.jpg"
                text="Collaborated with a team via GitHub to design and implement a dynamic airline booking system using Java GUI and SQL technologies. This comprehensive application streamlines the user experience, enabling efficient registration and sign-in functionalities with all pertinent information stored in an SQL database. Key features include an intuitive flight booking process, empowering users to browse available flights, select preferred seats based on class, and securely process payments with credit card information. The system seamlessly integrates with the SQL database for real-time user data updates and retrievals. Notable functionalities encompass user-friendly flight management, allowing users to view and cancel booked flights with transparent cancellation fees of $20. Additionally, a payment tracking feature enables users to monitor their payment history, including details of booked flights and any incurred cancellation fees. This project serves as a showcase of my proficiency in Java GUI and SQL, demonstrating my ability to deliver a sophisticated, user-centric application for effective airline booking and management."
                label='Airline Booking System'
                path='https://github.com/Hareem-K/Airline-Booking-System'
                openInNewTab={true}
                />
                <ProjectCardItem
                src="images/ObituaryMaker.png"
                text="Developed an innovative obituary maker application, empowering users to create personalized tributes with ease. This user-friendly platform enables the upload of photos, names, and birth/death dates, allowing users to generate heartfelt obituaries for individuals. The application seamlessly integrates with ChatGPT to dynamically generate thoughtful descriptions based on the provided information. Leveraging Amazon Polly's capabilities, the application converts text to speech, providing users with the option to hear the obituary. Cloudinary serves as the reliable storage solution for both the obituary speech (mp3) and uploaded images, ensuring a seamless and secure experience. Utilizing AWS, we implemented efficient table structures to organize and manage obituary information, enhancing the overall functionality and accessibility of the application."
                label='Obituary Maker Application'
                path='https://github.com/Hareem-K/Obituary-Maker'
                openInNewTab={true}
                />

            </ul>
            <ul className='cards__items'>
                <ProjectCardItem
                src="images/fox.jpg"
                text="Collaborated with a dynamic team via GitHub to develop an intuitive daily task scheduling application for volunteers. The system generates schedules based on specific animal tasks sourced from an SQL database, providing an efficient and organized workflow. This user-friendly application empowers users to customize schedules, addressing conflicts seamlessly, confirming backup volunteers when needed, and saving modified schedules for future use. The interactive graphical user interface (GUI) enhances user experience, displaying and facilitating the execution of the schedule with ease. This project showcases not only effective collaboration through version control on GitHub but also a robust application that simplifies and optimizes volunteer task management within an animal care context."
                label='Wildlife Rescue Centre Schedule Builder'
                path='https://github.com/Hareem-K/Wildlife-Rescue-Center-Schedule-Builder'
                openInNewTab={true}
                />
                <ProjectCardItem
                src="images/notes.png"
                text="Participated in the development of a comprehensive note-taking application as part of the ENSF 381 course, focused on Full Stack Web Development. This project involved the creation of a robust full-stack note-taking app, providing users with the capability to sign in through Google for seamless note creation, editing, and deletion. Leveraging Google Cloud for authentication, Netlify was employed for efficient site deployment. The implementation of Terraform facilitated the creation of essential resources on AWS, complemented by Python-written lambda functions. This hands-on project not only honed skills in full-stack development but also showcased the integration of various technologies to deliver a secure and user-friendly note-taking experience."
                label='Notes Application'
                path='https://github.com/Hareem-K/Notes-App-Lotion-Plus'
                openInNewTab={true}
                />
            </ul>
            <ul className='cards__items'>
                <ProjectCardItem
                src="images/wordle.png"
                text="Revitalized the classic game Wordle through the implementation of Vanilla JavaScript, HTML, and CSS. This engaging application seamlessly connects to an endpoint accessed by an API, tapping into an extensive words dictionary to provide users with challenging yet enjoyable word-guessing experiences along with corresponding hints. Going beyond the traditional gameplay, the site offers enhanced features such as dynamic light mode and dark mode options, catering to user preferences for a personalized visual experience. Additionally, a sliding sidebar has been incorporated, serving as an interactive hub that showcases comprehensive instructions on how to navigate and fully enjoy the game. This project not only breathes new life into a beloved game but also showcases a thoughtful integration of modern design elements to enhance user engagement and enjoyment."
                label='Wordle'
                path='https://github.com/Hareem-K/Wordle-Application'
                openInNewTab={true}
                />
                <ProjectCardItem
                src="images/artmuseum.jpg"
                text="Collaborated within a team environment via GitHub to craft an innovative Art Museum application, seamlessly interfacing with the museum database for streamlined database maintenance, efficient data entry of new artifacts, and user-friendly artifact browsing. This dynamic application enhances user security by requiring login credentials, which then identify the user type and grant corresponding access levels and privileges. The implementation of SQL queries further elevates the application's functionality, allowing for seamless data retrievals, table displays, and update/delete operations. This project not only demonstrates effective teamwork and version control but also showcases the integration of robust database management features, providing a comprehensive solution for art enthusiasts and museum administrators alike."
                label='Terminal Based Art Museum Application'
                path='https://github.com/Hareem-K/ArtMuseumApplication'
                openInNewTab={true}
                />
            </ul>
            <ul className='cards__items'>
                <ProjectCardItem
                src="images/datastructures.jpg"
                text="This application uses Java to create a library for Linear Data Structures and Tree Structures, using two Node Classes. DNode for Doubly Linked List and TNode for Binary Tree Data Structures."
                label='Library for Common Data Structures'
                path='https://github.com/Hareem-K/LibraryofCommonDataStructures'
                openInNewTab={true}
                />
                <ProjectCardItem
                src="images/threatened.png"
                text="Developed the final project for ENDG 233, Programming with Data, resulting in a sophisticated terminal-based python application designed to process and visualize threatened species data. Leveraging CSV files and user input, this application seamlessly prompts users to input a country name and make subsequent choices regarding whether to display corresponding average, density, or total threatened species data from the selected country. The integration of Matplotlib enriches the user experience by generating informative plots showcasing the relevant data. This project not only highlights proficiency in programming with data but also demonstrates the ability to create a user-friendly and data-driven application catering to specific user queries within a terminal environment."
                label='Threatened Species Info Application'
                path='https://github.com/Hareem-K/Threatened-Species-Info-Application'
                openInNewTab={true}
                />
            </ul>
        </div>
      </div>


    </div>
  )
}

export default ProjectCards
