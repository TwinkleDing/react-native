import React, {Component} from 'react';
import {View, Text, TimePickerAndroid} from 'react-native';
export default class ImgPick extends Component {
  render() {
    return (
      <View>
        <Text onPress={this.open}>打开时间(旧的)</Text>
      </View>
    );
  }
  async open() {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }
}
