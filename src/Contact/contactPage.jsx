import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ContactPage() {
    // useEffect(() => {
    //     AOS.init();
    //   }, [])

    const clickme = () => {
        alert("Message Sent")
    }
    return (
        <>
            <div className='contact-header' id='contact'>
                <div className='
             content-header
                '>
                    <div className='title-Fname' data-aos="fade-right" data-aos-duration="1200">Contact <span className='title-Lname'>Me</span></div>



                    <div className='contact-section'>
                        <div className='contact-icons'>

                            <ContactInfo head="Location" tail="Edinburgh ,United Kingdom" icon={faLocationDot} />
                            <ContactInfo head="Email" tail="vengat7514@gmail.com" icon={faEnvelope} />
                            <ContactInfo head="Phone" tail="+91-8667439244" icon={faPhone} />
                        </div>

                        <div className='contact-form' data-aos="fade-left" data-aos-duration="1300">

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Name'
                                autoComplete='off'
                                required
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email'
                                autoComplete='off'
                                required
                            />

                            <textarea
                                id="message"
                                name="message"
                                placeholder='Message'
                                autoComplete='off'
                                required
                            />


                            <button className='read-more' onClick={clickme}>Send Message</button>
                        </div>
                    </div>
                </div>



                {/* <div className=''>
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.299016052958!2d-3.323220923499473!3d55.909515473142605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c46af06eff31%3A0xea463bd59d93b226!2sHeriot-Watt%20University%20Edinburgh%20Campus!5e0!3m2!1sen!2sin!4v1721895382908!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
                </div> */}
            </div>

        </>
    )
}


export function ContactInfo({ head, tail, icon }) {
    return (
        <>
            <div className='icons' data-aos="zoom-down" data-aos-duration="1200">
                <FontAwesomeIcon icon={icon} className='contact-icon' />
                <div>
                    <h2 className='contact-title'>{head}</h2>
                    <p className='contact-subtitle'>{tail}</p>

                </div>
            </div>
        </>
    )
}