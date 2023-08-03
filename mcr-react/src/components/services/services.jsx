import React from 'react';
import styles from './Services.module.css';

import Title from '../Title/title';


const Services = () => {
  return (
    <div className='py-5'>
      <div className="container">
            <Title
              texth5='Our Services'
              texth1='We Offer a Range of Services to Meet Your Needs'
              textp='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt minus dolorum vitae et obcaecati exercitationem.'
            />

            <div className="row mt-5">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto">
                    <div className="col-xl-8 col-md-8">
                        <div className="my-3">
                            <img src="./svg/1.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Commercial Construction</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_1.jpg" alt=""/></div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto order-xl-2 order-md-2 ">
                    <div className="col-xl-8 col-md-8 ms-auto ">
                        <div className="my-3">
                            <img src="./svg/2.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Residential Construction</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_2.jpg" alt=""/></div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto">
                    <div className="col-xl-8 col-md-8">
                        <div className="my-3">
                            <img src="./svg/3.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Pre-Construction</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_3.jpg" alt=""/></div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto order-xl-2 order-md-2 ">
                    <div className="col-xl-8 col-md-8 ms-auto ">
                        <div className="my-3">
                            <img src="./svg/5.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Special Projects</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_4.jpg" alt=""/></div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto">
                    <div className="col-xl-8 col-md-8">
                        <div className="my-3">
                            <img src="./svg/4.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Site Management</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_5.jpg" alt=""/></div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto order-xl-2 order-md-2 ">
                    <div className="col-xl-8 col-md-8 ms-auto ">
                        <div className="my-3">
                            <img src="./svg/6.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Infrastructure Construction</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_6.jpg" alt=""/></div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto">
                    <div className="col-xl-8 col-md-8">
                        <div className="my-3">
                            <img src="./svg/7.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Civil Engineering</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_7.jpg" alt=""/></div>
            </div>

            <div className="row mb-5">
                <div className="col-xl-4 col-md-5 col-sm-12 my-auto order-xl-2 order-md-2 ">
                    <div className="col-xl-8 col-md-8 ms-auto ">
                        <div className="my-3">
                            <img src="./svg/8.svg" alt="" />
                        </div>
                        <h4 className="mb-4">Landscape Construction</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis in laborum quos, impedit iure corrupti, quaerat quisquam ad fugiat ipsum facere eligendi. Earum excepturi facilis, aut maxime quisquam a!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel totam natus soluta maxime iure nostrum corporis ad ratione provident.</p>
                    </div>
                </div>
                <div className={`col-xl-8 col-md-7 col-sm-12 ${styles.servicesImg}`}><img src="./img/services_8.jpg" alt=""/></div>
            </div>

        </div>
    </div>
  )
}

export default Services;