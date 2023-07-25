import React from 'react'

import styles from './HomeTilesBottom.module.scss'
import { Link } from 'react-router-dom'

const HomeTilesBottom = () => {
  return (
    <div className={styles.main}>
        <div className="container">
            <div className="row py-5 justify-content-around">
                <div className="col-xl-5 col-lg-6 col-md-6 py-3">
                    <Link to="/accessories">
                        <div className={`${styles.tile} ${styles.tileLeft}`}>
                            <div>
                                <h4>SWOON-WORTHY</h4>
                                <h2>ACCESSORIES</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-xl-5 col-lg-6 col-md-6 py-3">
                    <Link to="/sale">
                        <div className={`${styles.tile} ${styles.tileRight}`}>
                            <div>
                                <h4>WINTER SALE</h4>
                                <h2>NOW 30% OFF</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeTilesBottom