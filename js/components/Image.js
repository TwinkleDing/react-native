import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class Images extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={require('../assets/img/welcome.png')}
        />
      </View>
    );
  }
}
