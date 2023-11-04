import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineLogout, MdCancelPresentation } from "react-icons/md";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { SiGooglesearchconsole } from "react-icons/si";
export default function Nav() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="w-full h-full bg-black flex justify-center items-center relative z-[999]">
      <div className="w-[80%] h-[80%] flex md:flex-col justify-between items-center">
        <div className="hidden text-white text-5xl md:flex flex-col justify-between items-center gap-10">
          <FaHome />
          <FaCalendarAlt />
          <BiSolidPieChartAlt2 />
          <SiGooglesearchconsole />
          <BsFillClipboard2PlusFill />
        </div>
        {toggle ? (
        <AnimatePresence>
         <motion.div

         initial={{y:200}}
         animate={{y:0}}
         exit={{y:100}}
         transition={{
            duration:0.3
         }}

         className="bg-black w-screen min-h-[20rem] absolute left-0 top-[-20rem] z-[-1] flex justify-center items-center">

          <div className="w-full h-full text-white
           text-4xl flex flex-wrap justify-center items-center gap-8">
           <NavLink 
            onClick={() => settoggle(!toggle)}
           className="w-[45%] flex justify-center items-center">
              <FaHome className="border-2 border-white w-14 h-14  p-2" />
           </NavLink>

           <NavLink 
            onClick={() => settoggle(!toggle)}
           className="w-[45%] flex justify-center items-center">
              <FaCalendarAlt className="border-2 border-white w-14 h-14  p-2" />
           </NavLink>
              
           <NavLink 
            onClick={() => settoggle(!toggle)}
           className="w-[45%] flex justify-center items-center">
               <BiSolidPieChartAlt2 className="border-2 border-white w-14 h-14  p-2" />
           </NavLink>

           <NavLink 
            onClick={() => settoggle(!toggle)}
           className="w-[45%] flex justify-center items-center">
             <SiGooglesearchconsole className="border-2 border-white w-14 h-14 p-2"/> 
           </NavLink>

           <NavLink 
            onClick={() => settoggle(!toggle)}
           className="w-[45%] flex justify-center items-center">
              <BsFillClipboard2PlusFill className="border-2 border-white w-14 h-14 p-2" />
           </NavLink>

          </div>

        </motion.div>
        </AnimatePresence>
        ) : (
          ""
        )}
        <div
          className="text-white text-4xl md:hidden"
          onClick={() => settoggle(!toggle)}
        >
          {toggle ? <MdCancelPresentation /> : <FaBarsStaggered />}
        </div>
        <div className="text-white text-4xl md:text-5xl flex md:flex-col gap-8">
          <AiFillSetting />
          <MdOutlineLogout />
        </div>
      </div>
    </div>
  );
}
