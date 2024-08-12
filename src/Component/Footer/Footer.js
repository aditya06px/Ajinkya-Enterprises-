import React from 'react'
import LogoMobile from '../../assests/footer-logo/logo-mobile-footer.png'
import LogoDesktop from '../../assests/footer-logo/logo-pc-footer.png'
import Call from "../../assests/footer-icons/call.png"
import Deskphone from "../../assests/footer-icons/deskphone.png"
import Location from "../../assests/footer-icons/location-on.png"
import Mail from "../../assests/footer-icons/mail.png"
import Schedule from "../../assests/footer-icons/schedule.png"
import './Footer.css'
import '../../App.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>

                <div className='footer-logo-container'>
                    {/* /logo section  */}
                    <img
                        className='footer-logo'
                        src={LogoDesktop}
                        srcSet={`${LogoMobile} 480w, ${LogoDesktop} 768w`}
                        sizes="(max-width: 480px) 100vw"
                        alt='Company Logo'
                    />
                    <p style={{textAlign: 'end' , fontSize: '15px'}}> by Ajinkya Enterprises </p>
                </div>

                <div className='office-details'>
                    {/* office  */}
                    <h5> Office </h5>
                    <ul>
                        <li>
                            <img className='footer-icon flex-start' src={Location} alt='Company Logo' />
                            <span> 303 Modern Apartments, Mali Colony, Rajarampuri, Kolhapur 416008 Maharashtra </span>
                        </li>

                        <li>
                            <img className='footer-icon' src={Deskphone} alt='Company Logo' />
                            <span>0231- 4050473</span>
                        </li>

                        <li>
                            <img className='footer-icon' src={Call} alt='Company Logo' />
                            <span>+91 9373979779</span>
                        </li>

                        <li>
                            <img className='footer-icon' src={Mail} alt='Company Logo' />
                            <span>office@ajinkyainfra.in</span>
                        </li>
                        <li>
                            <img className='footer-icon flex-start'  src={Schedule} alt='Company Logo' />
                            <span>9.00 am - 6.00 pm  <br />Mon - Sat</span>
                        </li>

                    </ul>
                </div>

                <div className='footer-quick-links'>
                    {/* Quick Links section  */}
                    <h5> Quick Links </h5>
                    <ul>
                        <li>Fuel Conversion & Cost Saving <br/> Calculator</li>

                        <li>Client Titles</li>
                        <li>Contact</li>
                        <li>Site Map</li>

                    </ul>
                </div>
            </div>

            <p className='footer-copyright-txt'> © 2024 Ajinkya Infra – All Rights Reserved </p>
        </footer>
    )
}

export default Footer
