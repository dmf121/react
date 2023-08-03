import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import OrangeButton from '../UI/OrangeButton/orangeButton';
import Title from '../Title/title';

const TitleWithButton = (props) => {
    

  return (
    <div className="row justify-content-between">
        <Title {...props}/>
        
        <div className='col-xxl-3 col-md-4 col-sm-2 my-auto justify-content-end'>
            <OrangeButton {...props}/>
        </div>
    </div>
  )
}

export default TitleWithButton