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
  username: "Harsh Gupta",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "A passionate Frontend Developer 🚀 having an experience of building Web and Mobile friendly websites with JavaScript / Reactjs / Nextjs / WordPress and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gAQJiwp412xBHa39DB5QPua-Pt5WFQc9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gharshg29",
  linkedin: "https://www.linkedin.com/in/gharshg29/",
  gmail: "gharshgupta29@gmail.com",
  instagram: "https://www.instagram.com/gharsh.tech/",
  facebook: "https://www.facebook.com/gharshg29",
  // medium: "https://medium.com/@HarshGupta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/Harsh-Gupta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
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
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ABES Engineering College",
      logo: require("./assets/images/abeslogo.jpeg"),
      subHeader: "Bachelor's in Computer Science",
      duration: "August 2019 - June 2023",
      desc: "Published a patent for Reducing & Stopping Oxygen Wastage in Hospital",
      descBullets: [
        "Winner of Oxygen Hackathon by AKTU.",
        "Finalist of Toycathon 2021 by Government Of India",
        "Won Researcher Award - ABESEC"
      ]
    },
    {
      schoolName: "Delhi Public School",
      logo: require("./assets/images/dpslogo.jpeg"),
      subHeader: "Physics, Chemistry & Maths",
      duration: "April 2017 - April 2019",
      desc: "",
      descBullets: ["Elected as a Displine Prefect in the Year 2018-19",
    "Elected as a Vice House Captain in the Year 2017-18"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Tailwind CSS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "BootStrap",
      progressPercentage: "85%"
    },
    {
      Stack: "React Js",
      progressPercentage: "75%"
    },
    {
      Stack: "Next Js",
      progressPercentage: "70%"
    },
    {
      Stack: "WordPress",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Web Developer",
      company: "Tiftin",
      companylogo: require("./assets/images/tiftin.png"),
      date: "Oct 2021 – Dec 2021",
      // desc: "Worked at this startup as one of the founding frontend developer.",
      descBullets: [
        "Made the complete tiffin delivery website’s frontend using Nextjs, ReactJs, Tailwind CSS and Flowbite UI.",
        "Helped the team mates and mentored the interns"
      ]
    },
    {
      role: "Digital Marketing Head",
      company: "Way2University",
      companylogo: require("./assets/images/way2university-logo.png"),
      date: "Apr 2022 – Jun 2022",
      descBullets: [
        "Leads Generation with google and meta Ads.",
        "Creative content generation for SEO Optimization and Ads."
      ]    },
    {
      role: "Web Developer",
      company: "EDC India",
      companylogo: require("./assets/images/EDC_Logo.png"),
      date: "Jul 2022 – Dec 2022",
      descBullets: [
        "Worked on MERN Tech Stack and Completed the various website development projects.",
        "Developed WordPress Websites for different clients."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Winner Of Oxygen Hackathon",
      subtitle:
        "Winner of Oxygen Hackathon, organized by AKTU, on which patent is also filed.",
      image: require("./assets/images/aktu-logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Validate",
          url: "https://drive.google.com/file/d/1jZNXGvkdv9elcHRGuDr1W9xJZhS-EVZ2/view"
        },

      ]
    },
    {
      title: "Finalist of Toycathon 2021",
      subtitle:
        "One of the Grand Finalist of the Toycathon (Hackathon of Toys) organized by Govt. of India",
      image: require("./assets/images/toycathon.jpeg"),
      imageAlt: "Toycathon 2021 Logo",
      footerLink: [
        {
          name: "Toycathon 2021",
          url: ""
        }
      ]
    },

    {
      title: "Researcher Award",
      subtitle: "Honored by the Director of ABES Engineering College by Researcher Award.",
      image: require("./assets/images/abeslogo.jpeg"),
      imageAlt: "ABES Logo",
      footerLink: [
        {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      url: "https://medium.com/@HarshGupta/why-react-is-the-best-5a97563f423e",
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
      slides_url: "https://bit.ly/HarshGupta-slides",
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Harsh-Gupta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9685898058",
  email_address: "gharshgupta29@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
