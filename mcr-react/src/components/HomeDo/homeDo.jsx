import React from 'react';
import styles from './HomeDo.module.css'

import TitleWithButton from '../titleWithButton/titleWithButton';


const HomeDo = () => {
  return (
    <div>
        <section className="about my-5">
        <div className="container">

            <TitleWithButton texth5='Building Is What We Do' texth1='MCR Construction Is Leading Quality Projects' link='/services' btnText='Read More'/>

            <div className="row mt-5">
                <div className="col-md-6 col-sm-12">
                    <div className="col-xl-7 col-md-10 mt-5 text-start">
                        <div className='line mt-5 mb-4'></div>
                        <h1>Commercial</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora ex voluptas suscipit et doloribus saepe quo nihil quos! Praesentium voluptates commodi sint. Vitae, saepe quaerat soluta iure harum dicta nesciunt sunt ullam sit perferendis error adipisci suscipit minus quae? Quo voluptates ipsum pariatur distinctio sapiente? Sint cumque impedit et?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, autem in. Similique iste est consectetur ex numquam quam blanditiis nulla, totam facilis maiores error eveniet soluta quia voluptatum in, dolorem illo tempora minus nobis! Vitae tempora odio eum a dignissimos quae deleniti perferendis esse ipsum porro doloribus veritatis ducimus aliquid sint, quaerat quas officia enim ab numquam asperiores! Dolores, voluptatibus molestias ducimus cupiditate tempora autem quisquam voluptatem blanditiis provident temporibus.</p>
                    </div>
                </div>
                <div className={`col-xl-6 col-md-6 col-sm-12 ${styles.homeImg}`}><img src="./img/home_1.jpg" alt=""/></div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 col-sm-12 order-xl-2 order-md-2 ">
                    <div className="col-xl-7 col-md-10 mt-5 text-start ms-auto ">
                        <div className='line mt-5 mb-4'></div>
                        <h1>Infrastructure</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora ex voluptas suscipit et doloribus saepe quo nihil quos! Praesentium voluptates commodi sint. Vitae, saepe quaerat soluta iure harum dicta nesciunt sunt ullam sit perferendis error adipisci suscipit minus quae? Quo voluptates ipsum pariatur distinctio sapiente? Sint cumque impedit et?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, autem in. Similique iste est consectetur ex numquam quam blanditiis nulla, totam facilis maiores error eveniet soluta quia voluptatum in, dolorem illo tempora minus nobis! Vitae tempora odio eum a dignissimos quae deleniti perferendis esse ipsum porro doloribus veritatis ducimus aliquid sint, quaerat quas officia enim ab numquam asperiores! Dolores, voluptatibus molestias ducimus cupiditate tempora autem quisquam voluptatem blanditiis provident temporibus.</p>
                    </div>
                </div>
                <div className={`col-xl-6 col-md-6 col-sm-12 ${styles.homeImg}`}><img src="./img/home_2.jpg" alt=""/></div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 col-sm-12">
                    <div className="col-xl-7 col-md-10 mt-5 text-start">
                        <div className='line mt-5 mb-4'></div>
                        <h1>Commercial</h1>
                        <div className={`${styles.homeImgSm} my-4`}>
                            <img src="./img/home_3_1.jpg" alt=""/>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, autem in. Similique iste est consectetur ex numquam quam blanditiis nulla, totam facilis maiores error eveniet soluta quia voluptatum in, dolorem illo tempora minus nobis! Vitae tempora odio eum a dignissimos quae deleniti perferendis esse ipsum porro doloribus veritatis ducimus aliquid sint, quaerat quas officia enim ab numquam asperiores! Dolores, voluptatibus molestias ducimus cupiditate tempora autem quisquam voluptatem blanditiis provident temporibus.</p>
                    </div>
                </div>
                <div className={`col-xl-6 col-md-6 col-sm-12 ${styles.homeImg}`}><img src="./img/home_3.jpg" alt=""/></div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomeDo