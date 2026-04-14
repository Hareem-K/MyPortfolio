const projects = [
  {
    slug: 'lalalu-skin-laser',
    label: 'Lalalu Skin & Laser',
    summary: 'Full-stack spa booking site built with React, TypeScript, and Tailwind.',
    description:
      'A full-stack spa and laser treatment website built with React, TypeScript, and Tailwind CSS. It includes a fully functional booking system for clients to view appointments and for staff to manage bookings, alongside a polished service catalog, contact messaging page, and a responsive business-focused UI.',
    githubUrl: 'https://github.com/Hareem-K/LalaluLaserSkin',
    siteUrl: 'https://lalaluskinlaser.com/',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    images: ['/images/lalalu.png', '/images/lalalu-1.png', '/images/lalalu-2.png', '/images/lalalu-3.png'],
  },
  {
    slug: 'callmentor-online-community',
    label: 'Callmentor Online Community',
    summary: 'Community platform connecting students, mentors, and employers in one hub.',
    description:
      'Callmentor Online Community is a community-to-community platform that connects students, mentors, and employers in a single online hub. It features discussion forums, job postings, mentor integration, and administrator review tools to keep the environment safe and useful for everyone.',
    githubUrl: '',
    siteUrl: '',
    tech: ['React', 'Bootstrap', 'Nest.js', 'PostgreSQL'],
    images: ['/images/callmentor-1.png', '/images/callmentor-2.png', '/images/callmentor-3.png'],
  },
  {
    slug: 'pdf-fusion',
    label: 'PDF Fusion',
    summary: 'A lightweight PDF tool for merge, split, and annotation workflows.',
    description:
      'PDF Fusion is a PDF manipulation application that allows users to merge, split, and annotate files. The front end uses React, CSS, and Bootstrap for a responsive interface, while Python and AWS handle processing and storage for reliable PDF workflows.',
    githubUrl: 'https://github.com/Hareem-K/PDF_Fusion',
    siteUrl: '',
    tech: ['React', 'Python', 'AWS', 'Bootstrap'],
    src: '/images/PDFFusion.png',
  },
  {
    slug: 'habitcircle',
    label: 'HabitCircle',
    summary: 'Habit tracker built for a health hack with gamified recovery support.',
    description:
      'HabitCircle was developed during the Alberta Health Hack as a responsive habit tracker supporting families of youth undergoing rehabilitation and mental health recovery. The app uses a gamified experience to keep users engaged, and it earned 3rd place in the hackathon with prize money donated to Alberta Children’s Hospital.',
    githubUrl: 'https://github.com/Hareem-K/HabitCircle_albertahealthhack',
    siteUrl: 'https://devpost.com/software/habitcycle',
    tech: ['React', 'CSS', 'Figma'],
    src: '/images/HabitCircle.jpg',
  },
  {
    slug: 'plotponder',
    label: 'PlotPonder',
    summary: 'Book management app with AI-powered recommendations and community features.',
    description:
      'PlotPonder is a book management application built with React, SQL, Java, Firebase authentication, and the OpenAI API for chatbot recommendations. It offers a user bookshelf, reviews, search, and community spaces for users to share reading lists and explore books.',
    githubUrl: 'https://github.com/Hareem-K/SENG401FinalProject',
    siteUrl: '',
    tech: ['React', 'Java', 'SQL', 'Firebase', 'OpenAI'],
    images: ['/images/PlotPonder.png', '/images/plotponder-1.png', '/images/plotponder-2.png', '/images/plotponder-3.png', '/images/plotponder-4.png', '/images/plotponder-5.png'],
  },
  {
    slug: 'portfolio-website',
    label: 'Portfolio Website',
    summary: 'Personal portfolio built with React to showcase projects and experience.',
    description:
      'This portfolio website was developed using React and CSS to showcase projects, experience, and achievements in one place. The site includes a refreshed UI and interactive navigation designed for professional presentation.',
    githubUrl: 'https://github.com/Hareem-K/MyPortfolio',
    siteUrl: 'https://hareemk.com/',
    tech: ['React', 'CSS'],
    src: '/images/project.png',
  },
  {
    slug: 'airline-booking-system',
    label: 'Airline Booking System',
    summary: 'Java GUI airline booking app with seat selection and SQL-backed user flows.',
    description:
      'A team-built airline booking system implemented in Java GUI with SQL database support. Users can register, sign in, book flights, select seats, process payments, and view or cancel bookings with cancellation fees handled transparently.',
    githubUrl: 'https://github.com/Hareem-K/Airline-Booking-System',
    siteUrl: '',
    tech: ['Java', 'SQL', 'GUI'],
    src: '/images/airline.jpg',
  },
  {
    slug: 'obituary-maker',
    label: 'Obituary Maker Application',
    summary: 'Tribute builder app with ChatGPT and Amazon Polly for personalized memorials.',
    description:
      'The Obituary Maker application helps users create personalized obituary tributes by uploading photos, names, and dates. It uses ChatGPT to generate meaningful descriptions and Amazon Polly to create audio versions, while Cloudinary provides secure storage for images and audio files.',
    githubUrl: 'https://github.com/Hareem-K/Obituary-Maker',
    siteUrl: '',
    tech: ['ChatGPT API', 'AWS', 'Cloudinary'],
    src: '/images/ObituaryMaker.png',
  },
  {
    slug: 'wildlife-rescue-schedule-builder',
    label: 'Wildlife Rescue Schedule Builder',
    summary: 'Volunteer schedule app for rescue centres using SQL-driven task planning.',
    description:
      'This volunteer scheduling app generates rescue centre task schedules from an SQL database. It supports task customization, backup volunteer confirmation, and saved schedule management using a clean graphical interface.',
    githubUrl: 'https://github.com/Hareem-K/Wildlife-Rescue-Center-Schedule-Builder',
    siteUrl: '',
    tech: ['Java', 'SQL', 'GUI'],
    src: '/images/fox.jpg',
  },
  {
    slug: 'notes-application',
    label: 'Notes Application',
    summary: 'Full-stack note-taking app with Google auth and AWS-backed deployment.',
    description:
      'This course project delivers a secure note-taking application with Google authentication, Google Cloud sign-in, and Netlify deployment. It also uses Terraform-managed AWS resources and Python lambda functions for backend operations.',
    githubUrl: 'https://github.com/Hareem-K/Notes-App-Lotion-Plus',
    siteUrl: 'https://main--zesty-marshmallow-7f256c.netlify.app/',
    tech: ['React', 'Google Auth', 'AWS', 'Terraform'],
    src: '/images/notes.png',
  },
  {
    slug: 'wordle',
    label: 'Wordle',
    summary: 'Modern Wordle remake with dark mode and interactive sidebar instructions.',
    description:
      'A refreshed Wordle-style game built with Vanilla JavaScript, HTML, and CSS. The app includes dark/light themes, an API-backed word dictionary, and a sliding sidebar with clear gameplay instructions.',
    githubUrl: 'https://github.com/Hareem-K/Wordle-Application',
    siteUrl: 'https://wordleapplication.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    images: ['/images/wordle.png', '/images/wordle-1.png'],
  },
  {
    slug: 'art-museum-application',
    label: 'Art Museum Application',
    summary: 'Museum app with login-based access and SQL artifact management.',
    description:
      'This museum application provides secure login with role-based access, and allows administrators to maintain artifact data in a museum database. It supports browsing, data entry, and SQL-driven display of museum collections.',
    githubUrl: 'https://github.com/Hareem-K/ArtMuseumApplication',
    siteUrl: '',
    tech: ['SQL', 'Java', 'Database'],
    src: '/images/artmuseum.jpg',
  },
  {
    slug: 'data-structures-library',
    label: 'Library for Common Data Structures',
    summary: 'Java library demonstrating linked lists and binary tree data structures.',
    description:
      'A Java library created to demonstrate linear data structures and tree structures using custom node implementations. It includes a doubly linked list and binary tree classes and outlines how these structures can be used in applications.',
    githubUrl: 'https://github.com/Hareem-K/LibraryofCommonDataStructures',
    siteUrl: '',
    tech: ['Java', 'Data Structures'],
    src: '/images/datastructures.jpg',
  },
  {
    slug: 'threatened-species-info',
    label: 'Threatened Species Info Application',
    summary: 'Python data app that visualizes threatened species data via CSV and plots.',
    description:
      'A terminal-based Python application designed to process threatened species data from CSV files. Users can select a country and generate plots of average, density, or total species counts using Matplotlib.',
    githubUrl: 'https://github.com/Hareem-K/Threatened-Species-Info-Application',
    siteUrl: '',
    tech: ['Python', 'Matplotlib', 'CSV'],
    src: '/images/threatened.png',
  },
];

export default projects;
