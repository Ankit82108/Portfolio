import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>Datametricks Pvt Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;11/12/2023 - PRESENT</h3>
                               <ul>
  <p>Key Responsibilities:</p>
  <li data-aos="fade-right" data-aos-delay="200">
    <span>
      Developed and maintained highly responsive, scalable, and adaptive web applications using <strong>Next.js</strong> and <strong>React.js</strong>.
    </span>
  </li>
  <li data-aos="fade-right" data-aos-delay="400">
    <span>
      Implemented modern UI/UX designs, delivering seamless user experiences across multiple devices and platforms.
    </span>
  </li>
  <li data-aos="fade-right" data-aos-delay="600">
    <span>
      Built reusable and modular components to improve development efficiency and maintainability.
    </span>
  </li>
  <li data-aos="fade-right" data-aos-delay="800">
    <span>
      Optimized application performance through code-splitting, lazy loading, and state management best practices.
    </span>
  </li>
  <li data-aos="fade-right" data-aos-delay="1000">
    <span>
      Collaborated with designers and backend teams to deliver end-to-end solutions aligned with business requirements.
    </span>
  </li>
  <li data-aos="fade-right" data-aos-delay="1200">
    <span>
      Integrated RESTful APIs and third-party libraries, ensuring smooth data flow and improved functionality.
    </span>
  </li>
  <li data-aos="fade-right" data-aos-delay="1400">
    <span>
      Followed agile methodologies, participated in code reviews, and contributed to improving team workflows.
    </span>
  </li>
</ul>

                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience