import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Demo 1" , link: "/"},
        {name: "Demo 2" , link: "/"},
        {name: "Demo 3" , link: "/"},
        {name: "Demo 4" , link: "/"},
        {name: "Demo 1" , link: "/"},
    ]
    const ourAddress = [
        {name: "70/19 Tajmahal Road, Mohammadpur, Dhaka" , link: "//google.com/map"}
        
       
    ]
    const company = [
        {name: "About" , link: "/"},
        {name: "Project" , link: "/"},
        {name: "Our Team" , link: "/"},
        {name: "Terms Condition" , link: "/"},
        {name: "Submit Listing" , link: "/"}
    ]
    const QuickLinks = [
        
        {name: "Demo 1" , link: "/"},
        {name: "Demo 2" , link: "/"},
        {name: "Demo 3" , link: "/"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="About Us" menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Company" menuItems={company}/>
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={QuickLinks}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+8801709605706</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;