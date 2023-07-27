import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom';

import styles from './PlaceOrder.module.scss'

const PlaceOrder = ({onQuantityChange, cartItems}) => {

    const navigate  = useNavigate ();

    const place = () => {
        localStorage.clear();
        onQuantityChange(0)
    }

    const [input1Value, setInput1Value] = useState("");
    const [input2Value, setInput2Value] = useState("");
    const [input3Value, setInput3Value] = useState("");
    const [input4Value, setInput4Value] = useState("");
    const [input5Value, setInput5Value] = useState("");

  const areInputsFilled = () => {
    return input1Value !== "" && input2Value !== "" && input3Value !== "" && input4Value !== "" && input5Value !== "";
  };

  return (
    <div>
        <div className="container">
            <Link onClick={() => navigate(-1)} className='link'>
                            <button className='back-btn'>
                                <img src="../../img/back-btn.png" alt="" />
                                Back
                            </button>
            </Link>
            <div className="row">
                <div className={`${styles.form} col-12 col-xl-8 col-lg-8 col-md-10 col-sm-12 mx-auto pb-5`}>
                    <div className="text-center pt-3 pb-5"><h3>PLACING ORDER</h3></div>
                            <input type="text" placeholder='Full Name' value={input1Value} onChange={(e) => setInput1Value(e.target.value)}/>
                            <input type="text" placeholder='Phone Number' value={input2Value} onChange={(e) => setInput2Value(e.target.value)}/>
                            <input type="text" placeholder='Country' value={input3Value} onChange={(e) => setInput3Value(e.target.value)}/>
                            <input type="text" placeholder='City' value={input4Value} onChange={(e) => setInput4Value(e.target.value)}/>
                            <input type="text" placeholder='Address' value={input5Value} onChange={(e) => setInput5Value(e.target.value)}/>
                            <textarea name="" id="" placeholder='Comment'></textarea>
                            <div className="row">
                                <div className='col text-end'><Link to='/done'><button className={`${styles.placeBtn} col text-end`} onClick={place} disabled={cartItems.length===0 || !areInputsFilled()}>SUBMIT</button></Link></div>
                            </div> 
                </div>
            </div>
        </div>
        
                
    </div>
  )
}

export default PlaceOrder