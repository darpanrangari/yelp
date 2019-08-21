import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { Text, Image, FlatList, StyleSheet } from 'react-native';
import { Card, CardItem, Body, H3 } from 'native-base';
import yelp from '../api/yelp';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Sample = (props) => {
  const [ result, setResult ] = useState(null);

  const getResults = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(props.id);
  }, []);

  if (!result) {
    return null;
  }
  const coordinate = result.coordinates;

  return (
      <Layout heading='Restaurant Details'>
        <Card>
          <CardItem>
            <Body>

            <Text style={styles.title}>
              {result.name}
            </Text>
            <Text>Contact Number: {result.display_phone}</Text>
            <Text>Price: {result.price}</Text>
            <Text>Rating: {result.rating} out of {result.review_count} reviews</Text>

            <Text>{(result.is_closed) ? 'Closed now' : 'Open now'}</Text>
            <Text style={{ marginBottom: 10, marginTop: 10 }}>Photos: </Text>


            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                  return <Image source={{ uri: item }} style={styles.image}/>;
                }}
            />

            </Body>
          </CardItem>
        </Card>
        <H3 style={{marginBottom:10,marginTop:10}}>Location:</H3>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            region={{
              ...coordinate,
              latitudeDelta: 0.04,
              longitudeDelta: 0.05,
            }}
        >
          <Marker
              coordinate={{ ...coordinate }}
              title={result.name}
          />
        </MapView>

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
export default Sample;
