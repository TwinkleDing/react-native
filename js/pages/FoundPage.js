import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import FoundTab from '../tabs/FoundTabs';
import FocusTab from '../tabs/FocusTabs';
export default class FoundPage extends Component {
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(
        {
          FocusTab: {
            screen: FocusTab,
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
