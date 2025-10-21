import logo from "./logo.png";
import nomankhial from "./nomankhial.jpg";
import theme from "./theme.png";
import direction from "./directionIcon.png";
import hi from "./hi👋🏻.png";
import bg from "./bg.png";
import profile from "./profile_img.png";
import arrow from "./arrow.png";
import download from "./download.png";
import aboutpicture from "./portfolio-img.png";
import codeIcon from "./codeicon.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import edduction from "./education.png";
import pprojects from "./projects.png";
import mongodb from "./mongodb.png";
import figma from "./figma.png";
import git from "./git.png";
import globe from "./globe.png";
import ux from "./uxdesign.png";
import android from "./android.png";
import graphics from "./graphics.png";
import project1 from "./project1.jpg"
import project2 from "./project2.jpg"
import project3 from "./project3.jpg"
import project4 from "./project4.jpg"
import vector1 from "./Vector-1.png"
import mail_icon from "./mail_icon.png"
import resume from "./Noman Resume.pdf"
import darkLogo from "./darktheme.png"


const assets = {
  nomankhial,
  darkLogo,
  resume,
  mail_icon,
  logo,
  theme,
  direction,
  hi,
  bg,
  profile,
  arrow,
  download,
  aboutpicture,
  codeIcon,
  vscode,
  firebase,
  edduction,
  pprojects,
  mongodb,
  figma,
  git,
};

const myProjects = [
  {
    image: project1,
    title: 'Online Food Ordering WebApp',
    catagory: 'ReactJs',
    iconImage: vector1,
    projectUrl: 'https://react-food-ordering-online-app.netlify.app/'
  },
  {
    image: project2,
    title: 'Doctor Appointment App',
    catagory: 'ReactJs',
    iconImage: vector1,
    projectUrl: 'https://docotorappointment.netlify.app/'
  },
  {
    image: project3,
    title: 'English Dictionary',
    catagory: 'ReactJs',
    iconImage: vector1,
    projectUrl: 'https://free-english-dictionary.netlify.app/'
  },
  {
    image: project4,
    title: 'Coming Soon',
    catagory: 'ReactJs',
    iconImage: vector1,
    projectUrl: ''
  }
]


// services
const services = [
  {
    icon: globe,
    heading: "Web design",
    description: "Web development is the process of building, programming...",
    readMore: "Read more",
  },
  {
    icon: android,
    heading: "Mobile app",
    description: "Web development is the process of building, programming...",
    readMore: "Read more",
  },
  {
    icon: ux,
    heading: "UI/ UX design",
    description: "Web development is the process of building, programming...",
    readMore: "Read more",
  },
  {
    icon: graphics,
    heading: "Graphics design",
    description: "Web development is the process of building, programming...",
    readMore: "Read more",
  },
];

export { assets, services, myProjects };
