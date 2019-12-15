import React, {Component} from 'react';
import {View, Text, Vibration} from 'react-native';

export default class Vibrations extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text onPress={this.click}>震动</Text>
      </View>
    );
  }
  click() {
    const DURATION = 10000;
    const PATTERN = [1000, 2000, 3000];

    Vibration.vibrate(DURATION);
    // Android: vibrate for 10s
    // iOS: duration is not configurable, vibrate for fixed time (about 500ms)

    Vibration.vibrate(PATTERN);
    // Android: wait 1s -> vibrate 2s -> wait 3s
    // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate

    Vibration.vibrate(PATTERN, true);
    // Android: wait 1s -> vibrate 2s -> wait 3s -> wait 1s -> vibrate 2s -> wait 3s -> ...
    // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> ...

    Vibration.cancel();
    // Android: vibration stopped
    // iOS: vibration stopped
  }
}
