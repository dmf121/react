import React from 'react';
import styles from './HomeWho.module.css';

import Title from '../Title/title';

const HomeWho = () => {
  return (
    <div className={styles.who}>
      <div className={styles.bg}>
            <img src="./img/home_bg.jpg" alt=""/>
        </div>

        <div className="container">
            <div className="py-5">
              <Title className='white-h5 white-p py-5'
                texth5='Who We Are'
                texth1='About Our Company'
                textp='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis assumenda perspiciatis consequuntur eaque tempore commodi atque quam, magnam sit? Rem tempora molestias dolorem tenetur inventore maxime adipisci cupiditate impedit sed?'
              />
            </div>
            

            <div className="row mb-5 me-auto">
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <h1 className="white">1968</h1>
                    <p className="white">Year of Establishment</p>
                    <div className={styles.lineWhite}></div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <h1 className="white">282</h1>
                    <p className="white">Projects Completed</p>
                    <div className={styles.lineWhite}></div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <h1 className="white">150</h1>
                    <p className="white">Professional Employees</p>
                    <div className={styles.lineWhite}></div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <h1 className="white">35</h1>
                    <p className="white">Business Partners</p>
                    <div className={styles.lineWhite}></div>
                </div>
            </div>

            <div className="row pt-5 my-4 text-start">
                <div className={styles.signature}><img src="./img/signature.jpeg" alt=""/></div>
                <span className="white">Aaron Masterson</span>
                <p className="white">CEO, MCR Construction</p>
            </div>
        </div>
    </div>
  )
}

export default HomeWho