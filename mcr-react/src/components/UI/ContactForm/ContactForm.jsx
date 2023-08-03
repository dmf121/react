import React from 'react';
import styles from './ContactForm.module.css'

const ContactForm = (props) => {
    const {label} = props;

  return (
    <form className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 my-3 px-2 ${styles.form}`}>
            <label>{label}</label>
            <input type="text" name="" id=""/>
    </form>
  )
}

export default ContactForm