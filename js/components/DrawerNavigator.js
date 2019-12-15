import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

export default class DrawerPage extends Component {
  render() {
    console.log(this);
    const DrawerNavigator = createAppContainer(
      createDrawerNavigator(
        {
          第一: {
            screen: FouceTab,
          },
          第二: {
            screen: FouceTabs,
          },
        },
        {
          drawerBackgroundColor: '#aeeee0',
          drawerType: 'back', //front,slide,back
          overlayColor: '#ad0', //虚化背景色
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

class FouceTabs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            console.log(this);
            this.props.navigation.openDrawer();
          }}>
          打开
        </Text>
      </View>
    );
  }
}
/*
  为了完成 react-native-gesture-handler 在 Android 上的安装,请在 MainActivity.java 中做如下修改:

  package com.reactnavigation.example;

  import com.facebook.react.ReactActivity;

  + import com.facebook.react.ReactActivityDelegate;
  + import com.facebook.react.ReactRootView;
  + import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

  public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
      return "Example";
    }

  +  @Override
  +  protected ReactActivityDelegate createReactActivityDelegate() {
  +    return new ReactActivityDelegate(this, getMainComponentName()) {
  +      @Override
  +      protected ReactRootView createRootView() {
  +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
  +      }
  +    };
  +  }
  }
*/

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
