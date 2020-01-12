import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {MapView} from 'react-native-amap3d';

export default class MapTabs extends Component {
  constructor(props) {
    super(props);
  }
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView
          style={StyleSheet.absoluteFill} //这个必须加,不然不显示
          mapType="standard"
          coordinate={{
            latitude: 34.226,
            longitude: 108.869,
          }}
          zoomLevel={15}
          tilt={45}
          showsIndoorMap
          locationType="follow_no_center"
          showsCompass
          showsLocationButton
          scrollEnabled
          rotateEnabled
          tiltEnabled
          showsScale
          locationEnabled
        /> */}
        <Text style={styles.menu} onPress={this.openMenu}>
          打开菜单
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
    position: 'relative',
  },
  menu: {
    color: '#eee',
    backgroundColor: 'rgba(40, 126, 224, 0.924)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(40, 126, 224, 0.524)',
    padding: 10,
    borderRadius: 15,
    position: 'absolute',
    bottom: 10,
  },
});

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
