import React from 'react';

import HomeTiles from '../homeTiles/HomeTiles';
import HomeArrivals from '../homeArrivals/HomeArrivals';
import HomeSubscribe from '../homeSubscribe/HomeSubscribe';
import HomeTilesBottom from '../homeTilesBottom/HomeTilesBottom';

const Home = () => {
  return (
    <div>
        <HomeTiles/>
        <HomeArrivals/>
        <HomeSubscribe/>
        <HomeTilesBottom/>
    </div>
  )
}

export default Home