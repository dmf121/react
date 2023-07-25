import React, {useState} from 'react'

import styles from './CustomerCare.module.scss'

const CustomerCare = () => {

    const [input1Value, setInput1Value] = useState("");
    const [input2Value, setInput2Value] = useState("");
    const [input3Value, setInput3Value] = useState("");
    const [input4Value, setInput4Value] = useState("");

    const submitMessage = () => {
        setInput1Value('');
        setInput2Value('');
        setInput3Value('');
        setInput4Value('');
    }
  

  const areInputsFilled = () => {
    return input1Value !== "" && input2Value !== "" && input3Value && input4Value !== "";
  };
  return (
    <div>
        <div className={`${styles.contactForm}`}>
            <div className="text-center pt-5">
                <h3>CUSTOMER CARE</h3>
                <p>Have any questions or concerns ? We’re always ready to help! Call us at <span>123-456-7890</span> or send us an email at <span>info@mysite.com</span></p>
            </div>
            <div className="container">
                <div className="col-xl-8 mx-auto py-4">
                    <div className={`${styles.contactInputs} row`}>
                        <div className={`col-xl-6 col-lg-6 ${styles.input} `}>
                            <input type="text" placeholder='Name' value={input1Value} onChange={(e) => setInput1Value(e.target.value)}/>
                            <input type="text" placeholder='Email' value={input2Value} onChange={(e) => setInput2Value(e.target.value)}/>
                            <input type="text" placeholder='Subject' value={input3Value} onChange={(e) => setInput3Value(e.target.value)}/>
                        </div>
                        <div className={`col-xl-6 col-lg-6 ${styles.textarea}`}>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message' value={input4Value} onChange={(e) => setInput4Value(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className=' row justify-content-end'>
                            <button className={styles.submitBtn} disabled={!areInputsFilled()} onClick={submitMessage} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Submit
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4 className='p-3'>Thank you! We will contact you shortly</h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container pb-5">
            <h3 className='py-5'>FAQ</h3>
            <div className="row pb-5">
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='py-3'>
                        <h4 className='py-4'>How do I track my order?</h4>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>

                    <div className='py-3'>
                        <h4 className='py-4'>How do I track my order?</h4>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>

                    <div className='py-3'>
                        <h4 className='py-4'>How do I return an item?</h4>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>

                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='py-3'>
                        <h4 className='py-4'>How can I contact your couriers?</h4>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>

                    <div className='py-3'>
                        <h4 className='py-4'>Do you provide International delivery?</h4>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>

                    <div className='py-3'>
                        <h4 className='py-4'>What is your returns policy?</h4>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerCare