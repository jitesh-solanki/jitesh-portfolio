import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiGreensock } from "react-icons/si";

const SkillData = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "GitHub", icon: <FaGithub />, color: "text-black" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "GSAP", icon: <SiGreensock />, color: "text-green-500" },
];

export default SkillData;
