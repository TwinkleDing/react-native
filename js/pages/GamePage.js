import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
export default class GamePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.items}>
          <ActivityIndicator />
        </View>
        <View style={styles.items}>
          <Button />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  items: {
    marginBottom: 20,
  },
});
