import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil';

export default class FoundPage extends Component {
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(
        {
          FocusTab: {
            screen: FouceTab,
            navigationOptions: {
              title: '关注',
            },
          },
          FoundTab: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
          FoundTab1: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
          FoundTab2: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
          FoundTab3: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
        },
        {
          initialRouteName: 'FoundTab',
          lazy: true,
          tabBarOptions: {
            scrollEnabled: true,
          },
        },
      ),
    );
    return (
      <View style={{flex: 1}}>
        <TabNavigator />
      </View>
    );
  }
}

/**
 * 顶部导航组件
 */
class FouceTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Text
          onPress={() => {
            NavigationUtil.goPage(
              {
                navigation: this.props.navigation,
              },
              'DetailPage',
            );
          }}>
          跳转到详情页
        </Text>
        <Text
          onPress={() => {
            console.log(this.props);
          }}>
          关注
        </Text>
      </View>
    );
  }
}
class FoundTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>222{tabLabel}</Text>
        <Text
          onPress={() => {
            NavigationUtil.goPage(
              {
                navigation: this.props.navigation,
              },
              'DetailPage',
            );
          }}>
          跳转到详情页
        </Text>
        <Text>发现</Text>
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
    margin: 10,
  },
});
