import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
export default class ProgressBars extends Component {
  render() {
    return (
      <View>
        <Text>ss</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#ac0"
          maximumTrackTintColor="#000000"
        />
      </View>
    );
  }
}
