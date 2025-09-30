import React from "react";

import "../../../styles/About/Route/Graduation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Graduation = () => {
  return (
    <>
      <div className="graduation">
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>4</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>Technocrats Institute of Technology , Bhopal</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              />
              &nbsp;&nbsp;13/08/2021 - 31/07/2023
            </h2>
            <p>
            
            </p>
            <ul className="graduation__highlights">
                <li>   Completed Master of Computer Applications <strong> (MCA) </strong>{" "}
              from <strong>T.I.T College Bhopal</strong>, with a focus on
              software development and web technologies.</li> 
              <li>
                Specialized in full-stack web development using modern
                frameworks.
              </li>
              <li>
                Worked on academic projects involving React.js, Next.js, and
                database management.
              </li>
              <li>
                Gained practical knowledge of software engineering principles,
                cloud computing, and agile methodologies.
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Graduation;
