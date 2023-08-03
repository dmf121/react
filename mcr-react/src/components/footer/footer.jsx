import React from 'react';
import styles from './Footer.module.css';

import OrangeButton from '../UI/OrangeButton/orangeButton';


const Footer = () => {
  return (
    <div>
        <div className="container">
            <div className={styles.footerLine}></div>

            <div className="row py-5 justify-content-between">
                <div className="col-lg-2 col-md-2 col-sm-12 mb-4 footer-brand">
                    <a className="navbar-brand" href="/"><div className="my-logo text-center"><h3>MCR</h3><span>Construction</span></div></a>
                </div>


                <div className="col-lg-2 col-md-3 col-sm-3 mb-4 mx-auto">
                    <h4 className="mb-5">Head Office</h4>
                    <p>500 Terry Francine Street</p>
                    <p className="mb-5">San Francisco, CA 94158</p>
                    <p>123-456-7890</p>
                    <a href="">info@mysite.com</a>
                </div>


                <div className="col-lg-1 col-md-2 col-sm-2 mb-4 mx-auto d-flex flex-column">
                    <h4 className="mb-5">Socials</h4>
                    <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                    <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                    <a href="https://ua.linkedin.com/" target="_blank">Linkedin</a>
                </div>


                <div className="col-lg-2 col-md-3 col-sm-3 mb-4 mx-auto">
                    <h4 className="mb-5">Inquiries</h4>
                    <p>For any inquiries, questions or commendations, please call: 123-456-7890</p>
                </div>


                <div className="col-lg-3 col-md-6 mb-4">
                    <OrangeButton
                        link='/contact'
                        btnText='Contact Us'
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer