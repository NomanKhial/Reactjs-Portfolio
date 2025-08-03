import logo from "./logo.png";
import theme from "./theme.png";
import direction from "./directionIcon.png";
import hi from "./hi👋🏻.png";
import bg from "./bg.png";
import noman from "./noman.png";
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
import project1 from "./project1.png"
import project2 from "./project2.png"
import project3 from "./project3.png"
import project4 from "./project4.png"
import vector1 from "./Vector-1.png"
import mail_icon from "./mail_icon.png"
import resume from "./Noman Resume.pdf"
const assets = {
  resume,
  mail_icon,
  logo,
  theme,
  direction,
  hi,
  bg,
  noman,
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
    title: 'Front End Project',
    catagory: 'web design',
    iconImage: vector1
  },
  {
    image: project2,
    title: 'Front End Project',
    catagory: 'web design',
    iconImage: vector1
  },
  {
    image: project3,
    title: 'Front End Project',
    catagory: 'web design',
    iconImage: vector1
  },
  {
    image: project4,
    title: 'Front End Project',
    catagory: 'web design',
    iconImage: vector1
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
