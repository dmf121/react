import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import styles from './OrangeButton.module.css';

const OrangeButton = (props) => {
    const {link, btnText, className, onClick} = props;

  return (
    <div >
        <Link to={link} onClick={onClick} className={`${styles.btn} ${className}`}>{btnText}</Link>
    </div>
  )
}

export default OrangeButton