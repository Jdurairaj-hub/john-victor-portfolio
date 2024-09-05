/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "John Victor",
  title: "Hi all, I'm John",
  subTitle: emoji(
    "A passionate Software Engineer and DevOps Enthusiast 🚀 with experience in building robust web and mobile applications. Skilled in Java, Spring Boot, Python, JavaScript, ReactJS, and Node.js. Proficient in CI/CD pipelines, infrastructure automation, and cloud services (AWS, GCP). Dedicated to exploring tech stacks for efficient, scalable solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1A382GssxSGpwbHlfRrPwOWYFqhvBtY0b/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jdurairaj-hub",
  linkedin: "https://www.linkedin.com/in/john-victor-stephen-durairaj/",
  gmail: "john.victor@dal.ca",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER AND DEVOPS ENTHUSIAST EXPLORING EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build and maintain robust backend systems using Spring Boot, Django, Node.js"
    ),
    emoji("⚡ Implement CI/CD pipelines for efficient development and deployment"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / GCP"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dalhousie University",
      logo: require("./assets/images/Dalhousie.png"),
      subHeader: "Bachelor of Applied Computer Science, Minor in Business",
      duration: "January 2022 - April 2026",
      desc: "Participated in various research projects and coursework relevant to software engineering and DevOps.",
      descBullets: [
        "Data Structures & Algorithms",
        "Software Development",
        "Database Systems",
        "Software Engineering",
        "Network Computing"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Automation Engineering Student",
      company: "Enginuity Inc.",
      companylogo: require("./assets/images/Enginuity.png"),
      date: "Jan 2024 – Apr 2024",
      desc: "Contributed to automation and robotics projects, enhancing machine communications, and optimizing automation systems.",
      descBullets: [
        "Developed a C++ algorithm reducing error rates by 90% in linear actuator software",
        "Streamlined IoT data management using Python and Node-RED",
        "Deployed infrastructure as code (IaC) with Ansible",
        "Integrated real-time data capture APIs using OpenCV",
        "Programmed and troubleshot PLCs for improved automation reliability",
        "Operated MQTT, Modbus TCP/IP, and EtherNet/IP for machine communications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Showcasing a selection of my personal projects",
  projects: [
    {
      image: require("./assets/images/scoremyresume.png"),
      projectName: "RateMyResume",
      projectDesc: "Increased resume quality for job seekers by 40% as measured by user feedback, by developing a Next.js web application that integrates Mistral & OpenAI APIs to provide real-time, AI-powered resume analysis and improvement suggestions.",
      toolsUsed: "Next.js, TypeScript, Mistral API, OpenAI API, Node.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rate-my-resume-1.vercel.app/"
        },
        {
          name: "Code",
          url: "https://github.com/Jdurairaj-hub/RateMyResume/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/po_project.png"),
      projectName: "Purchase Order Management System",
      projectDesc: "Led the development of a comprehensive order management system that achieved a 40% increase in processing speed, a 50% reduction in response time, and a 25% boost in user satisfaction. Deployed on AWS EC2 with dynamic content rendering using React.js and efficient backend processing with Node.js and MySQL.",
      toolsUsed: "AWS (EC2 & Route53), React.js, Node.js, RDBMS, RESTful API",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/Jdurairaj-hub/Purchase-Order" // Replace with your GitHub link
        }
      ]
    },
    {
      image: require("./assets/images/bci_lvl1.png"),
      projectName: "Brain Computer Interface Game",
      projectDesc: "Developed 'Mental Marauders,' a brain-computer interface (BCI) game with NeuroCognitive Imaging Lab at Dalhousie University, enabling control through EEG and fNIRS brain activity. Implemented core functionalities using Python and PyGame, including game levels, real-time data communication with NeuroPype, and Firebase integration for data logging. Ensured millisecond-level timing for EEG synchronization.",
      toolsUsed: "Python, PyGame, Pytest, Firebase, NeuroPype, EEG, fNIRS",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://po.purchaseorder.xyz/" // Replace with your live link
      //   },
      //   {
      //     name: "Code",
      //     url: "https://github.com/Jdurairaj-hub/Purchase-Order" // Replace with your GitHub link
      //   }
      // ]
    },
    {
      image: require("./assets/images/tradewise.png"),
      projectName: "Trade Wise",
      projectDesc: "Accumulated 2,000+ users by engineering an AI-driven financial assistant that provides real-time market insights, interactive charts, and financial data. Integrated advanced features like TrendSpotter, StockX-Ray, and CandleForge, delivering lightning-fast, precise analysis across global markets.",
      toolsUsed: "NextJS, TailwindCSS, TypeScript, Llama3.1-70B-Groq API, TradingView API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://trade-wise-theta.vercel.app/"
        },
        {
          name: "Code",
          url: "https://github.com/Jdurairaj-hub/TradeWise" // Replace with your GitHub link
        }
      ]
    },
    {
      image: require("./assets/images/dashboard.png"),
      projectName: "Sales Insights",
      projectDesc: "Developed a Power BI dashboard that improved sales efficiency by 20% and reduced reporting time by 25%. Analyzed over 20,000 transactions using SQL, improving data accuracy by 30%. Published the dashboard to the cloud, enhancing data access and collaboration.",
      toolsUsed: "SQL, Power BI, DAX, MySQL",
      footerLink: [
        
        {
          name: "Code",
          url: "https://github.com/Jdurairaj-hub/sales-insights-data-analysis" // Replace with your GitHub link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "john.victor@dal.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
