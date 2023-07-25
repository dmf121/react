import React from 'react'

import styles from './VisitUs.module.scss'

const VisitUs = () => {
  return (
    <div>
        <div className="container">
            <h3 className='text-center py-5'>VISIT US AT OUR STORE</h3>
            
            <div className="row pb-5">
                <div className="col-xl-8 col-lg-9 col-md-10 col-sm-12 mx-auto">
                    <div className="row ">
                        <div className="col-xl-4 col-lg-4">
                            <div>
                                <h4>Address:</h4>
                                <p>500 Terry Francine Street
                                    San Francisco, CA 94158
                                </p>
                            </div>
                            <div>
                                <h4>Opening Hours:</h4>
                                <p>Mon-Thu: 10:00am - 7:00pm
                                    Friday: 9:00am - 9:00pm
                                    Saturday: 9:00am - 5:00pm
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.map} col-xl-8 col-lg-8`}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5077.476400050967!2d30.474676762866522!3d50.483217354117954!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1689850595700!5m2!1sru!2sua" title="Map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-xl-8 text-center mx-auto pb-5">
                    <h3>ABOUT US</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisitUs