import React from 'react'
import '../App2.css'
import { useState } from 'react';
import CertiModel from './CertiModel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function ExpCard({ head, name, cimage, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cid, setcid] = useState(0);

  const openModal = (id) => {
    setcid(id)
    setIsModalOpen(true);
  };

  const closeModal = (data) => {
    setIsModalOpen(data);
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {
        isModalOpen && <CertiModel closingmodel={(data) => closeModal(data)} certiid={cid} />
      }
      <div className='certification-card' data-aos="zoom-in" data-aos-duration="1200">
        <div className='certify-imgholder'><img src={cimage} alt='certification' className='certification-image' />
        </div>
        <div className='certification-content'>
          <h5 className='c-head'>{head}</h5>
          <h2 className='c-name'>{name}</h2>
          <button className='read-more' onClick={() => openModal(id)}>Read More</button>
        </div>

      </div>


    </>)
}
