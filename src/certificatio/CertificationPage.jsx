import React from 'react'
import '../App2.css'
import ExpCard from './CertiCard'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { certidata } from './Certidata'

export default function CertificationPage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='certify-header' id='certification'>
        <div className='content-header'>
          <div className='title-Fname' data-aos="fade-right" data-aos-duration="1200" >Professional <span className='title-Lname'>Certifications</span></div>
          {/* <div className='title-Fname' > <span className='title-Lname'># flags captured 
    </span></div> */}

          <p className='title-content' data-aos="fade-left" data-aos-duration="1200">
            Enthusiastic cybersecurity professional with expertise in VAPT, risk analysis, and
            CHFI-certified digital forensics. Experienced in MSSP environments, delivering
            tailored solutions, and bridging technical and non-technical stakeholders. Committed
            to continuous learning and enhancing cybersecurity postures against dynamic
            threats.</p>
        </div>


        <div className='certi-cards-header'>
          {
            certidata.map((ele) => (
              <ExpCard head={ele.chead} name={ele.cname} cimage={ele.image} id={ele.id} />

            ))
          }
        </div>

      </div>
    </>
  )
}
