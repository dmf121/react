import React from 'react';
import styles from './HomeMain.module.css';

import OrangeButton from '../UI/OrangeButton/orangeButton';





const HomeMain = () => {

   
  
    return (
    <div className={styles.home}>
        <div className={styles.videoContainer}>
            <video src='./video/home.mp4' autoPlay loop muted />
            
         </div>

          <div className="container">
            <div className="row ">
                <div className="col-xl-7 col-md-10 col-sm-12">
                    <h1 className={`${styles.homeTitle} fs-1 text-start`}>Building a Concrete Future</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-7 col-md-10 col-sm-12">
                    <p className={`${styles.homeTitleP} fs-5 text-start`}>Honest, Reliable Builders since 1968</p>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col-xl-2 col-lg-3 col-md-4 pr-5 mx-2 my-2"><OrangeButton link='/projects' btnText='View Projects'/></div>
                <div className="col-xl-2 col-lg-3 col-md-4 pr-5 mx-2 my-2"><OrangeButton link='/contact' btnText='Contact Us'/></div>
                
                
            </div>
          </div>
    </div>
  )
}

export default HomeMain