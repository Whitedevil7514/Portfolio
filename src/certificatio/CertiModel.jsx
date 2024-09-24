import React from 'react'
import '../App2.css'

import { certidata } from './Certidata'


export default function CertiModel({ closingmodel, certiid }) {

    const data = certidata.filter((ele) => {
        return ele.id === certiid
    })
    console.log("data", data);
    const closeModel = () => {
        closingmodel(false)
    }

    return (
        <>
            {
                data.map((ele) => (
                    <div className='modal-overlay'>
                        <div className='model-header'>
                        <button className='close-button' onClick={closeModel}>x</button>
                        <div className='model-content'>
                            <div className='image-container'>
                          
                            <img src={ele.image}  />

                            </div>
                            <section className='content'>
                                <div className=''><span className=''>{ele.cname}</span></div>
                                <p className=''>{ele.cdata}
                                </p>
                               
                            </section>
                            </div>


                        </div>

                    </div>
                ))
            }

        </>
    )
}
