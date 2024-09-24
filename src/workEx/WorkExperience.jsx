import React from 'react'
import '../App2.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import TimelineExp from './TimelineExp'
export default function WorkExperience() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='work-header' id='work'>
        <div className='content-header'>
          <div className='title-Fname' data-aos="fade-right" data-aos-duration="1200">Work <span className='title-Lname'>Experience</span></div>
          {/* <div className='title-Fname' > <span className='title-Lname'># !/bin/bash </span></div> */}

          <p className='title-content' data-aos="fade-left" data-aos-duration="1200">
            Enthusiastic cybersecurity professional with expertise in VAPT, risk analysis, and
            CHFI-certified digital forensics. Experienced in MSSP environments, delivering
            tailored solutions, and bridging technical and non-technical stakeholders. Committed
            to continuous learning and enhancing cybersecurity postures against dynamic
            threats.</p>
        </div>

        <TimelineExp />

      </div>
    </>
  )
}
