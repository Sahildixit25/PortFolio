import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2023 - Present",
    role: "Executive Developer",
    company: "EMPClaims",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB" , "Redux","Express","Typescript","Bootstrap","Git","Authentication"],
  },
  {
    year: "Sep 2022 - Dec 2022",
    role: "Intern",
    company: "EMPClaims",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "mySQL" , "React"],
  },
];

export const PROJECTS = [
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "Node.js" , "Express" , "mongoDB", "Redux","Formik"],
  },
  {
    title: "Bot Management App",
    image: project4,
    description:
      "Designed and developed a tool to create, schedule, and manage bot instances that execute Python scripts. Implemented real-time data monitoring, allowing users to track live logs and ensure seamless execution of scheduled tasks (daily, weekly, monthly, or yearly).",
    technologies: ["React", "Node.js" , "Express" , "SQL", "ORM", "Redux","Formik"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TaILWIND"],
  },
];

export const CONTACT = {
  address: "Vadodara , Gujarat , 390024",
  phoneNo: "+91 9106404866",
  email: "sahildixit2508@gmail.com",
};
