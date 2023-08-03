import React from 'react';

import styles from './Contact.module.css';

import Title from '../Title/title';
import ContactForm from '../UI/ContactForm/ContactForm';
import OrangeButton from '../UI/OrangeButton/orangeButton';

const Contact = () => {
  return (
    <div className='py-5'>
        <div className="container">
            <Title
                texth5='Contact Us'
                texth1='For Inquiries or Questions'
                textp='Please use the form or call us on 123-456-7890'
            />
            <div className="row py-5">
                <div className="col-xl-6 col-md-6 mb-5">
                    <div className="col-xl-9 col-lg-11 col-md-12 col-sm-12">
                        <div className="row">
                            <ContactForm 
                                label='First Name'
                            />

                            <ContactForm
                                label='Last Name'
                            />
                        </div>
                        
                        <div className="row">
                            <ContactForm 
                                label='Email'
                            />

                            <ContactForm
                                label='Subject'
                            />
                        </div>
                    </div>
                    
                    <div className="col-xl-9 col-lg-11 col-md-12">
                        <label className="mt-3">Leave us a message...</label>
                        <textarea className="my-3" name="" id="" cols="30" rows="10"></textarea>
                        <OrangeButton
                            btnText='Submit'
                        />
                    </div>
                </div>

                <div className={`col-xl-6 col-md-6 ${styles.contactImg}`}>
                    <img src="../img/contact.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact