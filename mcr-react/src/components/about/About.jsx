import React from 'react';
import styles from './About.module.css'

import Title from '../Title/title';


const About = () => {
  return (
    <div className='py-5'>
        <div className="container">
            <Title
                texth5='About Us'
                texth1='We Build for People'
            />

            <div className="row mt-5 py-5">
                <div className={`col ${styles.aboutImg}`}>
                    <img src="../img/about_1.jpg" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="col-lg-7 col-md-10">
                        <h3 className="mb-4">Masterson & Richards Construction Associates</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat temporibus commodi quae ab doloribus, ullam veniam? Nihil pariatur hic eos, ipsam dolorum est at et praesentium, quam ullam labore aut unde voluptatum aperiam rerum dolore eaque adipisci, architecto neque?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla odio reprehenderit, dicta animi ad incidunt dolorem repellendus autem, deserunt rerum natus sint iure! Doloremque, minus. Error doloribus eligendi mollitia officiis. Perspiciatis corrupti mollitia numquam assumenda doloremque. Dignissimos tempora eius, quasi quo itaque, cum laudantium adipisci odio, perspiciatis inventore molestias nesciunt?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, quasi.</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="col-lg-6 col-md-10">
                        <div className="row">
                            <div className="line ms-3 my-3"></div>
                            <h4>Relationships</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae est rerum dolore laudantium, explicabo ipsa atque nihil molestias tenetur.</p>
                        </div>

                        <div className="row">
                            <div className="line ms-3 my-3"></div>
                            <h4>Experience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae est rerum dolore laudantium, explicabo ipsa atque nihil molestias tenetur.</p>
                        </div>

                        <div className="row">
                            <div className="line ms-3 my-3"></div>
                            <h4>Accountability</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae est rerum dolore laudantium, explicabo ipsa atque nihil molestias tenetur.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-xl-5 col-md-6 col-sm-12">
                        <Title
                            className='col-xl-7 col-md-10'
                            texth5='Our Mission'
                            texth1='We Aim to Build a Better World'
                        />
                    <div className="col-xl-7 col-md-10 mt-5">
                        
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus dolorum cum velit reprehenderit aliquam doloribus odio blanditiis libero beatae, error quidem fugiat, eveniet incidunt, expedita non. Aut, delectus ad.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam, ad, consequuntur illo reiciendis qui accusamus corporis doloribus eveniet amet ullam incidunt. Eveniet suscipit et soluta minima labore mollitia molestiae architecto, illum accusantium. Pariatur, quidem. Ipsam voluptatum odit maiores ex!</p>

                    </div>
                </div>
                <div className={`col-xl-7 col-md-6 col-sm-12 ${styles.aboutImg}`}><img src="../img/about_2.jpg" alt=""/></div>
            </div>
        </div>
    </div>
  )
}

export default About