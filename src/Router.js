import React from 'react';
import {Stack, Scene, Router } from 'react-native-router-flux';
import Sample from './components/Sample'
import Yelp from './components/Yelp'
const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene hideNavBar  key ='samplepage' component={Sample}/>
        <Scene hideNavBar initial key='yelp' component={Yelp}/>
      </Stack>
    </Router>
  );
};



export default RouterComponent;
