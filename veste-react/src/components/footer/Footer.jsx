import React from 'react'

import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className="container">
            <div className="row py-5">
                <div className={`${styles.footerLogo} col-xl-3 col-lg-3 col-md-3 col-sm-6`}>
                    <Link to='/'><h2 className='pb-4'>VESTE</h2></Link>
                </div>
                <div className={`${styles.footerSection} col-xl-3 col-lg-3 col-md-3 col-sm-6`}>
                    <h5 className='pb-3'>CUSTOMER CARE</h5>
                    <ul>
                        <li><Link to='/customer_care'>Shipping Policy</Link></li>
                        <li><Link to='/customer_care'>Returns Policy</Link></li>
                        <li><Link to='/visit_us'>Contact Us</Link></li>
                        <li><Link to='/visit_us'>About Us</Link></li>
                    </ul>
                </div>
                <div className={`${styles.footerSection} col-xl-3 col-lg-3 col-md-3 col-sm-6`}>
                    <h5 className='pb-3'>VISIT OUR STORE</h5>
                    <p>500 Terry Francine Street San Francisco, CA 94158</p>
                </div>
                <div className={`${styles.footerSection} col-xl-3 col-lg-3 col-md-3 col-sm-6`}>
                    <h5 className='pb-3'>STAY CONNECTED</h5>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com"><img src="../../img/social-media/facebook.png" alt="facebook"  /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><img src="../../img/social-media/instagram.png" alt="instagram" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.twitter.com"><img src="../../img/social-media/twitter.png" alt="twitter" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.pinterest.com"><img src="../../img/social-media/pinterest.png" alt="pinterest" /></a>
                </div>
            </div>
        </div>

        <div className={styles.footerBottom}>© 2023 by VESTE. Powered and secured by Wix</div>
    </div>
  )
}

export default Footer