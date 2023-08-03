import React from 'react';


import HomeMain from '../homeMain/homeMain';
import HomeDo from '../HomeDo/homeDo';
import HomeWho from '../homeWho/homeWho';
import HomeServices from '../homeServices/homeServices';
import HomeClients from '../homeClients/homeClients';

const Home = ({setIndex}) => {
  return (
    <div>
        <HomeMain setIndex={setIndex}/>
        <HomeDo/>
        <HomeWho/>
        <HomeServices/>
        <HomeClients/>
    </div>
  )
}

export default Home