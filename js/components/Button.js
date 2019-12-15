import React, {Component} from 'react';
import {View, Button, StyleSheet, ToastAndroid, Alert} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.wid}>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          disabled={false} //是否可以点击
          testID="" //id
          width="100"
          accessibilityLabel="Learn more about this purple button"
          style={styles.wid}
        />
        <Button onPress={this.alert} title="alert" />
      </View>
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
  alert() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
}
const styles = StyleSheet.create({
  widh: {
    width: 100,
    backgroundColor: 'red',
    height: 200,
  },
});
