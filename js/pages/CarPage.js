import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from '../components/Icon/MyIcon';

export default class CarPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Car Page! </Text>
        <Icon name={'found'} size={50} color="#226688" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
