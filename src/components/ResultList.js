import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Body, Card, CardItem, Left, Title, Thumbnail,Badge,Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
const ResultList = ({ title, results }) => {
  return (
      <View>


        <Text style={styles.title}>
          {title}
        </Text>

        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return (
                  <TouchableOpacity onPress={() => Actions.samplepage({id:item.id})}>
                    <Card>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{ uri: item.image_url }}/>
                        <Body>
                        <Text>
                          {item.name}
                        </Text>
                        <Text note>Reviews: {item.review_count}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{ uri: item.image_url }} style={{ height: 200, width: 250, flex: 1 }}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                      <Text>Contact Number: {item.display_phone}</Text>
                      <Text>Price: {item.price}</Text>






                      <Text>{item.rating} <Icon name="star" style={{  color: "#000",fontSize:16  }}/></Text>

                      <Text>{(item.is_closed) ? 'Closed now' : 'Open now'}</Text>
                      </Body>
                    </CardItem>
                  </Card></TouchableOpacity>
              );
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default ResultList;
