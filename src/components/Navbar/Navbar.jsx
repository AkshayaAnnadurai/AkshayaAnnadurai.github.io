import React, { useContext,useState } from "react";
import style from "./navbar.module.css";
import { FiMenu,FiX } from "react-icons/fi";
import { useEffect } from "react";


function Navbar({IsMobile,setIsMobile}) {




// useEffect(()=>{
//   if(window.innerWidth<630)
//   {
//     setIsMobile(true)
//   }
// })

  return (
    <div className={style.navbody}>
      <div className={style.hs}><a style={{textDecoration:"none",color:"#286DAB"}} href="#home">AA</a></div>
      <button className={style.mobilemenuicon} onClick={()=>setIsMobile(!IsMobile) } >
            {IsMobile ? <FiX /> :<FiMenu />  }
          </button>
        
      {IsMobile? 
        < div className={style.navlinksmobile}>
        <a href="#home" className={style.a1}>
          Home
        </a>
        <a href="#about" className={style.a2}>
          About
        </a>
        <a href="#project" className={style.a3}>
          Project
        </a>
        <a href="#skills" className={style.a4}>
          Skills
        </a>
        <a href="#contact" className={style.a5}>
          Contact
        </a>
        <a href="https://drive.google.com/file/d/16tN9MnTDhJ2Os8efqW5DmY80CqDcO_JT/view" className={style.resume}>
         <button>RESUME</button>
        </a>
        </div>
      :< div className={style.flexx}>
        <a href="#home" className={style.a1}>
          Home
        </a>
        <a href="#about" className={style.a2}>
          About
        </a>
        <a href="#project" className={style.a3}>
          Project
        </a>
        <a href="#skills" className={style.a4}>
          Skills
        </a>
        <a href="#contact" className={style.a5}>
          Contact
        </a>
        <a download href="../resume/Akshaya_Annadurai_Resume" target="blank"><button className={style.resume} onClick={()=>window.open("https://drive.google.com/file/d/16tN9MnTDhJ2Os8efqW5DmY80CqDcO_JT/view")} >
         RESUME</button>
        </a>
        </div>  }
       
         
    </div>
  );
}

export default Navbar;
