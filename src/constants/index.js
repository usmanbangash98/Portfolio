import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Django, SQlite and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const PROJECTS = [
  {
    title: "VigilantEye",
    image: project1,
    description:
      "A facial Recognition based web application to store and detect faces of thieves through pictures or live webcam. ",
    technologies: [
      "Bootstrap",
      "CSS",
      "JavaScript",
      "JQuery",
      "SQlite",
      "Django",
    ],
  },
  {
    title: "PEXEL",
    image: project2,
    description:
      "An application where users can search for pictures and search related pictures will be fetched live from pexels API.",
    technologies: ["React", "TailwindCss", "Pexels API"],
  },
  {
    title: "iManage Website",
    image: project3,
    description:
      "A website where one can store url, username and password in the localstorage.",
    technologies: ["TailwindCss", "bg.ibelick", "React", "Vite"],
  },
  {
    title: "MY-RECIPE",
    image: project4,
    description:
      "A platform for searching the recipe for your favourite dish fetched live from edamam API.",
    technologies: ["React", "TailwindCss", "Vite", "Edamam API"],
  },
];

export const CONTACT = {
  phoneNo: "+92 3001015655 ",
  email: "usmanbangash21@gmail.com",
};
