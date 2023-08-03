import React from 'react';
import styles from './Title.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Title = (props) => {
    const {texth5, texth1, textp, className} = props;

  return (
    <div className={`col-xl-5 col-md-7 mb-4 text-start ${className}`}>
      <h5>{texth5}</h5>
      <h1 className={styles.orange}>{texth1}</h1>
      <p>{textp}</p>
    </div>
  )
}

export default Title