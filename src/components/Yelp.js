import React, { useState } from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Text,
  Subtitle,
  Item,
  Label,
  Input,
  Content,
  Form,
} from 'native-base';
import { Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const Yelp = () => {
  const [ term, setTerm ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ searchApi, results, errorMessage ] = useResults();

  const filterResultByPrice = (price) =>{
    return results.filter(result => {
      return result.price === price
    });
  };
  return (
      <Container>
        <Header>
          <Body>
          <Title>Restaurants</Title>
          <Subtitle>Search screen</Subtitle>
          </Body>
        </Header>
        <Grid>
          <ScrollView>
            <Content>
              <Form>
                <Item stackedLabel first>
                  <Label>location</Label>
                  <Input
                      onChangeText={value => setLocation(value)}
                  />
                </Item>
                <Item stackedLabel last>
                  <Label>Dish</Label>
                  <Input
                      onChangeText={value => setTerm(value)}
                      onEndEditing={() => searchApi(term, location)}
                      success
                  />
                </Item>
              </Form>
            </Content>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultList title="Cost Effective" results={filterResultByPrice('£')}/>
            <ResultList title="Bit Pricer" results={filterResultByPrice('££')}/>
            <ResultList title="Big Spender" results={filterResultByPrice('£££')}/>
          </ScrollView>
        </Grid>
      </Container>
  );

};

export default Yelp;
