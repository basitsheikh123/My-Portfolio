import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg.png'
import {MdPerson} from 'react-icons/md'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I'am frontend developer from, Pakistan with 3 years experience in web development. </p>
                </div>
                <div className="footer-top-right">
                    <div className='footer-email-input'>
                        <MdPerson className="user-icon" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-follow">Follow</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2022 Abdul Basit. All Rights Reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer