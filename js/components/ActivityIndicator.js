import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <View>
          <Text style={styles.text}>Loading加载</Text>
        </View>
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
