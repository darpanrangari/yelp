import React, { Component } from 'react';
import { Container, Header, Body, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native';

export default Layout = (props) => {

    return (
        <Container>
          <Header>
            <Body>
            <Title>{props.heading}</Title>
            </Body>
          </Header>
          <Grid>
            <ScrollView>
              <Row>
                <Col style={{ backgroundColor: '#ffffff' }}>
                  {props.children}
                </Col>
              </Row>
            </ScrollView>
          </Grid>
        </Container>
    );
  }

