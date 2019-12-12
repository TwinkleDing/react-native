import React, {Component} from 'react';
import {Button} from 'react-native';
import {ToastAndroid} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <Button
        onPress={this.onPressLearnMore}
        title="Learn More"
        color="#841584"
        disabled={false} //是否可以点击
        testID="" //id
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
  onPressLearnMore() {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    ToastAndroid.showWithGravity(
      'All Your Base Are Belong To Us',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    ToastAndroid.showWithGravityAndOffset(
      'A wild toast appeared!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }
}
