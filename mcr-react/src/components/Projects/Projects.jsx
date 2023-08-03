import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import styles from './Projects.module.css';


import Title from '../Title/title';


const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const titles = ['Angela Residence', 'Sam Valley Highway', 'Irving Industrial Region', 'Mission Lake Bridge', 'Halston Parkway', 'Windsor Creek Neighbourhood', 'Sunnydale Apartment Complex', 'North Campus HQ', 'West Ridge Hill Interchange', 'Great Hill New Campus', 'Oceanside Railway Station', 'System Inc. HQ', 'Old Ferry Terminal', 'Highland West Parkway', 'Mills Way Interchange'];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(0);
    setModalOpen(false);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const galleryImages = [];

  for(let index=0; index<15; index++) {
    galleryImages.push(
      <div className={`${styles.projectItem} col-lg-4 col-md-6 col-sm-12 my-3`}  key={index}>
        <div className={styles.projectImg}>
          <img
           
            src={`../img/project_${index+1}.jpg`}
            alt={` ${index + 1}`}
            onClick={() => openModal(index)}
          />
        </div>
        <h5 className="mt-2">{titles[index]}</h5>
      </div>
  )}



  return (
    <div className='py-5'>
      <div className="container">
        <Title
                texth5='Our Projects'
                texth1='We Build Projects That Last'
                textp='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt minus dolorum vitae et obcaecati exercitationem.'
        />

        <div className="row mt-5">
          {galleryImages}
        </div>
      </div>
      

      <Modal isOpen={modalOpen} toggle={closeModal} className="fullscreen-modal">
        <ModalHeader toggle={closeModal}>{titles[selectedImageIndex]}</ModalHeader>
        <ModalBody>
          <div className="modal-gallery">
            <img src={`../img/project_${selectedImageIndex+1}.jpg`} alt="Selected " />

            <div className="controls">
              <Button onClick={goToPreviousImage} className='modal-prev btn-light'>
                <img src='./svg/angle-left.svg' alt='prev'/>
              </Button>
              <Button onClick={goToNextImage} color="primary" className='modal-next btn-light'>
                <img src='./svg/angle-right.svg' alt='next'/>
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Projects;
