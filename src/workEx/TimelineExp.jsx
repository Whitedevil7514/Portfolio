import React from 'react'
import '../App2.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function TimelineExp() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>

            <div className='company-details'>
                <div className='company' data-aos="fade-right" data-aos-duration="1200">
                    <p className='company-name'> R S Consulting Services</p>
                    <span className='company-year'>2023-2024</span>
                </div>
                <div className='timeline'>
                    <div className='dot1'></div>
                    <div className='dot2'></div>

                </div>
                <div className='company-role-res' data-aos="fade-left" data-aos-duration="1200">
                    <h4 className='company-role'> Technical Specialist- Cyber Security </h4>
                    <div className='company-res'>
                        Deliver customized cybersecurity solutions to a diverse client base. <br />
                        Collaborated with non-technical stakeholders to translate technical
                        cybersecurity concepts into understandable language, facilitating
                        effective communication and decision-making. <br />
                        Led incident response activities, including threat detection, analysis,
                        containment, and recovery, to minimize the impact of security
                        incidents.
                    </div>
                </div>
            </div>
            <div className='company-details2'>
                <div className='company1' data-aos="fade-right" data-aos-duration="1200">
                    <p className='company-name'> Zybeak Technologies  Ltd </p>
                    <span className='company-year'>2021-2023</span>
                </div>

                <div className='company-role-res1' data-aos="fade-left" data-aos-duration="1200">
                    <h4 className='company-role'>  Cyber Security Trainer </h4>
                    <div className='company-res'>
                        Conducted training sessions on CEH and CHFI certifications, covering
                        ethical hacking techniques, forensic investigation methods, and
                        network security principles.  <br />
                        Provided mentorship and guidance to students, assisting them in
                        understanding complex concepts and preparing for industry
                        certifications.
                    </div>
                </div>
            </div>


        </>)
}
