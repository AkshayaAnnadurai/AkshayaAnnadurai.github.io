import React from "react";
// import {useHistory} from "react-router"
// import { useNavigate } from "react-router-dom";
import style from "./detail.module.css";
import Akshaya_Annadurai_Resume from "../../Resume/Akshaya_Annadurai_Resume.pdf"

function Details() {
  // const history = useHistory();
  // const navigate = useNavigate();


  return (
    <div className={style.detailsbody}>
      <div className={style.contentbody}>
        <div className={style.smalldiv}>
          <p className={style.hi}>Hi, I am</p>
          <h1 className={style.name}>Akshaya Annadurai</h1>
          <p className={style.fullstack}>
            Full-stack Web Developer | Competitive programmer
          </p>
          <a download href={Akshaya_Annadurai_Resume}
            target="_blank"
            
          >
            {" "}
            <button onClick={() => window.open("https://drive.google.com/file/d/16tN9MnTDhJ2Os8efqW5DmY80CqDcO_JT/view")} className={style.resume}>RESUME</button>
          </a>

          <div style={{ marginTop: "20px" }}>
            <a target="_blank" href="https://github.com/AkshayaAnnadurai">
              <img
                className={style.github}
                src="/github.svg"
                alt="github"
              ></img>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/akshaya-annadurai-629916191/">
              <img
                className={style.linkedin}
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>

            <a target="_blank" href="https://twitter.com/Akshaya_Annadur">
              <img className={style.twitter} src="/twitter.gif" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;



 //"react-router": "^6.4.0",
