/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Barry's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Barry Chin Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Barry Chin",
  logo_name: "BarryChin",
  nickname: "layman_brother",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
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
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#336D9C",
          },
        },
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
      siteName: "Angular",
      iconifyClassname: "simple-icons:angular",
      style: {
        color: "#C30E2E",
      },
    },
    {
      siteName: "Python",
      iconifyClassname: "simple-icons:python",
      style: {
        color: "#336D9C",
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
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
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
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full-Time",
      experiences: [
        {
          title: "Associate Software Developer",
          company: "Freddie Mac",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
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
          logo_path: "delhivery_logo.png",
          duration: "Jun 2018 - Jan 2019",
          location: "Charlottesville, Virginia",
          description:
            "Developed an API that collects data on social media attributes by utilizing Django for creating the server that works in conjunction with the application and integrated Facebook authentication on React Native. Constructed client facing interface through creating the company’s website using a content delivery network with JavaScript in order to highlight their traveling centered social media application.",
          color: "#0879bf",
        },
        {
          title: "Technical Intern",
          company: "Radify Labs",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
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
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
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
};
