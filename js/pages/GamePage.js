import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  BackHandler,
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Drawer from '../components/DrawerNavigator';
import FlatList from '../components/FlatList';
import Image from '../components/Image';
import Picker from '../components/Picker';
import ProgressBar from '../components/ProgressBar';
import NoWrite from '../components/NoWrite';
import Slider from '../components/Slider';
import Switch from '../components/Switch';
import TextInput from '../components/TextInput';
import ToucHigh from '../components/ToucHigh';
import TouchableOpacity from '../components/TouchableOpacity';
import ImagePick from '../components/ImgPick';
import DatePick from '../components/DatePickerAndroid';
import TimePick from '../components/TimePickerAndroid';
import KeyBoard from '../components/KeyBoard';
import PanResponder from '../components/PanResponder';
import Share from '../components/Share';
import Vibrations from '../components/Vibrations';
export default class GamePage extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.items}>
          <ActivityIndicator />
        </View>
        <View style={styles.items}>
          <Button />
        </View>
        <View style={styles.items}>
          <Drawer navigation={this.props.navigation} />
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
          <Switch />
        </View>
        <View style={styles.items}>
          <TextInput />
        </View>
        <View style={styles.items}>
          <TouchableOpacity />
        </View>
        <View style={styles.items}>
          <ToucHigh />
        </View>
        <View style={styles.items}>
          <ImagePick />
        </View>
        <View style={styles.items}>
          <DatePick />
        </View>
        <View style={styles.items}>
          <TimePick />
        </View>
        <View style={styles.items}>
          <Vibrations />
        </View>
        <View style={styles.items}>
          <KeyBoard />
        </View>
        <View style={styles.items}>
          <PanResponder />
        </View>
        <View style={styles.items}>
          <Share />
        </View>
        <View style={styles.items}>
          <NoWrite />
        </View>
      </ScrollView>
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
