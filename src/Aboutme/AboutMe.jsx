import React from 'react'
import '../App2.css'
import penetration from '../asserts/penetration.jpg'
import Forensic from '../asserts/forensic.jpg'
import Networking from '../asserts/networking.png'
import Vulner from '../asserts/vulnerability.png'
import malware from '../asserts/malware.jpg';
import Heriot from '../asserts/heriot.png'
import rkm from '../asserts/rkm.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
export default function AboutMePage() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <>
  <div className='AboutMe-header' id='about'>
    <div className='content-header'>
    <div className='title-Fname' data-aos="fade-right" data-aos-duration="1200">About <span className='title-Lname'>Me</span></div>
    {/* <div className='title-Fname' > <span className='title-Lname'># whoami  </span></div> */}

    <div className='title-content' data-aos="fade-left" data-aos-duration="1200">
    Enthusiastic cybersecurity professional with expertise in VAPT, risk analysis, and 
CHFI-certified digital forensics. Experienced in MSSP environments, delivering 
tailored solutions, and bridging technical and non-technical stakeholders. Committed 
to continuous learning and enhancing cybersecurity postures against dynamic 
threats.</div>
  </div>



<div className='skillcard' data-aos="zoom-in" data-aos-duration="1200">

<SkillCard name="Penetration Testing" logo={penetration}/>
<SkillCard  name="Digital Forensic" logo={Forensic}/>
<SkillCard  name="Networking" logo={Networking}/>
<SkillCard  name="Vulnerability Analysis" logo={Vulner}/>
<SkillCard  name="Malware Analysis" logo={malware}/>
<SkillCard  name="Pre Sales" logo={malware}/>
</div>


<div className='content-header1' >
    {/* <div className='title-Fname' > <span className='title-Lname'>#  apt-get knowledge   
    </span></div> */}
        <div className='title-Fname' data-aos="fade-right" data-aos-duration="1200">My <span className='title-Lname'>Education</span></div>

    <div className='education-detials' data-aos="fade-left" data-aos-duration="1200">
      <img src={Heriot}/>
      <div>
      <h1>Heriot Watt University  </h1>
      <h4>Master of Computer Science for Cyber Security -2025</h4>
      </div>
   
    </div>
    <div className='education-detials' data-aos="fade-left" data-aos-duration="1200"> 
       <img src={rkm}/>
<div>
    <h1>Ramakrishna Mission Vivekananda College  </h1>
    <h4>Bachelor of Computer Science -2023</h4>
    </div>
    </div>

  </div>
  </div>
  </>
  )
}

export  function SkillCard({logo,name}){

  return(

    <>
    <section className='logo-header' >
  <img src={logo} className='skills-logo' alt="Penetration Testing" />
  <div className='skill-name'>{name}</div>
</section>
    </>
  )
}