import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MapTabs from './MapTabs';

export default class DrawerPage extends Component {
  render() {
    const DrawerNavigator = createAppContainer(
      createDrawerNavigator(
        {
          第一: {
            screen: FouceTab,
          },
          高德地图: {
            screen: MapTabs,
          },
        },
        {
          drawerBackgroundColor: '#aeeee0',
          drawerType: 'back', //front,slide,back
          overlayColor: '#ad0', //虚化背景色
          backBehavior: 'none',
        },
      ),
    );
    return (
      <View style={{flex: 1, padding: 0}}>
        <DrawerNavigator />
      </View>
    );
  }
}
class FouceTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.props.navigation.openDrawer();
          }}>
          打开
        </Text>
        <Text
          onPress={() => {
            this.props.navigation.closeDrawer();
          }}>
          关闭
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
