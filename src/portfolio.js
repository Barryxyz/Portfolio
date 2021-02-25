/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Barry's Portfolio",
  description:
    "Full Stack development enthusiast that aims to innovate and bring in fresh and dynamic ideas in bridging technology with everyday life.",
  og: {
    title: "Barry Chin Portfolio",
    type: "website",
    url: "https://barryxyz.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Barry Chin",
  logo_name: "BarryChin",
  nickname: "layman_brother",
  subTitle:
    "Full Stack development enthusiast that aims to innovate and bring in fresh and dynamic ideas in bridging technology with everyday life.",
  resumeLink:
    "https://drive.google.com/file/d/1sffmi_Vwma11ceed7GZGlAKCNzVM3wpH/view?usp=sharing",
  portfolio_repository: "https://github.com/barryxyz",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/barryxyz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/barry-chin/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "- Create responsive client facing interfaces using Angular",
        "- Develop and maintain microservices with Java and SpringBoot",
        "- Continuously learn and apply in order to grow as a Software Engineer",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#5283A2",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#C30E2E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#FFCF3C",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DBFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#27AB78",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#459C45",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05033",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Java",
      iconifyClassname: "simple-icons:java",
      style: {
        color: "#5283A2",
      },
    },
    {
      siteName: "Python",
      iconifyClassname: "simple-icons:python",
      style: {
        color: "#FFCF3C",
      },
    },
    {
      siteName: "Angular",
      iconifyClassname: "simple-icons:angular",
      style: {
        color: "#C30E2E",
      },
    },
    {
      siteName: "AWS",
      iconifyClassname: "simple-icons:amazonaws",
      style: {
        color: "#FF9A00",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Virginia",
      subtitle: "B.A. in Computer Science & Economics",
      logo_path: "uva.png",
      alt_name: "UVA",
      duration: "Aug 2015 - May 2019",
      descriptions: [
        "- Studied software engineering fundamentals like Data Structures and Algorithmns, Computer Architecture, Software Methodology, and Databases.",
        "- Dived deep into sub-fields such as Cloud Computing, Mobile Applications, and Human Computer Interactions.",
        "- Developed a foundation in Macroeconomics, Microeconomics, Competitive Market Advantage Theories, and in analyzing and creating regressions from Econometrics.",
        "- Received the University Achievement Award, which gives a Full-Ride to the recipients who demonstrate outstanding leadership and character while overcoming personal hardships.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.youracclaim.com/badges/d86720af-7c18-4a67-b999-cac89c69f2e9/linked_in_profile",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Full-time, Internships, and Volunteering",
  description:
    "I've done work in diverse industries using different tech stacks. My experience prior to graduating included mostly front-end development and mobile development, but later extended to back-end as well. As I go forward with my career, I discovered I prefer a more back-end role. I believe Full Stack is ideal for me.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full-Time",
      experiences: [
        {
          title: "Associate Software Developer",
          company: "Freddie Mac",
          company_url: "https://legatohealthtech.com/",
          logo_path: "freddiemac.png",
          duration: "Jun 2019 - PRESENT",
          location: "McLean, Virginia",
          description:
            "Utilize SpringBoot to develop and maintain microservice applications for Freddie Mac’s external user access applications and perform test driven techniques to increase and analyze the coverage of the applications. Construct client facing interfaces in Angular for external user access applications within Multifamily.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Software Eingineer Intern",
          company: "Roam",
          company_url: "https://www.delhivery.com/",
          logo_path: "roam.png",
          duration: "Jun 2018 - Jan 2019",
          location: "Charlottesville, Virginia",
          description:
            "Developed an API that collects data on social media attributes by utilizing Django for creating the server that works in conjunction with the application and integrated Facebook authentication on React Native. Constructed client facing interface through creating the company’s website using a content delivery network with JavaScript in order to highlight their traveling centered social media application.",
          color: "#0879bf",
        },
        {
          title: "Technical Intern",
          company: "Radify Labs",
          logo_path: "radify_labs.png",
          duration: "May 2018 - Aug 2018",
          location: "Charlottesville, Virginia",
          description:
            "Conducted research on tech marketing strategies in focused fields such as search engine optimization, social media branding and data science analytics. Collaborated in creating a start-up hiking company as well as its Facebook page, logo, website and developed a chatbot on Facebook Messenger using Python and Flask.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "WebMaster",
          company: "Organization of Young Filipino Americans",
          logo_path: "oyfa.jpg",
          duration: "Apr 2018 - Apr 2019",
          location: "Charlottesville, VA",
          description:
            "Improved the user interface and developed a wireframe for the merchandise page in order to promote sales and club membership as well as incorporated a blog API to increase site traffic. Integrated Google Form API to enhance feedback and collaboration between the organization’s committees.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of a vast variety of latest technology tools. My favorite ones are the ones that have the most potential in faciliating everyday convenience.",
  avatar_image_path: "projects_image.svg",
};
const projects = {
  projects: [
    {
      url: "google.com",
      name: "r/wallstreetbets Trend Finder",
      description:
        "Web app that displays the frequency of stock ticker symbols within the subreddit",
      createdAt: "Jan 2021 - Present",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "React", iconifyClass: "logos-react" },
      ],
    },
    {
      url: "https://github.com/Barryxyz/Text-Subscription-App",
      name: "Text-Subscription-App",
      description:
        "Web app that uses the Twilio API to register subscribers and message those subscribers",
      createdAt: "Oct - Nov 2021",
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Angular", iconifyClass: "logos-angular" },
      ],
    },
    {
      url: "https://github.com/Barryxyz/GarageSaleApp",
      name: "Garage Sale App",
      description:
        "iOS app that allows users to post items onto a map and allows users to find those items",
      createdAt: "Aug - Dec 2018",
      languages: [{ name: "Swift", iconifyClass: "logos-swift" }],
    },
    {
      url: "google.com",
      name: "WatchList App",
      description:
        "React Native app that manages a checkable list of movies/shows and functions as a browser using the OMDI API",
      createdAt: "July - Sept 2018",
      languages: [{ name: "React Native", iconifyClass: "logos-react" }],
    },
    {
      url: "https://github.com/Barryxyz/DemocracyInc",
      name: "Virginia Polling Online Ballot",
      description:
        "Mock online ballot web app that meets the Virginia's State standard for voting",
      createdAt: "Jan - May 2018",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Django", iconifyClass: "logos-django" },
      ],
    },
    {
      url: "https://github.com/Barryxyz/Automobile-Market-Analyzer",
      name: "Automobile Market Analyzer",
      description:
        "Web App that displays mock data about sales based on vehicle factors such as make, year, model to maximize profit for auto-makers",
      createdAt: "April - May 2018",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Django", iconifyClass: "logos-django" },
      ],
    },
    {
      url: "google.com",
      name: "Endless Wave Shooter Game",
      description:
        "3rd person shooter python game in which the player(s) shoot down endless waves of llamas",
      createdAt: "Feb - May 2016",
      languages: [{ name: "Python", iconifyClass: "logos-python" }],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description: "",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
