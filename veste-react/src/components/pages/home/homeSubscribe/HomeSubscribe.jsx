import React, {useState} from 'react'

import styles from './HomeSubscribe.module.scss'

const HomeSubscribe = () => {

    const [inputValue, setInputValue] = useState("");
    const submitMessage = () => setInputValue('');
  

  const areInputsFilled = () => {
    return inputValue !== "";
  };
  return (
    <div className={styles.subscribe}>
        <div className="container pb-5">
            <div className="row pt-5">
                    <div className="col py-5 text-center">
                        <h1>GET ON THE LIST</h1>
                        <h4>and be the first to shop new arrivals and exclusive promotions.</h4>
                    </div>
                </div>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12 ">
                    <input type="text" placeholder='Enter your email here' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </div>
            </div>
            <div className="row pt-3 pb-5 justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12">
                    <button className={styles.subscribeBtn} disabled={!areInputsFilled()} onClick={submitMessage} data-bs-toggle="modal" data-bs-target="#exampleModal">Subscribe Now</button>
                </div>
            </div>
        </div>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4 className='p-3'>Thank you! You've been subscribed</h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSubscribe