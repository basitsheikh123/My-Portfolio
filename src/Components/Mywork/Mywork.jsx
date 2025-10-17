import React from 'react'
import './Mywork.css'
import Mywork_data from '../../assets/Mywork_data'
import Arrow_icon from '../../assets/Arrow.png'


const Mywork = ()=>{
    return(
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest work</h1>
            </div>
            <div className="mywork-container">
                {Mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={Arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default Mywork