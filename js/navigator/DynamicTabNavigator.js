import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FoundPage from '../pages/FoundPage';
import CommunityPage from '../pages/CommunityPage';
import GamePage from '../pages/GamePage';
import UserPage from '../pages/UserPage';
import NavigationUtil from './NavigationUtil';
import Icon from '../components/Icon/MyIcon';

const TABS = {
  FoundPage: {
    screen: FoundPage,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name={'found'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  GamePage: {
    screen: GamePage,
    navigationOptions: {
      tabBarLabel: '游戏库',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name={'game'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  CommunityPage: {
    screen: CommunityPage,
    navigationOptions: {
      tabBarLabel: '社区',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name={'community'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  UserPage: {
    screen: UserPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name={'my'} size={26} style={{color: tintColor}} />
      ),
    },
  },
};

export default class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  _tabNavigator() {
    const {FoundPage, CommunityPage, GamePage, UserPage} = TABS;
    const tabs = {FoundPage, CommunityPage, GamePage, UserPage};
    // FoundPage.navigationOptions.tabBarLabel = '园区'; //动态配置tab属性
    return createAppContainer(
      createBottomTabNavigator(tabs, {
        lazy: true,
        animationEnabled: false,
        initialRouteName: 'FoundPage',
        tabBarOptions: {
          tabStyle: {minWidth: 50, marginTop: 5},
          upperCaseLabel: false,
          scrollEnabled: false,
          labelStyle: {
            fontSize: 12,
          },
        },
      }),
    );
  }

  render() {
    // NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator();
    return <Tab />;
  }
}
