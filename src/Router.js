import React from 'react';
import {Stack, Scene, Router } from 'react-native-router-flux';
import Sample from './components/Sample'
import Yelp from './components/Yelp'
import Reboot from './components/Reboot'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene hideNavBar key ='samplepage' component={Sample}/>
        <Scene hideNavBar key='yelp' component={Yelp}/>
        <Scene hideNavBar initial key='Reboot' component={Reboot}/>
      </Stack>
    </Router>
  );
};



export default RouterComponent;
