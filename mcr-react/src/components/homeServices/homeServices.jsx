import React from 'react';


import TitleWithButton from '../titleWithButton/titleWithButton';


const HomeServices = () => {
  return (
    <div className='py-5'>
        <div className="container">

            <TitleWithButton
                texth5='Our Services'
                texth1='We Offer a Range of Services to Meet Your Needs'
                textp='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, asperiores!'
                link='/services'
                btnText='Read More'
            />

            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start card-space"></div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/1.svg" alt="" />
                    <h4 className="mt-3">Commercial Construction</h4>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/2.svg" alt="" />
                    <h4 className="mt-3">Residential Construction</h4>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/3.svg" alt="" />
                    <h4 className="mt-3">Pre-Construction</h4>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/4.svg" alt="" />
                    <h4 className="mt-3">Site Management</h4>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/5.svg" alt="" />
                    <h4 className="mt-3">Special Projects</h4>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/6.svg" alt="" />
                    <h4 className="mt-3">Infrastructure Construction</h4>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/7.svg" alt="" />
                    <h4 className="mt-3">Civil Engineering</h4>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start">
                    <img src="./svg/8.svg" alt="" />
                    <h4 className="mt-3">Landscape Construction</h4>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 my-3 text-start card-space"></div>
            </div>
        </div>
    </div>
  )
}

export default HomeServices