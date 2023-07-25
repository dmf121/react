import React from 'react'
import styles from './HomeTiles.module.scss'
import { Link } from 'react-router-dom'

const HomeTiles = () => {
  return (
    <div>
        <section className={styles.women}>
            <div className="container p-0">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 p-0">
                        <img src="./img/home_tile_women.webp" alt="" />
                    </div>
                    <div className={`col-lg-6 col-sm-12 py-5 ${styles.text}`}>
                        <div className='my-auto py-5'>
                            <h1>SULTRY & SMART</h1>
                            <h4>HOT SPRING LOOKS</h4>
                            <div className={styles.lineBlack}></div>
                            <Link to='/women'><h5>Shop Women</h5></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.men}>
            <div className="container p-0">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 order-xl-2 order-lg-2 p-0">
                        <img src="./img/home_tile_men.webp" alt="" />
                    </div>
                    <div className={`col-lg-6 col-sm-12 py-5 ${styles.text}`}>
                        <div className='my-auto py-5'>
                            <h1>ELEGANT & SLICK</h1>
                            <h4>GET READY FOR SUMMER</h4>
                            <div className={styles.lineWhite}></div>
                            <Link to='/men'><h5>Shop Men</h5></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeTiles