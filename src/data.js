import { nanoid } from 'nanoid';
import html from "../public/assets/html-124-svgrepo-com.svg"
import css from "../public/assets/css3-svgrepo-com.svg";
import js from "../public/assets/js-svgrepo-com.svg";
import ts from "../public/assets/logo-ts-svgrepo-com.svg";
import bootstrap from "../public/assets/bootstrap-svgrepo-com.svg";
import nextjs from "../public/assets/nextjs-svgrepo-com (1).svg";
import reactjs from "../public/assets/reactjs-svgrepo-com.svg";
import gql from "../public/assets/graphql-svgrepo-com.svg";
import mongodb from "../public/assets/mongodb-svgrepo-com.svg";
import rust from "../public/assets/rust-svgrepo-com.svg";
import substrate from "../public/assets/paritysubstrate-svgrepo-com.svg";
import example from "../public/assets/example-img.avif";

export const links = [
  { id: nanoid(), href: '#home', text: 'Home' },
  { id: nanoid(), href: '#about', text: 'About' },
  { id: nanoid(), href: '#skills', text: 'Skills' },
  { id: nanoid(), href: '#projects', text: 'Projects' },
  { id: nanoid(), href: '#blogs', text: 'Blogs' },
  { id: nanoid(), href: '#contact', text: 'Contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: html,
    experience:100
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: css,
    experience:100
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: js,
    experience:100
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: ts,
    experience:50
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    icon: bootstrap,
    experience:100
  },
  {
    id: nanoid(),
    title: "NextJs",
    icon: nextjs,
    experience:75
  },
  {
    id: nanoid(),
    title: "ReactJs",
    icon: reactjs,
    experience:95
  },
  {
    id: nanoid(),
    title: "GraphQL",
    icon: gql,
    experience:75
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: mongodb,
    experience:75
  },
  {
    id: nanoid(),
    title: "Rust",
    icon: rust,
    experience:50
  },
  {
    id: nanoid(),
    title: "Substrate",
    icon: substrate,
    experience:40
  },
  
];

export const projects = [
  {
    id: nanoid(),
    title: "Project 1",
    description: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    gitHubUrl: "",
    webPageUrl: "",
    img: example
  },
  {
    id: nanoid(),
    title: "Project 2",
    description: "lorem ipsum dolor sit amet,em ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    gitHubUrl: "",
    webPageUrl: "",
    img: example
  },
  {
    id: nanoid(),
    title: "Project 1",
    description: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ip dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    gitHubUrl: "",
    webPageUrl: "",
    img: example
  },
]

export const blogs = [
  {
    id: nanoid(),
    title: "Blog 1",
    author:"Valentina G",
    date:"02 June, 2022",
    img: example
  },
  {
    id: nanoid(),
    title: "Blog 2",
    author:"Valentina G",
    date:"02 June, 2022",
    img: example
  },
  {
    id: nanoid(),
    title: "Blog 2",
    author:"Valentina G",
    date:"02 June, 2022",
    img: example
  },
]