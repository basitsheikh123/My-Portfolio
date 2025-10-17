import React from 'react'
import './Service.css'
import Service_data from '../../assets/Services_data'
import Arrow_icon from '../../assets/Arrow.png'

const Service = () =>{
    return(
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
            </div>
            <div className="services-container">
                {Service_data.map((Service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{Service.s_no}</h3>
                        <h2>{Service.s_name}</h2>
                        <p>{Service.s_desc}</p>
                        <div className="services-redmore">
                            <p>Read More</p>
                            <img src={Arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}


export default Service