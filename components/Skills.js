import { motion } from "framer-motion";
import Image from "next/image";
import { FaBootstrap, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";



const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2.0,
          },
        },
      }}
    >
      <div className="w-full pb-32">
        <div className="mx-auto flex flex-col justify-center">
          <p className=" font-bold text-blue-900 pb-4 text-center">Skills</p>

          <ul className="flex justify-start items-center flex-row flex-wrap gap-8 mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center md:w-fit">Backend</span>



            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaNode size="40px" />
              Node Js
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiMongodb size="40px" />
              MongoDB
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiMysql size="40px" />
              Mysql
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiExpress size="40px" />
              Express
            </li>
          </ul>

          <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center md:w-fit">Frontend</span>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaReact size="40px" />
              React
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <IoLogoJavascript size="40px" />
              JavaScript
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaHtml5 size="40px" />
              HTML5
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaCss3Alt size="40px" />
              CSS3
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiTailwindcss size="40px" />
              Tailwind CSS
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaBootstrap size="40px" />
              Bootstrap CSS
            </li>
          </ul>

         
          <ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center lg:w-fit">Other</span>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              C++
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <FaGithub size="40px" />
              git/GitHub
            </li>           
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
