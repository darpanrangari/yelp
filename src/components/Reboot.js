import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { Text, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Body, H3 } from 'native-base';

const Reboot = (props) => {



  return (
      <Layout heading='Restaurant Details'>
        <Card>
          <CardItem>
            <Body>
            <H3 style={{marginBottom:10,marginTop:10}}>Reboot :</H3>
            <Text style={styles.title}>

            </Text>
            </Body>
          </CardItem>
        </Card>

      </Layout>
  );

};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 200,
    marginBottom: 10,
  },
  map: {
    height: 400,
    width: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
});
export default Reboot;
