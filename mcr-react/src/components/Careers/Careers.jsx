import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import styles from './Careers.module.css'

import Title from '../Title/title';
import CareerCard from '../CareerCard/CareerCard';
import OrangeButton from '../UI/OrangeButton/orangeButton';


const Careers = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };
    

    
  return (
    <div className='py-5'>
        <div className="container">
            <Title
                texth5='Join the Success'
                texth1='We Are Hiring a Range of Positions'
            />
            <div className="row justify-content-start">
                <CareerCard
                    title='Construction Scheduler'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad mollitia ea et, delectus sint fugit id esse nesciunt ullam eum?'
                    onClick={() => openModal()}
                />

                <CareerCard
                    title='Receptionist'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad mollitia ea et, delectus sint fugit id esse nesciunt ullam eum?'
                    onClick={() => openModal()}
                />

                <CareerCard
                    title='Civil Engineer - Senior Level'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad mollitia ea et, delectus sint fugit id esse nesciunt ullam eum?'
                    onClick={() => openModal()}
                />      
            </div>

            <div className="row justify-content-end">
                <CareerCard
                    title='CP Engineer - Entry Level'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad mollitia ea et, delectus sint fugit id esse nesciunt ullam eum?'
                    onClick={() => openModal()}
                />

                <CareerCard
                    title='Site Safety and Health Officer'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad mollitia ea et, delectus sint fugit id esse nesciunt ullam eum?'
                    onClick={() => openModal()}
                />

                <CareerCard
                    title='Carpenter'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad mollitia ea et, delectus sint fugit id esse nesciunt ullam eum?'
                    onClick={() => openModal()}
                />   
            </div>
        </div>



        <Modal isOpen={modalOpen} toggle={closeModal} className="fullscreen-modal">
            <ModalHeader toggle={closeModal} className='my-modal-header'>
                <div className={styles.myLogo}><h3>MCR</h3><span>Construction</span></div>
            </ModalHeader>
            <ModalBody className='my-modal-content'>
            <div className="container">
                        <Title className='white-h5'
                            texth5='Join the Success'
                            texth1='Please fill up the form below'
                        />

                        <div className="row">
                            <div className={`col-xl-4 col-lg-4 col-md-4 my-3 ${styles.myInput}`}>
                                <label >First Name</label>
                                <input type="text"/>
                            </div>
                            <div className={`col-xl-4 col-lg-4 col-md-4 my-3 ${styles.myInput}`}>
                                <label >Last Name</label>
                                <input type="text"/>
                            </div>
                            <div className={`col-xl-4 col-lg-4 col-md-4 my-3 ${styles.myInput}`}>
                                <label >Email</label>
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-xl-4 col-lg-4 col-md-4 my-3 ${styles.myInput}`}>
                                <label >Phone</label>
                                <input type="text"/>
                            </div>
                            <div className={`col-xl-8 col-lg-8 col-md-8 my-3 ${styles.myInput}`}>
                                <label >Address</label>
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-xl-4 col-lg-4 col-md-4 my-3 ${styles.myInput}`}>
                                <label >Position</label>
                                <select className="form-select" id="inputGroupSelect01">
                                    <option value="1">Construction Scheduler</option>
                                    <option value="2">Receptionist</option>
                                    <option value="3">Civil Engineer - Senior Level</option>
                                    <option value="4">CP Engineer - Entry Level</option>
                                    <option value="5">Site Safety and Health Officer</option>
                                    <option value="6">Carpenter</option>
                                </select>
                            </div>
                            <div className={`col-xl-8 col-lg-8 col-md-8 my-3 ${styles.myInput}`}>
                                <label >LinkedIn Link</label>
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-xl-12 col-lg-12 col-md-12 my-3 ${styles.myInput}`}>
                                <label >Cover Letter</label>
                                <textarea name="" id="" cols="30" rows="40" className=""></textarea>
                            </div>
                        </div>

                        <OrangeButton btnText='Submit'/>
                    </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Careers