import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil';

export default class OverviewPage extends Component {
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator({
        FocusTab: {
          screen: TopTab,
          navigationOptions: {
            title: '关注',
          },
        },
        FoundTab: {
          screen: TopTab,
          navigationOptions: {
            title: '发现',
          },
        },
      }),
    );
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <TabNavigator />
      </View>
    );
  }
}

/**
 * 顶部导航组件
 */
class TopTab extends Component {
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
        <Text>游戏库</Text>
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