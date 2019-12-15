import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Drawer from '../components/DrawerNavigator';
import FlatList from '../components/FlatList';
import Image from '../components/Image';
import Picker from '../components/Picker';
import ProgressBar from '../components/ProgressBar';
import NoWrite from '../components/NoWrite';
import Slider from '../components/Slider';
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
        <View style={styles.items}>
          <Drawer />
        </View>
        <View style={styles.items}>
          <FlatList />
        </View>
        <View style={styles.items}>
          <Image />
        </View>
        <View style={styles.items}>
          <Picker />
        </View>
        <View style={styles.items}>
          <ProgressBar />
        </View>
        <View style={styles.items}>
          <Slider />
        </View>
        <View style={styles.items}>
          <NoWrite />
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
