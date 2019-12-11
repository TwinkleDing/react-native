import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import LinearGradient from 'react-native-linear-gradient';

export default class Welcome extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation,
      });
    }, 2000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <LinearGradient
        useAngle={true}
        angle={-45}
        angleCenter={{x: 0, y: 0}}
        colors={['#eff0f1', '#eff0f1']}
        style={styles.container}>
        <View style={styles.container}>
          <Image source={require('../assets/img/welcome.png')} />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  logo: {
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 40,
  },
});
